import React from "react";
import Intro from "../intro/Intro";
import Section from "../sections/Section";
import Wave from "../wave/Wave";
import docsImage from "./docs.png";

export default class Docs extends React.PureComponent {
  render() {
    return (
      <div className="Docs">
        <Intro
          feature={"Documentation"}
          description={
            "A comphrensive documentation about everything related to the bot"
          }
          img={docsImage}
        />
        <Wave />
        <Section
          flipped
          img={""}
          text={
            "asdsdasdndsansafhfshosafhsfhhfohafohfiohfiohfiohwfqiohwfqihfqwihwfqipqwfhpiqwfpasofoasasfisajgngosndahitwhdilhwelolsdosdiosdfilafilabilabileahbiulbbfwbwrbiawbwadjdagnonadfknsdkfosdfbjdsbjsfbjlfsnjkdfnjodfbibegibibjbfjdbjo;gawbieboeb;gedndneklbjgewbgewo;wbwabbwkb;obelbjdfbjsdzfnjdsno;szdfnffnokfnoafnoa"
          }
        />
        <Wave flipped />
      </div>
    );
  }
}
