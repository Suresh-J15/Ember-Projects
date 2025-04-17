import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | movies/index/movie-loading', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:movies/index/movie-loading');
    assert.ok(route);
  });
});
