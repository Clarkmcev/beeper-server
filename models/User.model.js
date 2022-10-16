const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    name: { type: String },
    bio: { type: String },
    location: { type: String },
    profileImg: { type: String },
    backgroundImg: { type: String },
    email: {
      type: String,
    },
    picture: { type: String },
    password: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
