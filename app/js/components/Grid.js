import React from 'react';
import axios from 'axios'
import data from '../data.js'
import Feature from './Feature.js';
import Form from './Form.js';

function makeUrl(id) {
  return (
    "http://api-3283.iheart.com/api/v1/catalog/searchAll?keywords="
    + id
    + "&queryTrack=false&queryBundle=false&queryArtist=true&queryStation=false"
    + "&queryFeaturedStation=false&queryTalkShow=false&queryTalkTheme=false"
    + "queryKeyword=false&countryCode=US"
  )
}

export default class Grid extends React.Component{

	constructor(props) {
    super(props);
    this.state = {value: '', data: data , notFound: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
  	event.preventDefault();
    axios.get(makeUrl(this.state.value))
	  .then((resp)=>{
	  	const { artists } = resp.data;
	  	if(!artists.length) {
	  		this.setState({ value: "", data: [], notFound : true })
	  	}else{
		  	const newGridData = artists.map(({artistName, artistId})=> {
		  		return {
						name: artistName,
						url: "http://iscale.iheart.com/catalog/artist/"+artistId+"?ops=fit(250,0)"
					 }
		  	})
		  	this.setState({value: "", data: newGridData, notFound: false })
		  }
	  })
	  .catch(error => console.log(error))

  }

	render(){
		const { data, value, notFound } = this.state

		return (
			<div className="grid">
				<div className="form">
					<Form
						handleSubmit={this.handleSubmit}
			      handleChange={this.handleChange}
			      value={value}
					/>
					{ notFound ? <div className="not-found">No artists found</div> : null }
				</div>
					<div className="main-body">
						<div className="container-fluid">
				      <div className="row">
				        {data.slice(0,3).map((item, i)=> <Feature key={i} item={item} /> )}
				    		<div className="clearfix visible-md visible-lg visible-sm"></div>
				        {data.slice(3,6).map((item, i)=> <Feature key={i} item={item} /> )}
				   	  </div>
					</div>
				</div>
			</div>
		)
	}
}
