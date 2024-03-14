const mongoose = require("mongoose");
const config = require("../config/config");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    director: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      enum: config.GENRE_LIST,
      required: true,
    },
    releaseYear: {
      type: String,
    },
    description: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
