export default function Intro(props) {
  return (
    <div className="intro">
      <h1>{props.name}</h1>
      <h3>{props.profession}</h3>
      <p>
        <a href={props.website}>{props.website}</a>
      </p>
    </div>
  );
}
