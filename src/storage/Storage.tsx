import React from "react";
import Intro from "../intro/Intro";
import Section from "../sections/Section";
import Wave from "../wave/Wave";
import databaseImage from "./database.png";

export default class Storage extends React.Component {
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
