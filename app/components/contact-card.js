import Component from '@ember/component';

export default Component.extend({
  classNames: ['contact-card', 'col', 's12', 'm6', 'l4', 'xl3'],

  actions: {
    click() {
      this.clickAction(...arguments);
    },

    delete() {
      this.deleteAction(...arguments);
    },

    edit() {
      this.editAction(...arguments);
    },
  },
});
