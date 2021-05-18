import React,{useState} from 'react'
import "./Timer.css";
import {useHistory} from "react-router-dom";
import shockFish from "../../asset/shock_fish.jpg";
import Pan from "../../asset/pan.png";
import Button from '@material-ui/core/Button';
import Back from "../../asset/back.png";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
function Timer() {
	const [isStarted, setIsStarted] = useState(false);
	const [isPaused, setIsPaused] = useState(false);
	const [timerEnd, setTimerEnd] = useState(false);
	const [time, setTime] = useState(0);
    const history = useHistory();
	const handleBack =()=>{
		history.push(`/`);
	}
	const handleStart =()=>{
		setTime(60);
		setIsPaused(false);
		setIsStarted(true);
		setTimerEnd(false);
	}

	const handleCancle =()=>{
		setIsStarted(false);
		setIsPaused(false);
		setTime(0)
	}
	const handlePause = () =>{
		setIsPaused(!isPaused);
	}
	const renderTime = ({ remainingTime }) => {
		return (
		  <div className="timer text-center">
			<div className="text">Remaining</div>
			<div className="value fs-14">00 : {remainingTime < 10 ? `0${remainingTime}` : remainingTime}</div>
		  </div>
		);
	  };
	  const handleTimerComplete =()=>{
		  setIsPaused(false);
		  setTimerEnd(true)
		  setTime(0);
	  }
	return (
		<div className="min-vh-100 d-flex flex-column align-items-center justify-content-around">
			{
				!isStarted ? (
					<>
					<div className="timer__logo__shockFish__section pt-sm-3"><img src={shockFish} alt="timer__logo" className="h-100 w-100"></img> </div>
					<div className="timer__logo__pan__section mt-n4 mt-sm-n2"><img src={Pan} alt="pan__logo" className="h-100 w-100"></img> </div>
					<div className="mt-n5  mt-sm-n4 fs-9 display-4 ">01:00</div>
					</>
				) : 
				(
					!timerEnd ?
					<div className="cirTimer my-5"> 
					<CountdownCircleTimer
					isPlaying={!timerEnd && !isPaused}
					duration={time}
					colors={[["#004777"],["#A30000",0.20]]}
					// onComplete={() => [true, 10000]}
					onComplete={handleTimerComplete}
					>
					{renderTime}
					</CountdownCircleTimer>
					</div>
					:
					<div className="gmheading my-5 my-sm-3">Times Up</div>
				)
			}
		<div className=" w-100 mt-n3 pl-4 pr-4 d-flex justify-content-between ">
			<Button variant="contained" style={{ borderRadius: '50%', height: '6rem', background: "#858585", border:"1px solid black" }} onClick={handleCancle}>Cancle</Button>
			{time !== 0 ? 
				<Button variant="contained" style={{ borderRadius: '50%', height: '6rem', width: '90px', background: "#faaf8a", border:"1px solid black" }} onClick={handlePause}>Pause</Button>
				:
				<Button variant="contained" style={{ borderRadius: '50%', height: '6rem', width: '90px', background: "#a6f51c", border:"1px solid black" }} onClick={handleStart}>Start</Button>
			}
			</div>
		<div className="w-75 w-sm-50 d-flex my-sm-5 flex-column">
			<div className="w-100 mb-3 px-3 py-2 h-auto d-inline-block d-flex flex-row justify-content-between bg-primary text-white"> 
				<span>Sound On/Off</span> 
				<div className="switch">
					<input id="switch-1" type="checkbox" className="switch-input" />
					<label htmlFor="switch-1" className="switch-label">Switch</label>
				</div>
			</div>
			<div className="w-100 px-3 py-2 h-auto d-inline-block d-flex flex-row justify-content-between bg-primary text-white"> 
				<span>Vibration On/Off</span> 
				<div className="switch">
					<input id="switch-2" type="checkbox" className="switch-input" />
					<label htmlFor="switch-2" className="switch-label">Switch</label>
				</div>
			</div>
		</div>
		<div className="mt-n3 " style={{cursor: 'pointer'}} onClick={handleBack}><img src={Back} alt="back_button" /></div>
		</div>
	)
}

export default Timer
