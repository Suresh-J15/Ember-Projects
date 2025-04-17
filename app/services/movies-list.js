/* eslint-disable no-undef */
/* eslint-disable ember/no-observers */

import Service from '@ember/service';
import { computed, observer } from '@ember/object'

export default Service.extend({
  fullWidth: true,

  foo: 'bar',

  computedFoo: computed('foo', function () {
    return `computed ${this.foo}`;
  }),

  testMethod(value) {
    this.set('foo', value);
  },

  count: 0,

  calc() {
    this.incrementProperty('count');
    return `count: ${this.count}`;
  },

  other: 'no',

  doSomething: observer('foo', function () {
    this.set('other', 'yes');
  }),

});
