const movieService = require("../services/movieService");

const createMovie = async (req, res) => {
  try {
    const { title, director, genre, releaseYear, description } = req.body;
    const userId = req.user.id;

    const movie = await movieService.createMovie({
      title,
      director,
      genre,
      releaseYear,
      description,
      userId,
    });

    console.log("Movie created", movie);

    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const userId = req.user.id;
    const { genre, releaseYear, director } = req.query;
    console.log(req.query);
    console.log(genre, releaseYear, director);
    const movies = await movieService.getAllMovies(
      userId,
      genre,
      releaseYear,
      director
    );
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMovieById = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  const movie = await movieService.getMovieById(id, userId);

  if (!movie) {
    return res.status(404).json({ message: "movie not found." });
  }

  res.status(200).json(movie);

  try {
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const updatedData = req.body;
    console.log(`movie id - ${userId}`);
    const movie = await movieService.updateMovie(id, userId, updatedData);

    if (!movie) {
      return res.status(404).json({ message: "movie not found." });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const success = await movieService.deleteMovie(id, userId);

    if (!success) {
      return res.status(404).json({ message: "movie not fund" });
    }

    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createMovie,
  getAllMovies,
  getMovieById,
  updateMovie,
  deleteMovie,
};
