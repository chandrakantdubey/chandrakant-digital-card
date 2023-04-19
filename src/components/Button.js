import email from "../imgs/email-icon.png";
import linkedin from "../imgs/linkedin-icon.png";
export default function Button(props) {
  return (
    <div className="body--button">
      <a className="email" href="gmail.con">
        <img src={email} alt="email logo" />
        <p>Email</p>
      </a>
      <a className="linkedin" href="linkedin.com">
        <img src={linkedin} alt="linkein logo" />
        <p>Linkedin</p>
      </a>
    </div>
  );
}
