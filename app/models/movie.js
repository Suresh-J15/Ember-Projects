import Model from '@ember-data/model';
import DS from 'ember-data'

export default Model.extend({
  movieTitle: DS.attr('string'),
  releaseDate: DS.attr('string'),
  directedBy: DS.attr('string'),
  genres: DS.attr('array'),
  imdbRating: DS.attr('number'),
  rating: DS.attr('string'),
  description: DS.attr('string'),
  year: DS.attr(),
  poster: DS.attr()
});
