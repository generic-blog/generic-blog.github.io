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
          title={"adadsdsadadsaadsa"}
          text={
            "asdsdasdndsansafhfshosafhsfhhfohafohfiohfiohfiohwfqiohwfqihfqwihwfqipqwfhpiqwfpasofoasasfisajgngosndahitwhdilhwelolsdosdiosdfilafilabilabileahbiulbbfwbwrbiawbwadjdagnonadfknsdkfosdfbjdsbjsfbjlfsnjkdfnjodfbibegibibjbfjdbjo;"
          }
        />
        <Section
          flipped
          img={""}
          title={"adadsdsadadsaadsa"}
          text={
            "asdsdasdndsansafhfshosafhsfhhfohafohfiohfiohfiohwfqiohwfqihfqwihwfqipqwfhpiqwfpasofoasasfisajgngosndahitwhdilhwelolsdosdiosdfilafilabilabileahbiulbbfwbwrbiawbwadjdagnonadfknsdkfosdfbjdsbjsfbjlfsnjkdfnjodfbibegibibjbfjdbjo;"
          }
        />
        <Section
          img={""}
          title={"adadsdsadadsaadsa"}
          text={
            "asdsdasdndsansafhfshosafhsfhhfohafohfiohfiohfiohwfqiohwfqihfqwihwfqipqwfhpiqwfpasofoasasfisajgngosndahitwhdilhwelolsdosdiosdfilafilabilabileahbiulbbfwbwrbiawbwadjdagnonadfknsdkfosdfbjdsbjsfbjlfsnjkdfnjodfbibegibibjbfjdbjo;"
          }
        />
        <Wave flipped />
      </div>
    );
  }
}
