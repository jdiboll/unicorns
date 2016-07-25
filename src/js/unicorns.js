import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Unicorns extends Component {

	constructor () {
		super ();
		this.state = {
			location: "Barn"
		};
	}



    onChange(location){
        this.setState({location: location.target.value});
    };



	render() {
        //let message = 'Location: ' + this.state.location;
		return (
			<div className="content">
				<h1>Unicorns</h1>
				<div className="unicorn-wrapper">
					<div className="uni1">
						<h4>George</h4>
						<img src="http://www.scriptonitedaily.com/wp-content/uploads/2013/02/fm1.jpg" />
							<div className="selection">
         						<select defaultValue={this.state.selectValue} onChange={::this.onChange}>
            					<option value="Barn">Barn</option>
            					<option value="Pasture">Pasture</option>
            					<option value="Stable">Stable</option>
          						</select>
          					</div> 
					</div>
					<div className="uni2">
						<h4>Paul</h4>
						<img src="https://s-media-cache-ak0.pinimg.com/736x/8c/b0/90/8cb0901ec5847d78812d3289fc5958e6.jpg" />
							<div className="selection">
         						<select defaultValue={this.state.selectValue} onChange={this.onChange}>
            					<option value="Barn">Barn</option>
            					<option value="Pasture">Pasture</option>
            					<option value="Stable">Stable</option>
          						</select>
          					</div> 
					</div>
					<div className="uni3">
						<h4>John</h4>
						<img src="https://s-media-cache-ak0.pinimg.com/564x/3d/0d/28/3d0d283c9f265cc0c930fc7398863c52.jpg" />
							<div className="selection">
         						<select defaultValue={this.state.selectValue} onChange={this.onChange}>
            					<option value="Barn">Barn</option>
            					<option value="Pasture">Pasture</option>
            					<option value="Stable">Stable</option>
          						</select>
          					</div> 
					</div>
					<div className="uni4">
						<h4>Ringo</h4>
						<img src="https://s-media-cache-ak0.pinimg.com/736x/80/e0/61/80e06175e70fdb05c585a2f49d5f1db1.jpg" />
							<div className="selection">
         						<select defaultValue={this.state.selectValue} onChange={this.onChange}>
            					<option value="Barn">Barn</option>
            					<option value="Pasture">Pasture</option>
            					<option value="Stable">Stable</option>
          						</select>
          					</div> 
					</div>
				</div>
			</div>


			)
	};
};