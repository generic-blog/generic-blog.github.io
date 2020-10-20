import React from "react";
import Intro from "../intro/Intro";
import Section from "../sections/Section";
import Table from "../table/Table";
import Wave from "../wave/Wave";
import docsImage from "./docs.png";
import helpImage from "./help.png";

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
          img={helpImage}
          title={"Get started with the docs!"}
          text={[
            "Hey there! To get started using our docs you'll need to know what is what!",
            "All commands follow this simple pattern: name, usage, and description.",
            "<> means the argument is required while",
            "[] means that the argument is optional.",
          ]}
        />
        <Table
          title={"Storage"}
          rows={[
            {
              command: "new",
              usage: "<tag-name> <tag-content>",
              description:
                "Create a new tag with name of 'tag-name' and content of 'tag-content'",
            },
            {
              command: "get",
              usage: "<tag-name>",
              description: "Retrieve the content of a tag named 'tag-name'",
            },
            {
              command: "edit",
              usage: "<tag-name> <new-tag-content>",
              description:
                "Edit the tag 'tag-name' with the new content 'new-tag-content'",
            },
            {
              command: "delete",
              usage: "<tag-name>",
              description: "Delete the tag with name 'tag-name'",
            },
            {
              command: "info",
              usage: "<tag-name>",
              description: "Get info on the tag called 'tag-name'",
            },
            {
              command: "list",
              usage: "",
              description: "List all tags",
            },
            {
              command: "claim",
              usage: "<tag-name>",
              description: "Claim ownership of a tag (bot moderators only)",
            },
          ]}
        />
        <Table
          title={"Search"}
          rows={[
            {
              command: "google",
              usage: "<query>",
              description:
                "Search something on google if you're too lazy to go there.",
            },
            {
              command: "youtube",
              usage: "<query>",
              description:
                "Search something on youtube if you're too lazy to go there",
            },
            {
              command: "urban",
              usage: "<term>",
              description:
                "Search something on urban dictionary if you're too lazy to go there",
            },
            {
              command: "dictionary",
              usage: "<term>",
              description: "Search something on the real dictionary",
            },
            {
              command: "thesaurus",
              usage: "<term>",
              description: "Search something on the thesaurus",
            },
          ]}
        />
        <Table
          title={"Currency"}
          rows={[
            {
              command: "balance",
              usage: "[user]",
              description: "See your balance or the user you mentioned",
            },
            {
              command: "buy",
              usage: "<item>",
              description: "Buy an item from the shop",
            },
            {
              command: "shop",
              usage: "",
              description: "See every item in the shop",
            },
            {
              command: "transfer",
              usage: "<user> <amount>",
              description: "Give the mentioned user 'amount' coins",
            },
            {
              command: "inventory",
              usage: "[user]",
              description: "See your inventory or the user you mentioned",
            },
            {
              command: "leaderboard",
              usage: "",
              description: "Display the leaderboard",
            },
          ]}
        />
        <Table
          title={"Moderation"}
          rows={[
            {
              command: "ban",
              usage: "<user> [reason]",
              description:
                "Ban the user for reason 'reason'. The default reason is 'none'",
            },
            {
              command: "kick",
              usage: "<user> [reason]",
              description:
                "Kick the user for reason 'reason'. The default reason is 'none'",
            },
            {
              command: "tempban",
              usage: "<user> <days> [reason]",
              description:
                "Ban the user for 'days' days for reason 'reason'. The default reason is 'none'",
            },
            {
              command: "unban",
              usage: "<user> [reason]",
              description:
                "Unban the user for reason 'reason'. The default reason is 'none'",
            },
            {
              command: "clean",
              usage: "<amount>",
              description: "Delete 'amount' messages from the current channel",
            },
            {
              command: "modlog",
              usage: "[modlog]",
              description:
                "If specified, set the modlog channel to 'modlog'. Otherwise, return the current modlog",
            },
          ]}
        />
        <Table
          title={"Utility"}
          rows={[
            {
              command: "prefix",
              usage: "[new-prefix]",
              description:
                "Check the current prefix or change it to 'new-prefix'",
            },
            {
              command: "help",
              usage: "",
              description: "Sends this website for help",
            },
            {
              command: "eval",
              usage: "<code>",
              description: "Run some JavaScript ([Cursors]#9257 only)",
            },
          ]}
        />
        <Table title={"Amusement"} rows={[]} />
        <Wave flipped />
      </div>
    );
  }
}
