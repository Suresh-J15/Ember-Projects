import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | movies-list', function (hooks) {
  setupTest(hooks);

  this.service = "";

  hooks.beforeEach(function () {
    this.service = this.owner.lookup('service:movies-list');
  });

  // Replace this with your real tests.
  test('it exists', function (assert) {
    assert.ok(this.service);

    assert.ok(this.service.fullWidth)
  });

  test('checking 1', function (assert) {
    assert.ok(this.service.foo);
    this.service.set('foo', '')
    assert.notOk(this.service.foo);
  });

  test('checking the method', function (assert) {
    assert.equal(this.service.foo, 'bar');
    this.service.testMethod('pen');
    assert.equal(this.service.foo, 'pen');
  });

  test('should return incremented count on calc', function (assert) {

    assert.equal(this.service.calc(), 'count: 1');
    assert.equal(this.service.calc(), 'count: 2');
  });

  test('should set other prop to yes when foo changes', function (assert) {
    this.service.set('foo', 'baz');
    assert.equal(this.service.get('other'), 'yes');
  });
});
