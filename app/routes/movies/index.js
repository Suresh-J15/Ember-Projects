/* eslint-disable no-console */

import Route from '@ember/routing/route';

export default Route.extend({

  actions: {
    seeMovieitem(movie_id) {
      console.log("Route Handler, Movie: ", movie_id);
    }
  }

});
