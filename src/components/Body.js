import Button from "./Button";
import Description from "./Description";
import Intro from "./Intro";

export default function Body() {
  return (
    <div className="body">
      <Intro
        name="Chandrakant Dubey"
        profession="Frontend Developer"
        website="github.com/chandrakantdubey"
      />
      <Button href="#" />
      <Description
        title="About"
        text="I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn."
      />
      <Description
        title="Interests"
        text="Hiker. Solor Road Trips. Long Cycling Trips. Footballer. Messi fan. Hip-Hop music. No social media. In-person meet-ups"
      />
    </div>
  );
}
