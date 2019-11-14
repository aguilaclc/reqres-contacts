import Modal from './modal';
import { computed } from '@ember/object';
import { next } from '@ember/runloop';

export default Modal.extend({
  actions: {
    save() {
      this.saveAction(this.get('data'));
    },
  },

  didReceiveAttrs() {
    // XXX: Materialize recommends this in case inputs are prefilled, in order
    // to activate labels properly.
    next(() => M.updateTextFields());
    this._super(...arguments);
  },

  elementId: 'new-contact-modal',

  modalHeader: computed('data.id', function () {
    return `${this.get('data.id') ? 'Edit' : 'Create'} contact`;
  }),
});
