window.App = Ember.Application.create({LOG_TRANSITIONS: true});

// Router
App.Router.map(function() {

});

// Models
App.Store = DS.Store.extend({
  revision: 11,
  adapter: 'DS.FixtureAdapter'
});

App.Project = DS.Model.extend({
    name: DS.attr('string'),
    location: DS.attr('string'),
    cents: DS.attr('number')
});


App.Food.FIXTURES = [{
    id: 1,
    name: 'Pizza',
    imageUrl: 'img/pizza.png',
    cents: 1500
}, {
    id: 2,
    name: 'Pancakes',
    imageUrl: 'img/pancakes.png',
    cents: 300
}, {
    id: 3,
    name: 'Fries',
    imageUrl: 'img/fries.png',
    cents: 700
}, {
    id: 4,
    name: 'Hot Dog',
    imageUrl: 'img/hotdog.png',
    cents: 950
}, {
    id: 5,
    name: 'Birthday Cake',
    imageUrl: 'img/birthdaycake.png',
    cents: 2000
}];
