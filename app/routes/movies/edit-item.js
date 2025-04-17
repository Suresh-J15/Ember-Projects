/* eslint-disable no-console */

import Route from '@ember/routing/route';

export default Route.extend({
  async model(params) {
    // console.log("Segment ID: ", params.segment_id);
    return await this.store.findRecord('movie', params.segment_id)
      .catch((error) => {
        console.error(error);
      });
  },
});
