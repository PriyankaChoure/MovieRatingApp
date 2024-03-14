const Movie = require("../models/movie");

const createMovie = async (movieData) => {
  try {
    const movie = await Movie.create(movieData);

    return movie;
  } catch (error) {
    throw error;
  }
};

const getAllMovies = async (userId, genre, releaseYear, director) => {
  try {
    //const movies = await Movie.find({ userId: userId });
    const movies = await Movie.find({
      $and: [
        { userId: userId },
        {
          $or: [
            { genre: genre },
            { releaseYear: releaseYear },
            { director: director },
          ],
        },
      ],
    });
    return movies;
  } catch (error) {
    throw error;
  }
};

const getMovieById = async (movieId, userId) => {
  try {
    const movie = await Movie.findOne({ userId: userId, _id: movieId });
    return movie;
  } catch (error) {
    throw error;
  }
};

const updateMovie = async (movieId, userId, updatedData) => {
  try {
    const movie = await Movie.findOneAndUpdate(
      { _id: movieId, userId: userId },
      { $set: updatedData },
      { new: true }
    );

    return movie;
  } catch (error) {
    throw error;
  }
};

const deleteMovie = async (movieId, userId) => {
  try {
    const movie = await Movie.findOneAndDelete({
      _id: movieId,
      userId: userId,
    });
    return movie;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
};
