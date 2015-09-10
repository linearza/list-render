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
      Ember.Object.create({
        id: 6,
        title: "Hey 6",
        status: false
      }),
      Ember.Object.create({
        id: 7,
        title: "Hey 7",
        status: false
      }),
      Ember.Object.create({
        id: 8,
        title: "Hey 8",
        status: true
      }),
      Ember.Object.create({
        id: 9,
        title: "Hey 9",
        status: false
      }),
      Ember.Object.create({
        id: 10,
        title: "Hey 10",
        status: true
      }),
    ]
  }
});