const DiscordStrategy = require("passport-discord").Strategy;
const discordPassport = require("passport");

const scopes = ["identify", "email", "guilds"];

discordPassport.use(
  new DiscordStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CLIENT_REDIRECT,
      scopes: scopes,
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile.username);
      console.log(profile.id);
    }
  )
);
