import React from "react";
import Footer from "../footer/Footer";
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
          flipped={false}
          img={{ src: "", alt: "" }}
          text={
            "asdsdasdndsansafhfshosafhsfhhfohafohfiohfiohfiohwfqiohwfqihfqwihwfqipqwfhpiqwfpasofoasasfisajgngosndahitwhdilhwelolsdosdiosdfilafilabilabileahbiulbbfwbwrbiawbwadjdagnonadfknsdkfosdfbjdsbjsfbjlfsnjkdfnjodfbibegibibjbfjdbjo;gawbieboeb;gedndneklbjgewbgewo;wbwabbwkb;obelbjdfbjsdzfnjdsno;szdfnffnokfnoafnoa"
          }
        />
        <Section
          flipped={true}
          img={{ src: "", alt: "" }}
          text={
            "asdsdasdndsansafhfshosafhsfhhfohafohfiohfiohfiohwfqiohwfqihfqwihwfqipqwfhpiqwfpasofoasasfisajgngosndahitwhdilhwelolsdosdiosdfilafilabilabileahbiulbbfwbwrbiawbwadjdagnonadfknsdkfosdfbjdsbjsfbjlfsnjkdfnjodfbibegibibjbfjdbjo;gawbieboeb;gedndneklbjgewbgewo;wbwabbwkb;obelbjdfbjsdzfnjdsno;szdfnffnokfnoafnoa"
          }
        />
        <Section
          flipped={false}
          img={{ src: "", alt: "" }}
          text={
            "asdsdasdndsansafhfshosafhsfhhfohafohfiohfiohfiohwfqiohwfqihfqwihwfqipqwfhpiqwfpasofoasasfisajgngosndahitwhdilhwelolsdosdiosdfilafilabilabileahbiulbbfwbwrbiawbwadjdagnonadfknsdkfosdfbjdsbjsfbjlfsnjkdfnjodfbibegibibjbfjdbjo;gawbieboeb;gedndneklbjgewbgewo;wbwabbwkb;obelbjdfbjsdzfnjdsno;szdfnffnokfnoafnoa"
          }
        />
        <Wave flipped={true} />
        <Footer />
      </div>
    );
  }
}
