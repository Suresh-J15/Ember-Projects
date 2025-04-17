import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | movies/add-item', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:movies/add-item');
    assert.ok(route);
  });
});
