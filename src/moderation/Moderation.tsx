import React from "react";
import Intro from "../intro/Intro";
import Section from "../sections/Section";
import Wave from "../wave/Wave";
import ban from "./ban.png";
import moderationImage from "./moderation.png";

export default class Moderation extends React.PureComponent {
  render() {
    return (
      <div className="Moderation">
        <Intro
          feature={"Moderation"}
          description={
            "Keep your server safe and clean easily with little friction."
          }
          img={moderationImage}
        />
        <Wave />
        <Section
          justify
          flipped
          img={ban}
          title={"Banning users"}
          text={
            "I know you like to hammer some fools but using a bot? Yeah, it's the best. Ban users by their id to really shove it in their face. Then specify the reason why to shove it in their face even more. I love banning people. I need help."
          }
        />
        <Section
          justify
          img={""}
          title={"Giving users the boot"}
          text={
            "Aw man, you're a softy. Whatever, you can kick users by id as well. To me a kick is like a ban but you can keep kicking the users until they never join again for ultimate effectiveness."
          }
        />
        <Section
          justify
          flipped
          img={""}
          title={"Tempban"}
          text={
            "Well if you want, you can ban users (by id of course) for a few days, then ban them again. That's a lot of fun. I'd say this is a stronger kick and you kick 'em so hard they run away for a while."
          }
        />
        <Section
          justify
          img={""}
          title={"Housekeeping channels"}
          text={
            "Nobody wants to see dumb and useless conversations. Clean that sh*t up and act like nothing happened. There's no limit on the amount of messages to delete..."
          }
        />
        <Section
          justify
          flipped
          img={""}
          title={"Shut up users"}
          text={
            "Oh that one person that doesn't stop chatting? Mute them. It's as easy as that. And yes, you can mute by id."
          }
        />
        <Wave flipped />
      </div>
    );
  }
}
