import Controller from '@ember/controller';
import { inject as service } from '@ember/service'
import { computed } from '@ember/object'

export default Controller.extend({

  list: service('movies-list'),
  presentRoute: computed('list.fullWidth', function () {
    return this.list.fullWidth
  }),

  actions: {
    seeMovieItem(movie_id) {
      this.list.set('fullWidth', false);
      this.transitionToRoute("movies.index.movie", movie_id);
      return true;
    }
  }

});