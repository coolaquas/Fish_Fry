import React from 'react'
import "./Timer.css";
import {useHistory} from "react-router-dom";
import shockFish from "../../asset/shock_fish.jpg";
import Pan from "../../asset/pan.png";
import Button from '@material-ui/core/Button';
import Back from "../../asset/back.png";
function Timer() {
    const history = useHistory();
	const handleBack =()=>{
		history.push(`/`);
	}


	return (
		<div className="min-vh-100 d-flex flex-column align-items-center justify-content-around">
		<div className="timer__logo__shockFish__section"><img src={shockFish} alt="timer__logo" className="h-100 w-100"></img> </div>
		<div className="timer__logo__pan__section"><img src={Pan} alt="pan__logo" className="h-100 w-100"></img> </div>
		<div className="mt-n5 display-4">01:00</div>
		<div className=" w-100 mt-n5 pl-4 pr-4 d-flex justify-content-between ">
			<Button variant="contained" style={{ borderRadius: '50%', height: '6rem', background: "#858585", border:"1px solid black" }}>Cancle</Button>
			<Button variant="contained" style={{ borderRadius: '50%', height: '6rem', width: '90px', background: "#a6f51c", border:"1px solid black" }}>Start</Button>
		</div>
		<div className="w-75 d-flex flex-column">
			<div className="w-100 mb-3 px-3 py-2 h-auto d-inline-block d-flex flex-row justify-content-between bg-primary text-white"> 
				<span>Sound On/Off</span> 
				<div className="switch">
					<input id="switch-1" type="checkbox" className="switch-input" />
					<label for="switch-1" className="switch-label">Switch</label>
				</div>
			</div>
			<div className="w-100 px-3 py-2 h-auto d-inline-block d-flex flex-row justify-content-between bg-primary text-white"> 
				<span>Vibration On/Off</span> 
				<div className="switch">
					<input id="switch-2" type="checkbox" className="switch-input" />
					<label for="switch-2" className="switch-label">Switch</label>
				</div>
			</div>
		</div>
		<div className="mt-n3 " style={{cursor: 'pointer'}} onClick={handleBack}><img src={Back} alt="back_button" /></div>
		</div>
	)
}

export default Timer
