import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default Route.extend({
  model() {
    return {
      movieTitle: "",
      directedBy: "",
      releaseDate: null,
      genres: A([]),
      poster: "",
      description: "",
      rating: "",
      imdbRating: 0
    }
  }
});
