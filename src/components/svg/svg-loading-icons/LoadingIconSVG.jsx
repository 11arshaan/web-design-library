import styled from "styled-components";
import { keyframes } from "styled-components";


function Circle({ color = "tomato", className = "", strokeWidth = 3 }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="<http://www.w3.org/2000/svg>"
    >
      <circle
        cx="50%"
        cy="50%"
        r="8"
        strokeWidth={strokeWidth}
        stroke={color}
        fill="none"
      />
    </svg>
  );
}

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }`;

const rotateDashOffset = keyframes`
  0% {
    stroke-dashoffset: 50;
    transform: rotate(0deg);
  }
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -50;
    transform: rotate(360deg);
  }`;

export const SpinningLoadingIcon1 = styled(Circle)`
  circle {
    stroke-dasharray: 185%;
    stroke-dashoffset: 0;
    animation: ${rotate} 5s linear infinite;
    transform-origin: center;
    & @media (prefers-reduced-motion: reduce) {
        animation: ${rotate} 10s linear infinite;
    }
  }
`;

export const SpinningLoadingIcon2 = styled(Circle)`
  circle {
    stroke-dasharray: 50;
    stroke-dashoffset: 0;
    animation: ${rotateDashOffset} 5s linear infinite;
    transform-origin: center;
    & @media (prefers-reduced-motion: reduce) {
        animation: ${rotateDashOffset} 10s linear infinite;
    }
  }
`;
