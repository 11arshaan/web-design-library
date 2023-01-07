import { useState, useReducer, useEffect } from "react";
import { barsReducer } from "./Bars.reducer.jsx";
import { BoundingBox } from "../Utility/BoundingBox";
import { Bar } from "./Bar";

export function Bars() {
  //length units are REM (10px)
  //Time unites are seconds

  const [settings, setSettings] = useState();

  const initialState = {
    barCount: 40,
    cycleCount: 5,
    angle: 5,
    animationDuration: 2,
    animationStyle: 3,
    width: 30,
    gridGap: 0.5,
    barWidth: 25,
    barHeight: .2,
    barColor: "white",
    stagger: 1,
  };

  const [state, dispatch] = useReducer(barsReducer, initialState);
  

  const {
    barCount,
    cycleCount,
    angle,
    animationDuration,
    animationStyle,
    barWidth,
    width,
    barHeight,
    barColor,
    stagger,
  } = state;

  function createBars() {
    const bars = barCount * cycleCount;
    const barsArray = [];
    for (var i = 0; i < bars; i++) {
      barsArray.push(
        <Bar
          key={i}
          index={i}
          originalBarCount={barCount}
          totalBars={bars}
          cycles={cycleCount}
          animationDuration={animationDuration}
          angle={angle}
          height={barHeight}
          barWidth={width*.95}
          barColor={barColor}
          stagger={stagger}
          animationStyle={animationStyle}
        />
      );
    }
    return barsArray;
  }

  useEffect(() => {
    setSettings( <>
    <input type="range" min="0" max="70" value={width} name="SET_WIDTH" onChange={handleChange} ></input>
    <input type="range" name="height"></input>
  </>);}, [] );
 

  function handleChange(e) {
    
    const type = e.target.name;
    const payload = e.target.value;
    console.log(e.target);
    e.target.style.opacity=0;
    dispatch({type: type, payload: payload});
    
    

  }



  return (
    <>
      <BoundingBox state={state} settings={settings}>
        {createBars()}
      </BoundingBox>
    </>
  );
}
