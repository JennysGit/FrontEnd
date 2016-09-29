var data = [
  {id: 1, author: "Pete Hunt", text: "Pete Hunt comment"},
  {id: 2, author: "Jordan Walke", text: "*Jordan Walke* comment"}
]

var CommentBox = React.createClass({
  render: function(){
    return (
        <div className="commentBox">
          <h1>Comments</h1>
          <CommentList data= {this.props.data}/>
          <CommentForm/>
        </div>
      );
  }
});



var CommentList = React.createClass({
  render: function(){
    var commentNodes = this.props.data.map(function(comment){
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
   
  }
});

var CommentForm = React.createClass({
  getInitialState: function(){
    return {author: '', text:''};
  },
  handleAuthorChange: function(e){
    this.setState({author: e.target.value});
  },
  handleTextChange: function(e){
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    var author = this.state.author.trim();
    var text = this.state.text.trim();

    if(!text || !author){
      return;
    }
    this.setState({author: '', text:''});
  },
  render: function(){
    return (
      <div className="commentForm">
        <p>Adding New Comment</p>
        <form>
            <input type="text" placeholder="Your name"  value={this.state.author} onChange={this.handleAuthorChange}/>
            &nbsp; &nbsp;
            <input type="text" placeholder="Say something" value={this.state.text} onChange ={this.handleTextChange}/>
            <input type="submit" value="Submit" />            
        </form>
      </div>
    );
  }
});

var Comment = React.createClass({
  // format text inline??
  rawMarkup: function(){
    var md = new Remarkable();
    var rawMarkup = md.render(this.props.children.toString());
    return {__html: rawMarkup};
  },
  render: function(){
    
    return (
      <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          <span dangerouslySetInnerHTML = { this.rawMarkup()} />
      </div>
    );
  }
});

 ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);
