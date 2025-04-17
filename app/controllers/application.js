import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    addNewMovieItem() {
      this.transitionToRoute("movies.add-item");
    }
  }
});
