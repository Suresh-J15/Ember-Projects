import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('movies', function () {
    this.route('index', { path: '/' }, function () {
      this.route('movie', { path: '/:movie_id' });
      this.route('movie-loading');
    });

    this.route('add-item');
    this.route('edit-item', { path: '/:segment_id/edit-item' });
  });
  this.route('not-found', { path: '/*path' });
});