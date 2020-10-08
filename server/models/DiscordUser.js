const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  discordId: { type: String, required: true },
  username: { type: String, required: true },
});
