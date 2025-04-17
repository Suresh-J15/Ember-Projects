import Transform from '@ember-data/serializer/transform';
import { A } from '@ember/array';

export default Transform.extend({
  deserialize(serialized) {
    return Array.isArray(serialized) ? A(serialized) : A([]);
  },

  serialize(deserialized) {
    return Array.isArray(deserialized) ? deserialized : [];
  }
});
