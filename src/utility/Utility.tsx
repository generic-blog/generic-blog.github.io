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
        />
        <Wave />
        <Section
          img={""}
          text={
            "asdsdasdndsansafhfshosafhsfhhfohafohfiohfiohfiohwfqiohwfqihfqwihwfqipqwfhpiqwfpasofoasasfisajgngosndahitwhdilhwelolsdosdiosdfilafilabilabileahbiulbbfwbwrbiawbwadjdagnonadfknsdkfosdfbjdsbjsfbjlfsnjkdfnjodfbibegibibjbfjdbjo;gawbieboeb;gedndneklbjgewbgewo;wbwabbwkb;obelbjdfbjsdzfnjdsno;szdfnffnokfnoafnoa"
          }
        />
        <Section
          flipped
          img={""}
          text={
            "asdsdasdndsansafhfshosafhsfhhfohafohfiohfiohfiohwfqiohwfqihfqwihwfqipqwfhpiqwfpasofoasasfisajgngosndahitwhdilhwelolsdosdiosdfilafilabilabileahbiulbbfwbwrbiawbwadjdagnonadfknsdkfosdfbjdsbjsfbjlfsnjkdfnjodfbibegibibjbfjdbjo;gawbieboeb;gedndneklbjgewbgewo;wbwabbwkb;obelbjdfbjsdzfnjdsno;szdfnffnokfnoafnoa"
          }
        />
        <Section
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
