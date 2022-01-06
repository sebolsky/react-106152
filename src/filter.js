export const movieFilter = (movies, word) => {
  let filteredMovies = [];

  movies.forEach((movie) => {
    if (
      movie.title.toLowerCase().includes(word.toLowerCase()) ||
      movie.director.toLowerCase().includes(word.toLowerCase()) ||
      checkActors(movie.actors, word)
    ) {
      filteredMovies.push(movie);
    }
  });

  return filteredMovies;
};

const checkActors = (actors, word) => {
  let result = false;

  actors.forEach((actor) => {
    if (actor.toLowerCase().includes(word.toLowerCase())) {
      result = true;
    }
  });

  return result;
};