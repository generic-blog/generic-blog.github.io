import React from "react";
import Landing from "../landing/Landing";
import Section from "../sections/Section";
import Wave from "../wave/Wave";
import "./home.css";
export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="Home">
        <Landing />
        <Section
          flipped
          img={""}
          title={"Easy management"}
          text={
            "Configure The Archive to fit your needs, whatever they are... Organize your server and control your subjects! Easy setup with a prefix that can be changed at any time. This bot features lots of crap code but it can sure still run :')"
          }
        />
        <Section
          img={""}
          title={"Amusing commands"}
          text={
            "Discord is coolio, but playing minigames? Sweet! Challenge your friends with many playable games! The Archive boasts many mini-games to pass the time with no cool down. Games include a western standoff, or duel, or 'It's hiiiiiiiiiiiigggggghhhhh noooon'."
          }
        />
        <Section
          flipped
          img={""}
          title={"Miscallaneous"}
          text={
            "A utility bot wouldn't be complete without, well, utility. The Archive includes productive commands such as the dictionary or thesaurus, but it also includes an urban dictionary from which you can search anything. Anything..."
          }
        />
        <a
          href="https://github.com/im-lonely/the-archive-site"
          target="_blank"
          rel="noreferrer noopener"
          className="github"
        >
          Something wrong? Open an issue or a pull request!
        </a>
        <Wave flipped />
      </div>
    );
  }
}
