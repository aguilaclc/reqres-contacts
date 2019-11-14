import { run } from '@ember/runloop';
import Component from '@ember/component';

export default Component.extend({
  actions: {
    onOpenEnd() {
      document.querySelector(`#${this.id} input[autofocus]`).focus();

      if (this.onOpenEnd) {
        this.onOpenEnd();
      }
    },

    onCloseEnd() {
      if (this.onCloseEnd) {
        this.onCloseEnd();
      }
    },
  },

  classNames: ['modal'],

  didInsertElement() {
    let options = {
      onOpenEnd: () => {
        if (!this.get('isDestroyed')) {
          this.send('onOpenEnd');
        }
      },

      onCloseEnd: () => {
        if (!this.get('isDestroyed')) {
          this.send('onCloseEnd');
        }
      },
    };

    this.get('modalOptions').forEach(optionName => {
      let optionValue = this.get(optionName);

      if (optionValue !== undefined) {
        options[optionName] = optionValue;
      }
    });

    let elem = document.querySelector(`#${this.id}`);
    M.Modal.init(elem, options);
  },

  modalOptions: [
    'dismissible',
    'endingTop',
    'inDuration',
    'opacity',
    'outDuration',
    'startingTop',
  ],

  willDestroyElement() {
    let elem = document.querySelector(`#${this.id}`);
    let modal = M.Modal.getInstance(elem);

    if (modal.isOpen) {
      modal.close();
    }
    this._super(...arguments);
  },
});
