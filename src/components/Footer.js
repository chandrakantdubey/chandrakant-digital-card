import facebook from "../imgs/facebook-icon.png";
import twitter from "../imgs/twitter-icon.png";
import instagram from "../imgs/instagram-icon.png";
import github from "../imgs/github-icon.png";

export default function Footer() {
  return (
    <div className="footer--container">
      <img src={twitter} />
      <img src={facebook} />
      <img src={instagram} />
      <img src={github} />
    </div>
  );
}
