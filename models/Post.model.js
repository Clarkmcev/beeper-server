const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const postSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    picture: { type: String },
    likes: { type: Number },
    postWriterId: {},
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;
