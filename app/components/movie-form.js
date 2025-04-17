/* eslint-disable no-console */

import Component from '@ember/component';
import { A } from '@ember/array';
import { set } from '@ember/object';

export default Component.extend({

  classNames: ['m-3'],

  isNew: true,
  releaseDate: null,

  submit(event) {
    console.log("submit occurs");
    event.preventDefault();
    if (this.saveOption) {
      this.saveOption(event);
      if (this.exit && typeof this.exit === "function") {
        this.exit();
      }
    }
  },

  actions: {
    exit() {
      if (this.exit && typeof this.exit === "function") {
        this.exit();
      } else {
        console.log("Exit option not provided");
      }
    },

    toggleGenres(value) {
      if (this.model.genres.includes(value)) {
        set(this.model, 'genres', this.model.genres.filter(item => item !== value))
      } else {
        set(this.model, 'genres', A([...this.model.genres, value]))
      }
    },

    setRating(rating) {
      set(this.model, 'rating', rating);
    }
  }

});
