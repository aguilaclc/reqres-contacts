import Route from '@ember/routing/route';
import fetch from 'fetch';

export default Route.extend({
  fetchPage(pageNumber = 1) {
    let url = `https://reqres.in/api/users?per_page=4&page=${pageNumber}`;

    return fetch(url).then(payload => {
      return payload.json().then(response => {
        return response;
      });
    });
  },

  model() {
    return this.fetchPage();
  },

  setupController(controller) {
    controller.set('fetchPage', this.fetchPage);
    this._super(...arguments);
  },
});
