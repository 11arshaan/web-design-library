import styles from "./SVGRoute.module.css";
import { SpinningLoadingIcon1, SpinningLoadingIcon2 } from "../components/svg/svg-loading-icons/LoadingIconSVG";

export function SVGRoute(props) {
  return (
    <div className={styles.container}>
      Here are my SVG designs
    
      <SpinningLoadingIcon1 color="tomato" />
      <SpinningLoadingIcon2 color="tomato" />

      
    </div>
  );
}
