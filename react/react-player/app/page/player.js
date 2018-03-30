import React from 'react';
import Progress from '../components/progress';

let duration = null;

let Player = React.createClass({
    getInitialState() {
        return {
            progress: '-'
        }
    },
    componentDidMount() {
        $('#player').bind($.jPlayer.event.timeupdate, (e) => {
            duration = e.jPlayer.status.duration;

            this.setState({
                progress: Math.round(e.jPlayer.status.currentPercentAbsolute)
            })
        });
    },
    componentWillUnMount(){
		$('#player').unbind($.jPlayer.event.timeupdate);
	},
	progressChangeHandler(progress){
		console.log("from root widget", progress);
		$('#player').jPlayer('play', duration * progress);
	},
	render() {
		return (
				<div className="player-page">
					<p>我的私人乐坊</p>
					<div className="player-info">
						<h2>歌曲名称</h2>
						<p>歌曲名称</p>

						<div className="play-controll">
							<div className="">-2:00</div>
							<div>播放进度部分</div>
							<div>
								<span></span>
								<span className="paly-pause"></span>
								<span></span>
							</div>
						</div>
					</div>
				</div>
			);
	}
});

export default Player;