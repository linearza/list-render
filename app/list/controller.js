import Ember from 'ember';

export default Ember.Controller.extend({

  items: [],
  nextId: 1,
  isActive: false,

  actions: {
    fix: null,

    toggle() {
      this.toggleProperty('isActive');
    },

    push() {
      let item = Ember.Object.create({
        id: this.get('nextId'),
        title: "Hey " + this.get('nextId'),
        status: Math.round(Math.random())
      });

      this.incrementProperty('nextId');
      this.get('items').pushObject(item);
    },

    pop() {
      this.get('items').popObject();
    },


    unshift() {
      let item = Ember.Object.create({
        id: this.get('nextId'),
        title: "Hey " + this.get('nextId'),
        status: Math.round(Math.random())
      });

      this.incrementProperty('nextId');
      this.get('items').unshiftObject(item);
    },

    shift() {
      this.get('items').shiftObject();
    },

  }
});
