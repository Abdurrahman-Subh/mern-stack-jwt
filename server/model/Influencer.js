const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const influencerSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  followers: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Influencer", influencerSchema);
