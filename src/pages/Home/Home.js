import React from 'react'
import "./Home.css"
import Button from '@material-ui/core/Button';
import logo from "../../asset/logo__home.jpg";
import {useHistory} from "react-router-dom";
function Home() {
    const history = useHistory();
    const handleClick = (path_slug)=>{
        history.push(`/${path_slug}`)
	}
    return (
        <div className="home">
            <div className="home__body">
			<span className="home__heading"> FISH FRY</span>
			<div className="home__logo__section"><img src={logo} alt="home__logo" className="home__logo"></img> </div>
			<div className="home__button">
			<Button variant="contained" color="primary"className="mb-3" onClick={()=>handleClick("timer")}>Timer</Button>
			<Button variant="contained" color="primary" onClick={()=>handleClick("scoreCard")}>Score Card</Button>
			</div>
			</div>
        </div>
    )
}

export default Home
