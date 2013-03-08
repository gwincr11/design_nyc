window.App = Ember.Application.create({LOG_TRANSITIONS: true});

// Router
App.Router.map(function() {

});

// Models
App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});
