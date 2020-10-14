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
