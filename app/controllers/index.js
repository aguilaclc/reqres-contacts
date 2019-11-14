import Controller from '@ember/controller';
import { next } from '@ember/runloop';
import EmberObject, { computed } from '@ember/object';

export default Controller.extend({
  actions: {
    deleteContact(contact) {
      // call DELETE endpoint
    },

    openContactModal(contact) {
      let contactInfo = EmberObject.create(contact);
      this.set('contactInfo', contactInfo);

      let elem = document.querySelector('#new-contact-modal');
      M.Modal.getInstance(elem).open();

      // XXX: Materialize recommends this in case inputs are prefilled, in order
      // to activate labels properly.
      next(() => M.updateTextFields());
    },

    save() {
      let info = this.get('contactInfo');
      let url = "https://reqres.in/api/users";
      if (info.id) {
        url += `/${info.id}`;
      }

      fetch(url, {
        method: info.id ? 'PUT' : 'POST',
        body: JSON.stringify(info),
      }).then(payload => {
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
