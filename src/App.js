import React from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import Timer from "./pages/Timer/Timer";
import Home from "./pages/Home/Home";
import ScoreCard from "./pages/scoreCard/ScoreCard";

function App() {
	
	return (
		<div className="App">
			<Router>
			
			<Switch>
			<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/timer">
					<Timer />
				</Route>
				<Route exact path="/scoreCard">
					<ScoreCard />
				</Route>
			</Switch>
			</Router>
		</div>
	);
}

export default App;
