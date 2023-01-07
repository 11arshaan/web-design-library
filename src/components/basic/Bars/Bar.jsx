import styled, { keyframes, css } from "styled-components";

function currentCyclePosition(index, cycles) {
  return index % cycles; //0-index
}

function cycleProgress(index, cycles) {
  return currentCyclePosition(index, cycles) / cycles;
}

function setBarColor(index, cycles) {
  const hue = cycleProgress(index, cycles) * 360;
  return `hsl(${hue}, 100%, 50% )`;
}

//collapses cycle-cloned bars
function setBarPosition(index, originalBarCount, cycles) {
  const currentRow = index + 1 - currentCyclePosition(index, cycles);
  return (currentRow % originalBarCount) + 1;
}

const rotationOSC = (angle) => keyframes`
    50% { transform: rotate(-${angle}deg);}`;

const blurOSC = keyframes`
    from {filter: blur(0);}
    to {filter: blur(1px);}`;



export const Bar = styled.hr`
    border: none;
    width: ${(props) => props.barWidth}rem; 
    height: ${(props) => props.height}rem;
    transform: rotate(${(props) => props.angle}deg);


     {/* ===================
        handle bar colors
        =================== */}
    background: ${(props) => {
      if (props.cycles > 1) return setBarColor(props.index, props.cycles);
      return props.barColor;
    }};



    {/* ===================
        handle cloned bars
        =================== */}
    ${(props) =>
      props.cycles > 1 &&
      css`
        grid-area: ${(props) => {
            return setBarPosition(
              props.index,
              props.originalBarCount,
              props.cycles
            );
          }} / 1;
        mix-blend-mode: screen;
      `}
   


    {/* ===================
        handle animation
        =================== */}
    
    ${(props) =>
      props.animationDuration > 0 &&
      css`
        animation: ${(props) => rotationOSC(props.angle)}
            ${(props) => props.animationDuration}s
            cubic-bezier(
              0,
              0,
              ${(props) => {
                const k = cycleProgress(props.index, props.cycles);
                return (k + 1) * 0.5;
              }},
              1
            )
            infinite,
          ${blurOSC} ${(props) => 0.25 * props.animationDuration}s ease-out
            infinite;
      `}

        

    ${(props) => props.animationStyle === 1 && css`animation-delay: ${(props) =>
        ((props.cycles *
          setBarPosition(props.index, props.originalBarCount, props.cycles)) /
          props.totalBars -
          1) *
        (2 * props.animationDuration)}s;`
    
    }


    ${(props) => props.animationStyle === 2 && css`animation-delay: ${(props) =>
        ((
          setBarPosition(props.index, props.originalBarCount, props.cycles)) /
          props.totalBars -
          1) *
        (2 * props.animationDuration)}s;`
    
    }


    ${(props) => props.animationStyle === 3 && css`animation-delay: ${(props) =>
          setBarPosition(props.index, props.originalBarCount, props.cycles) /
          props.totalBars -
          1 *
        (2 * props.animationDuration)}s;`
    
    }
    ;


    
  

    
    `;
