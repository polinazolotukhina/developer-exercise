import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Options extends Component {
	constructor() {
  	super();
 		 this.state={items:[]};
		 this.fetchData()
  }
	fetchData = () =>{
		fetch('http://localhost:3333/')
			.then((resp) => resp.json())
			.then((result) => {
					this.setState({items: result.placements});
					console.log(this.state.items)
		});
	}

  render() {
  	return(
			<div>
			{
				 	this.state.items && this.state.items.map((section, index) =>
				 		<div  key={index}>
							<div className = "options clearfix">
									<h2 className="text-center" >{section.message}</h2>

										{
											section.items && section.items.map((item) =>
												<div className="item" key={item.id}>
													<img src={item.imageURL}/>
															<a href={item.linkURL}><h3>{item.name}</h3></a>
		                    			<p>{item.price}£</p>
												</div>
											)
										}




							</div>
						</div>
					)
			 }

      </div>
   	)
  }
}
export default  Options ;
