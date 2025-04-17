/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  list: service('movies-list'),

  actions: {
    returnToList() {
      this.list.set('fullWidth', true);
      this.transitionToRoute("movies.index");
    },

    addMovieItem(event) {
      let newMovie = this.store.createRecord('movie', {

        movieTitle: this.model.movieTitle,
        releaseDate: this.model.releaseDate,
        directedBy: this.model.directedBy,
        imdbRating: this.model.imdbRating,
        rating: this.model.rating,
        poster: this.model.poster,
        description: this.model.description,
        genres: this.model.genres,
        year: new Date(this.model.releaseDate).getFullYear()

      });

      newMovie.save();
      this.transitionToRoute('movies');
    }
  }
});
