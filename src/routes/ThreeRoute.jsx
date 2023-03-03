import styles from "./ThreeRoute.module.scss";
import WebGLSketch from "../components/three/WebGLsketch";

export default function ThreeRoute() {
  return (
  <div className={styles.container}>
    <WebGLSketch />
  </div>);
}
