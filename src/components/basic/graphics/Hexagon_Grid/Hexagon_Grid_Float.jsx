import styles from "./Hexagon_Grid_Float.module.css";
import styled from "styled-components";

{/* <Hexagon_Grid_Float size={25} margin={2} count={256} color1={"#00ffa6"} /> */}



const Hexagon_Grid = styled.div`
  font-size: 0;
  width: 100%;
  &::before {
    content: "";
    width: calc(${(props) => props.size}px / 2 + ${(props) => props.margin}px);
    float: left;
    height: 120%;
    shape-outside: repeating-linear-gradient(
      #0000 0 calc(${(props) => props.factor}px - 3px),
      #000 0 ${(props) => props.factor}px
    );
  }

  div {
    width: ${(props) => props.size}px;
    margin: ${(props) => props.margin}px;
    height: calc(${(props) => props.size}px * 1.1547);
    display: inline-block;
    font-size: initial;
    clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
    margin-bottom: calc(
      ${(props) => props.margin}px - ${(props) => props.size}px * 0.2885
    );
    background: ${(props) => props.color1};
  }

  div:nth-child(odd) {
    background: ${(props) => props.color2};
  }
`;

export default function Hexagon_Grid_Float({
  count = 16,
  color1 = "red",
  color2 = "blue",
  size = 100,
  margin = 4,
}) {
  const factor = 1.732 * size + 4 * margin - 1;
  const factor_string = `${factor}px`;

  const hexagon_array = [];
  for (let i = 0; i < count; i++) {
    hexagon_array.push(<div key={i}></div>);
  }

  return (
    <div className={styles.main}>
      <Hexagon_Grid
        size={size}
        margin={margin}
        factor={factor}
        color1={color1}
        color2={color2}
      >
        {hexagon_array}
      </Hexagon_Grid>
    </div>
  );
}
