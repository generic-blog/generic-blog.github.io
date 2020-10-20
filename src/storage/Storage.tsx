import React from "react";
import Intro from "../intro/Intro";
import Section from "../sections/Section";
import Wave from "../wave/Wave";
import databaseImage from "./database.png";

export default class Storage extends React.PureComponent {
  render() {
    return (
      <div className="Storage">
        <Intro
          feature={"Storage"}
          description={
            "Store information and retrieve it easily, at any where, any time."
          }
          img={databaseImage}
        />
        <Wave />
        <Section
          img={""}
          title={"Storing tags"}
          text={
            "I don't know what to say for this one. You can do anything with this. Usually I use it to store emojis and retrieve them for a feeble imitation of Discord Nitro..."
          }
        />
        <Section
          flipped
          img={""}
          title={"Getting data"}
          text={
            "Here's where I use it to get emojis! Nothing to explain here, sooooo... um... this is awkward..."
          }
        />
        <Section
          img={""}
          title={"Deleting info"}
          text={
            "We all get embarassed, so let's delete our tags! Deleting them is like banning a tag from existence and you can't unban them. I love banning things."
          }
        />
        <Section
          flipped
          img={""}
          title={"Editing stuff"}
          text={
            "Don't delete a tag and then remake it to fix a dumb typo! Use the edit command to edit YOUR tag, not someone else's. Don't you dare try."
          }
        />
        <Section
          img={""}
          title={"Displaying stats"}
          text={
            "Nice tag! Let's see who owns it and how popular (or unpopular for that matter) it is! Displays owner and usage count."
          }
        />
        <Wave flipped />
      </div>
    );
  }
}
