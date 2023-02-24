import styles from "./ComponentCard.module.scss";

export default function ComponentCard({component, preview, title="woo", description}){

    return(<div className="component-card">
        {preview ? <img src={preview} alt={title} /> : <div className={styles.imageframe}></div>}
        <h2>{title}</h2>
    </div>)

}