import Controller from '@ember/controller';
import EmberObject from '@ember/object';

export default Controller.extend({
  actions: {
    openContactModal(contact) {
      let contactInfo = EmberObject.create(contact);
      console.log(contactInfo)
    },

    showDetails(contact) {
      this.transitionToRoute('show', contact);
    },
  },
});
