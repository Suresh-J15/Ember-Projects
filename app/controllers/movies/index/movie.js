/* eslint-disable no-console */

import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

  list: service('movies-list'),

  actions: {
    close() {
      this.list.set('fullWidth', true);
      this.transitionToRoute('movies.index');
    },

    deleteMovieItem() {
      // console.log("This is deleteRecord method from the controller");
      return true;
    },

    moveToEditPage() {
      this.transitionToRoute("movies.edit-item", this.model.id);
    }
  }
});
