import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import logo from "./asset/logo__home.jpg";

function App() {
	return (
		<div className="App">
			<div className="app__body">
			<span className="app__heading"> FISH FRY</span>
			<div ><img src={logo} alt="app__logo" className="app__logo"></img> </div>
			<div className="app__button">
			<Button variant="contained" color="primary" href="# ">Timer</Button>
			<Button variant="contained" color="primary" href="# ">Score Card</Button>
			</div>
			</div>
		</div>
	);
}

export default App;
