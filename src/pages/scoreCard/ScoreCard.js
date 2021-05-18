import React, { useState } from "react";
import "./scoreCard.css";
import Back from "../../asset/back.png";
import { useHistory } from "react-router-dom";

function ScoreCard() {
  const history = useHistory();
  const [team1Name, setTeam1Name] = useState("Team 1");
  const [team2Name, setTeam2Name] = useState("Team 2");
  const [score, setScore] = useState({
    r1: {
      t1: "",
      t2: "",
    },
    r2: {
      t1: "",
      t2: "",
    },
    r3: {
      t1: "",
      t2: "",
    },
  });
  const [finalScore, setFinalScore] = useState({
    t1: "",
    t2: "",
  });
  const handleBack = () => {
    history.push(`/`);
  };
  const handleScoreChange = (e) => {
    let name = e?.target?.name?.split("-");
    let data = e?.target?.value;
    let tempScore = { ...score };
    tempScore[name[0]][name[1]] = data.replace(/[^0-9]/g, "");
    setScore(tempScore);
    finalScoreCalc(name[1]);
  };
  const finalScoreCalc = (team) => {
    let tempFinal = { ...finalScore };
    tempFinal[team] = 0;
    ["r1", "r2", "r3"]?.forEach((data) => {
      if (score[data][team] !== "") {
        tempFinal[team] = tempFinal[team] + parseInt(score[data][team]);
      }
    });
    if (tempFinal[team] === 0) {
      tempFinal[team] = "";
    }
    setFinalScore(tempFinal);
  };

  return (
    <div className="scoreCard min-vh-100 d-flex flex-column align-items-center justify-content-around">
      <span className="gmheading"> FISH FRY</span>
      <div className="mt-n5 w-100 d-flex text-center ">
        <div className="w-25 d-flex flex-column border">
          <span className="bg-primary h-50 font-weight-bold">Round</span>
          <span className="bg-info border">1</span>
          <span className="bg-info border">2</span>
          <span className="bg-info border">3</span>
          <span className="bg-info border">Total</span>
        </div>
        <div className="w-75 d-flex scoreboard">
          <div className="w-50 d-flex flex-column border">
            <input
              type="text"
              className="h-50 bg-primary text-center border-0"
              value={team1Name}
              onChange={(e) => setTeam1Name(e.target.value)}
            />
            <input
              inputMode="numeric"
              placeholder="   +"
              type="text"
              pattern="[0-9]*"
              name="r1-t1"
              className="h-50 text-center border scoreInput"
              value={score?.r1?.t1}
              onChange={(e) => handleScoreChange(e)}
            />
            <input
              inputMode="numeric"
              type="text"
              placeholder="   +"
              pattern="[0-9]*"
              name="r2-t1"
              className="h-50 text-center border"
              value={score?.r2?.t1}
              onChange={(e) => handleScoreChange(e)}
            />
            <input
              inputMode="numeric"
              type="text"
              pattern="[0-9]*"
              name="r3-t1"
              placeholder="   +"
              className="h-50 text-center border"
              value={score?.r3?.t1}
              onChange={(e) => handleScoreChange(e)}
            />
            <span className={`border ${finalScore?.t1 === "" && "p-res"}`}>
              {finalScore?.t1}
            </span>
          </div>
          <div className="w-50 d-flex flex-column border">
            <input
              type="text"
              className="h-50 bg-primary text-center border-0"
              value={team2Name}
              onChange={(e) => setTeam2Name(e.target.value)}
            />
            <input
              inputMode="numeric"
              type="text"
              placeholder="   +"
              pattern="[0-9]*"
              name="r1-t2"
              className="h-50 text-center border"
              value={score?.r1?.t2}
              onChange={(e) => handleScoreChange(e)}
            />
            <input
              inputMode="numeric"
              type="text"
              placeholder="   +"
              pattern="[0-9]*"
              name="r2-t2"
              className="h-50 text-center border"
              value={score?.r2?.t2}
              onChange={(e) => handleScoreChange(e)}
            />
            <input
              inputMode="numeric"
              type="text"
              placeholder="   +"
              pattern="[0-9]*"
              name="r3-t2"
              className="h-50 text-center border"
              value={score?.r3?.t2}
              onChange={(e) => handleScoreChange(e)}
            />
            <span className={`border ${finalScore?.t2 === "" && "p-res"}`}>
              {finalScore?.t2}
            </span>
          </div>
        </div>
      </div>
      <div className=" " style={{ cursor: "pointer" }} onClick={handleBack}>
        <img src={Back} alt="back_button" />
      </div>
    </div>
  );
}

export default ScoreCard;
