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

    loadNextPage() {
      let currentPage = this.get('model.page');
      this.fetchPage(currentPage + 1).then(response => {
        this.get('model.data').pushObjects(response.data);
        this.set('model.page', response.page);
      });
    },
  },

  hasMorePages: computed('model.page', function () {
    return this.get('model.page') < this.get('model.total_pages');
  }),
});
