import Component from '@ember/component';

export default Component.extend({
  classNames: ['contact-card', 'col', 's6', 'm4', 'l3'],

  actions: {
    edit() {
      this.editAction(...arguments);
    },
  },
});
