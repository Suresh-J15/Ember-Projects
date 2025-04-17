/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rating', function (hooks) {
  setupRenderingTest(hooks);

  // test('it renders', async function (assert) {
  //   // Set any properties with this.set('myProperty', 'value');
  //   // Handle any actions with this.set('myAction', function(val) { ... });

  //   assert.ok(render(hbs`<Rating />`))
  //   console.log(typeof render(hbs`<Rating />`));
  //   console.log(Object.keys(render(hbs`<Rating />`)));
  //   console.log(this.element);
  // });

  // test('checking the component 1', async function (assert) {
  //   assert.ok(assert.dom('[data-my-test]'), "It is present", "Its is npt present");
  //   console.log(assert.dom('[data-my-test]'));
  //   // myDiv.getAttribute()
  //   // assert.equal()
  // });

  // test('clicking the component', async function (assert) {
  //   await render(hbs`<Rating />`)
  //   assert.dom('#sayHello')
  //   // assert.ok(assert.dom('#sayHello'), "sayHello is present")
  //   await click('#sayHello')
  //   assert.equal(this.element.querySelector('#sayHello').textContent, '', "empty")
  // })
});
