import Route from '@ember/routing/route';
import fetch from 'fetch';
import RSVP from 'rsvp';

export default Route.extend({
  model() {
    let url = 'https://reqres.in/api/users';
    return RSVP.hash({
      contacts: fetch(url).then(payload => {
        return payload.json().then(response => {
          return response.data;
        });
      }),
    });
  },
});
