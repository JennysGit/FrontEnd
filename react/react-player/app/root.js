import './assets/reset.css';


import React from 'react';
import Header from './components/header';
import Player from './page/player';

let duration = null;

let Root = React.createClass({
	componentDidMount(){
		console.log($('#player').length);
		$('#player').jPlayer({
			ready: function(){
				$(this).jPlayer('setMedia', {
					mp3:'http://res.webftp.bbs.hnol.net/zhangyu/music/cd114/01.mp3'
				}).jPlayer('play');
			},
			supplied:'mp3',
			wmode:'window'
		});
	},
	render(){
		return (
			<div>
				<Header/>
				<Player></Player>
			</div>
			)
	}
});

export default Root;