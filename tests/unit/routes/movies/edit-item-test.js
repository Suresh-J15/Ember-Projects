import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | movies/edit-item', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:movies/edit-item');
    assert.ok(route);
  });
});
