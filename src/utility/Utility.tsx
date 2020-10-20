import React from "react";
import Intro from "../intro/Intro";
import Section from "../sections/Section";
import Wave from "../wave/Wave";
import utilImage from "./cog.png";

export default class Utility extends React.PureComponent {
  render() {
    return (
      <div className="Utility">
        <Intro
          feature={"Utility"}
          description={
            "Make your server great for everyone with these extra commands."
          }
          img={utilImage}
          spin
          close
        />
        <Wave />
        <Section
          img={""}
          title={"Prefix haters"}
          text={
            "Man, why don't you like my prefix? I made it especially for programmers. Ah well, you can change it if you want. Or check the prefix if someone forgot."
          }
        />
        <Section
          flipped
          img={""}
          title={"Urban dictionary"}
          text={
            "No utility bot would be complete without this. Urban dictionary contains the most up-to-date definitions for words and phrases :')"
          }
        />
        <Section
          img={""}
          title={"Normie dictionary"}
          text={
            "What a nerd. You can look up the formal definition for a word with this command. I doubt you'd make sense of it though."
          }
        />
        <Section
          flipped
          img={""}
          title={"Currency"}
          text={
            "I'm rich. Mostly because I test the bot a lot. Featuring an incomplete currency system, including a shop and leaderboard. See more commands in the docs."
          }
        />
        <Section
          img={""}
          title={"Modlog"}
          text={
            "Take a trip down memory lane and look at all the people you've hurt. Keeps track of bans, kicks, tempbans, cleanses, and tempbans."
          }
        />
        <Wave flipped />
      </div>
    );
  }
}
