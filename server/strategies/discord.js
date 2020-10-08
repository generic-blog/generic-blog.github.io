const DiscordStrategy = require("passport-discord").Strategy;
const discordPassport = require("passport");

discordPassport.use(
  new DiscordStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: process.env.CLIENT_REDIRECT,
      scopes: ["identify", "email", "guilds"],
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile.username);
      console.log(profile.id);
      console.log(profile.discriminator);
    }
  )
);
