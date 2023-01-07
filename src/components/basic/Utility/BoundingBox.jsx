import { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";
import { Settings } from "./Settings";
import { nanoid } from "nanoid";
import styles from "./BoundingBox.module.scss";

export function BoundingBox({ children, state, settings }) {

    

  const [box, setBox] = useState({
    id: null,
  });

  useEffect(() => {
    setBox({ ...box, id: nanoid()});
  }, []);

  return (
    <>
      <Draggable cancel=".cancelDrag">
        <div
          id={box.id}
          className={styles.container}
          style={{width: `${state.width}rem`, gridGap: `${state.gridGap}rem`}}
        >
          {children}
          <Settings>{settings}</Settings>
        </div>
      </Draggable>
    </>
  );
}
