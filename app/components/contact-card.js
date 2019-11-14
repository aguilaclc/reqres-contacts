import Component from '@ember/component';

export default Component.extend({
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

  classNames: ['contact-card', 'col', 's12', 'm6', 'l4', 'xl3'],
});
