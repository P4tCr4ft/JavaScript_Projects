import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
// import { Meteor } from 'meteor/meteor';

// import { Session } from 'meteor/session';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.timeDisplay.helpers({
	currentTime: function() {
		var date = new Date();
		return date.toLocaleTimeString();
	}
})

// Meteor.setInterval(function() {
// 	var currentDate = new Date();
// 	Session.set('now',
// 		currentDate.toLocaleTimeString()
// 	);
// }, 1000);

// Template.timeDisplay.helpers({
// 	currentTime: function() {
// 		return Session.get('now');
// 	}
// });
