export default function Description(props){
    return(
        <div className="body--description">
            <h2 className="description--title">{props.title}</h2>
            <p className="description--text">{props.text}</p>
        </div>
    )
}