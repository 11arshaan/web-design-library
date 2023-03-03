import "./ComponentCard.scss";

export default function ComponentCard({component, preview, title="woo", description}){

    return(<div className="component-card">
        {preview ? <img src={preview} alt={title} /> : <div className="component-card__imageframe"></div>}
        <h2>{title}</h2>
    </div>)

}