/* eslint-disable no-console */

import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    close() {
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
