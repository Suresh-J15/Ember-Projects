/* eslint-disable no-console */

import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    returnToDetails() {
      this.transitionToRoute("movies.index.movie", this.model);
    },

    editMovieItem() {
      this.model.save();
    }
  }
});
