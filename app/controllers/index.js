import Controller from '@ember/controller';
import EmberObject, { computed } from '@ember/object';

export default Controller.extend({
  actions: {
    deleteContact(contact) {
      let url = `https://reqres.in/api/users/${contact.id}`;

      fetch(url, { method: 'DELETE' }).then(() => {
        M.toast({ html: 'Deleted!' });
      }).catch(() => {
        M.toast({ html: 'An error has ocurred' });
      });
    },

    loadNextPage() {
      let currentPage = this.get('model.page');
      this.fetchPage(currentPage + 1).then(response => {
        this.get('model.data').pushObjects(response.data);
        this.set('model.page', response.page);
      });
    },

    openContactModal(contact) {
      let contactInfo = EmberObject.create(contact);
      this.set('contactInfo', contactInfo);

      let elem = document.querySelector('#new-contact-modal');
      M.Modal.getInstance(elem).open();
    },

    save(data) {
      let url = "https://reqres.in/api/users";
      if (data.id) {
        url += `/${data.id}`;
      }

      fetch(url, {
        method: data.id ? 'PUT' : 'POST',
        body: JSON.stringify(data),
      }).then(() => {
        let elem = document.querySelector('#new-contact-modal');
        M.Modal.getInstance(elem).close();

        M.toast({ html: 'Saved!' });
      }).catch(() => {
        M.toast({ html: 'An error has ocurred' });
      });
    },

    showDetails(contact) {
      this.transitionToRoute('show', contact.id);
    },
  },

  hasMorePages: computed('model.page', function () {
    return this.get('model.page') < this.get('model.total_pages');
  }),
});
