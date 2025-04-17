/* eslint-disable no-console */

import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default Route.extend({

  list: service('movies-list'),

  async model(params) {
    let { movie_id } = params;
    this.set('movie_id', movie_id);
    // console.log("Movie ID: ", movie_id);
    return await this.store.findRecord('movie', movie_id)
      .catch(() => {
        this.transitionTo('/not-found')
      });
  },

  setupController() {
    this._super(...arguments);
    this.set('movie_id', this.movie_id);
    this.list.set('fullWidth', false);
  },

  actions: {
    // willTransition(transition) {
    //   if (transition.to.name === "movies.index.index") {
    //     this.list.set('fullWidth', true);
    //   }
    // },

    deleteMovieItem() {
      this.controller.model.destroyRecord();
      this.list.set('fullWidth', true);
      this.transitionTo('movies');
    }
  }

});
