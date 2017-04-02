import React from 'react';


export default class Feature extends React.Component {	
	render(){
		const { url, name, description } = this.props.item

		return (
			<div className="col-xs-6 col-sm-4">
				<div className="fa fa-angle-double-right">
					<div className="feature-box box">			
						<img className="feature-image" src={url} alt ={name} />
						<div className="feature-artist-name">
							{name}
						</div>
						<div className="feature-description">
							{description || null}
						</div>
					</div>
				</div>
			</div>
		)
	}
}

