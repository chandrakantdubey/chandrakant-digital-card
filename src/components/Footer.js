import facebook from "../imgs/facebook-icon.png";
import twitter from "../imgs/twitter-icon.png";
import instagram from "../imgs/instagram-icon.png";
import github from "../imgs/github-icon.png";

export default function Footer() {
  return (
    <div className="footer--container">
      <img src={twitter} alt="twitter" />
      <img src={facebook} alt="facebook" />
      <img src={instagram} alt="instagram" />
      <img src={github} alt="github" />
    </div>
  );
}
