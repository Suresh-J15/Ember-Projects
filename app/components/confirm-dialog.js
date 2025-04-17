import Component from '@ember/component';

export default Component.extend({
  classNames: ['modal fade'],
  attributeBindings: ['tabindex', 'backdrop:data-bs-backdrop', 'hidden:aria-hidden'],
  backdrop: 'static',
  tabindex: -1,
});
