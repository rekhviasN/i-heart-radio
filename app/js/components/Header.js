import React from 'react';

export default class Header extends React.Component{
	render(){
		return (
			<div className="header">
				<img className="header-logo" src="js/public/iheartradio_logo.png" alt="logo"/>
				<div className="header-menu">
					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
				</div>
			</div>
		)
	}
}