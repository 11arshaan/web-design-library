import styles from "./D3Route.module.css";
import Tutorial from "../components/d3/tutorial";

export function D3Route(props) {
  return (
    <div className={styles.main}>
      Here are my D3 components
      <div className={styles.container}><Tutorial /></div>

    
      
    </div>
  );
}
