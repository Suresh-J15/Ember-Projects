/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    return await this.store.findAll('movie')
      .catch((error) => {
        console.error(error);
      });
  },

  setupController(controller, model) {
    this._super(...arguments);
  }
});
