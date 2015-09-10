import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNameBindings: [':boxed', 'showStatus:highlight'],

  item: null,
  isActive: false,
  showStatus: Ember.computed.and('isActive', 'item.status'),

});
