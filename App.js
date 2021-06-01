import React, { Component } from "react";
//import "./App.css";

class App extends Component {
	constructor() {
		super();
		this.state = {
			pictures: [],
		};
	}

	componentDidMount() {
		fetch(
			"https://www.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=f3b228bb7c8162235baf5b953171ee4a&extras=tags%2Curl_sq&per_page=150&format=json&nojsoncallback=1"
		)
			.then(function (response) {
				return response.json();
			})
			.then(
				function (j) {
					// alert(JSON.stringify(j));
					let picArray = j.photos.photo.map((pic) => {
						var srcPath =
							"https://farm" +
							pic.farm +
							".staticflickr.com/" +
							pic.server +
							"/" +
							pic.id +
							"_" +
							pic.secret +
							".jpg";
						return (
							<img
								alt="dogs"
								src={srcPath}
								height="250"
								width="250"
								float="left"
								margin-left="10"
							></img>
						);
					});
					this.setState({ pictures: picArray });
				}.bind(this)
			);
	}

	render() {
		return (
			<div className="App">
				<h1 align="center">Welcome ! Start Your Scroll is Loading.....</h1>
				<h2 align="center">Hope You Like it</h2>
				<p className="App-intro">{this.state.pictures}</p>
			</div>
		);
	}
}

export default App;
