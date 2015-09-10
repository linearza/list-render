import Ember from 'ember';

export default Ember.Controller.extend({

  items: [],
  isActive: false,

  actions: {
    fix: null,

    doToggle() {
      this.toggleProperty('isActive');
    }
  }
});
