/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import { Factory } from 'ember-cli-mirage';
import { capitalize } from '@ember/string';
import faker from 'faker';

export default Factory.extend({
  movieTitle(i) {
    return `Movie ${capitalize((i + 1).toString(16))}`;
  },

  releaseDate() {
    return faker.date.past(30).toISOString().split("T")[0];
  },

  year() {
    return new Date(this.releaseDate).getFullYear();
  },

  director() {
    return faker.name.findName();
  },

  rating() {
    // let movieRatings = [
    //   { rate: 'G', isChecked: false },
    //   { rate: 'PG', isChecked: false },
    //   { rate: 'PG-13', isChecked: false },
    //   { rate: 'R', isChecked: false },
    //   { rate: 'NC-17', isChecked: false }
    // ];
    // movieRatings[keys[Math.floor(Math.random() * (keys.length - 1))]] = true;
    // return movieRatings;

    let keys = ['G', 'PG', 'PG-13', 'R', 'NC-17'];
    return keys[Math.floor(Math.random() * (keys.length - 1))];
  },

  imdbRating() {
    return Math.round((Math.random() * 6 + 4) * 10) / 10;
  },

  genres() {
    let arr = ['Action', 'Comedy', 'Drama', 'Fantasy', 'Psychological', 'Sports', 'Thriller'];
    return [arr[Math.floor(Math.random() * (arr.length - 1))]];
  },

  description() {
    return faker.lorem.paragraph();
  },
});
