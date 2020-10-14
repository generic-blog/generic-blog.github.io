import React from "react";
import Intro from "../intro/Intro";
import Section from "../sections/Section";
import Table from "../table/Table";
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
          close
        />
        <Wave />
        <Section
          flipped
          img={""}
          title={"adadsdsadadsaadsa"}
          text={
            "asdsdasdndsansafhfshosafhsfhhfohafohfiohfiohfiohwfqiohwfqihfqwihwfqipqwfhpiqwfpasofoasasfisajgngosndahitwhdilhwelolsdosdiosdfilafilabilabileahbiulbbfwbwrbiawbwadjdagnonadfknsdkfosdfbjdsbjsfbjlfsnjkdfnjodfbibegibibjbfjdbjo;"
          }
        />
        <Table
          title={"iasdujbasno"}
          rows={[
            {
              command: "kdsnf",
              description: "ifdaninfifnffaeafoafasknafsonoasfnaf",
            },
            {
              command: "kdsnf",
              description: "ifdaninfifnffaeafoafasknafsonoasfnaf",
            },
            {
              command: "kdsnf",
              description: "ifdaninfifnffaeafoafasknafsonoasfnaf",
            },
            {
              command: "kdsnf",
              description: "ifdaninfifnffaeafoafasknafsonoasfnaf",
            },
          ]}
        />
        <Table
          title={"iasdujbasno"}
          rows={[
            {
              command: "kdsnf",
              description: "ifdaninfifnffaeafoafasknafsonoasfnaf",
            },
            {
              command: "kdsnf",
              description: "ifdaninfifnffaeafoafasknafsonoasfnaf",
            },
            {
              command: "kdsnf",
              description: "ifdaninfifnffaeafoafasknafsonoasfnaf",
            },
            {
              command: "kdsnf",
              description: "ifdaninfifnffaeafoafasknafsonoasfnaf",
            },
          ]}
        />
        <Table
          title={"iasdujbasno"}
          rows={[
            {
              command: "kdsnf",
              description: "ifdaninfifnffaeafoafasknafsonoasfnaf",
            },
            {
              command: "kdsnf",
              description: "ifdaninfifnffaeafoafasknafsonoasfnaf",
            },
            {
              command: "kdsnf",
              description: "ifdaninfifnffaeafoafasknafsonoasfnaf",
            },
            {
              command: "kdsnf",
              description: "ifdaninfifnffaeafoafasknafsonoasfnaf",
            },
          ]}
        />
        <Wave flipped />
      </div>
    );
  }
}
