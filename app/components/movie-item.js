import Component from '@ember/component';

export default Component.extend({
  classNames: ["mx-0", "p-3"],

  actions: {
    closeItem() {
      if (this.close && typeof this.close === "function") {
        this.close();
      }
    }
  }
});
