import React from "react";
import Landing from "../landing/Landing";
import Section from "../sections/Section";
import Wave from "../wave/Wave";

export default class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <Landing />
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
