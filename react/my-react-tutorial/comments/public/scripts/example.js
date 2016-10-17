var data = [
  {id: 1, author: "Pete Hunt", text: "Pete Hunt comment"},
  {id: 2, author: "Jordan Walke", text: "*Jordan Walke* comment"}
]

var CommentBox = React.createClass({
	render: function(){
		return (
			<div  className="comment-box">
				<h1> Comments </h1>
				<CommentForm />
				<CommentList data={this.props.data}/>
			</div>
		);
	}
});

var CommentForm = React.createClass({
	getInitialState: function(){
		return {author: '', text: ''};
	},
	handleAuthorChange: function(e){
		this.setState({author: e.target.value})
	},
	handleCommentsChange: function(e){
		this.setState({text: e.target.value})
	},
	handleSubmit: function(e){
		var comments = this.state.data;
		console.log(comments);
		e.preventDefault();
		var author = this.state.author.trim();
		var text = this.state.text.trim();
		if(!author || !author){
			return;
		}else{

			var len = data.length;
			var comment = {
				id: data[len - 1] + 1,
				author: author,
				text: text
			};
			data.push(comment);
			this.setState({data: data});
		}
		return;
	},

	render: function(){
		return (
			<form className="comment-form" onSubmit={this.handleSubmit}>
				<input type="text" placeholder="comments here" value={this.state.text} onChange={this.handleCommentsChange}/>
				<input type="text" placeholder = "your name"  value={this.state.author} onChange={this.handleAuthorChange}/>
				<input type="submit" value="Submit" />
			</form>
		);
	}
});

var CommentList = React.createClass({
	render: function(){
		var commentNodes = this.props.data.map(function(comment){
			return (
				<Comment author={comment.author} key={comment.id} text={comment.text}>
				</Comment>
			);
		});
		return (
			<div className="comment-list">
				{commentNodes}
			</div>
		)
	}
});

var Comment = React.createClass({
	render: function(){
		return (
			<div className="comment">
				<h3>{this.props.author}</h3>
				<p>{this.props.text}</p>
			</div>
		);
	}
});
ReactDOM.render(
	<CommentBox data= {data}/>,
	document.getElementById('content')
);