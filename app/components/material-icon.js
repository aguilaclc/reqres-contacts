import Component from '@ember/component';

const MDIconComponent = Component.extend({
  tagName: 'i',
  classNames: ['material-icons'],
});

MDIconComponent.reopenClass({
  positionalParams: ['iconName'],
});

export default MDIconComponent;
