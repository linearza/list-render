import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return [
      Ember.Object.create({
        id: 1,
        title: "Hey 1",
        status: true
      }),
      Ember.Object.create({
        id: 2,
        title: "Hey 2",
        status: false
      }),
      Ember.Object.create({
        id: 3,
        title: "Hey 3",
        status: true
      }),
      Ember.Object.create({
        id: 4,
        title: "Hey 4",
        status: true
      }),
      Ember.Object.create({
        id: 5,
        title: "Hey 5",
        status: false
      }),
    ];
  },

  setupController(controller, model) {
    this._super(controller, null);
    controller.setProperties({
      items: model,
      isActive: false,
      nextId: model.length +1,
    });
  }




});