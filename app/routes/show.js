import Route from '@ember/routing/route';
import fetch from 'fetch';
import RSVP from 'rsvp';

export default Route.extend({
  model(params) {
    let url = `https://reqres.in/api/users/${params.id}`;
    return RSVP.hash({
      contact: fetch(url).then(payload => {
        return payload.json().then(response => {
          return response.data;
        });
      }),
    });
  },
});
