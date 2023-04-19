import img from "../imgs/chandrakant.png";

export default function Header(props) {
  return (
    <header>
      <img src={img} alt="A digital card." className="header-img" />
    </header>
  );
}
