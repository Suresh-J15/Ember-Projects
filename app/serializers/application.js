import JSONAPISerializer from '@ember-data/serializer/json-api';

export default JSONAPISerializer.extend({
  keyForAttribute(attr) {
    return attr
  },
});
