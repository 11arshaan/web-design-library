import { useState, useRef, useEffect } from "react";
import { ReactComponent as GearIcon } from "../Assets/Icons/basic_gear.svg";
import styles from "./Settings.module.scss";

export function Settings({ children }) {
  
  return (
    <div className={`${styles.settings} cancelDrag`}>
        <GearIcon className={styles.settingsicon} />
        <div className={styles.settingscontrol}>
            {children}
        </div>
    </div>
  );
}
