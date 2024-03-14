const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movieController");
const authenticateToken = require("../middleware/authenticateToken");

//post a new movie
router.post("/", authenticateToken, movieController.createMovie);

// Get Movie List by given filters
router.get("/", authenticateToken, movieController.getAllMovies);

//Get a specific movie by ID
router.get("/:id", authenticateToken, movieController.getMovieById);

//Update a movie by ID
router.put("/:id", authenticateToken, movieController.updateMovie);

// Delete a movie by ID
router.delete("/:id", authenticateToken, movieController.deleteMovie);

module.exports = router;
