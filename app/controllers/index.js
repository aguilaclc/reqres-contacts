import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';

export default Controller.extend({
  actions: {
    openContactModal(contact) {
      let contactInfo = EmberObject.create(contact);
      console.log(contactInfo)
    },

    showDetails(contact) {
      this.transitionToRoute('show', contact.id);
    },
  },

  hasMorePages: computed('model.page', function () {
    return this.get('model.page') < this.get('model.total_pages');
  }),
});
