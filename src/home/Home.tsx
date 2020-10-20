import React from "react";
import Landing from "../landing/Landing";
import Section from "../sections/Section";
import Wave from "../wave/Wave";

//TODO ADD ABOUT UNDER THE SECTIONS

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="Home">
        <Landing />
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
        <Section
          flipped
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
