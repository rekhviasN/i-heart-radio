import React from 'react';

export default class Footer extends React.Component{

	render(){
		return (
			<div className="footer">
				<div className="footer-left"> © 2017 iHeartMedia, Inc. Handmade in New York City. </div>
				<div className="footer-right">
					<a href="" className="footer-link">Privacy Policy </a> | 
					<a href="" className="footer-link"> Terms of Use</a>
				</div>
			</div>
			)
	}
}