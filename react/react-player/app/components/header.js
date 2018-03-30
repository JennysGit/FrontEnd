import './header.scss';

import React from 'react';

let Header = React.createClass({
    render() {
        return (
        	<div className="component-header">
        		<img src="assets/img/logo.jpg"  />
        	 	<h1 className="caption">
        	 	React Music Player
        	 	</h1>
        	</div>
        );
    }
});

export default Header;