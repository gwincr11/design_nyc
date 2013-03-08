window.App = Ember.Application.create({
//    init: function() {
//        var name = this.get('name');
//        console.log(name + ", reporting for duty!");
//
//        var mapOptions = {
//            center: new google.maps.LatLng(-34.397, 150.644),
//            zoom: 8,
//            mapTypeId: google.maps.MapTypeId.ROADMAP
//        };
//        var map = new google.maps.Map(document.getElementById("map_canvas"),
//            mapOptions);
//    },
    LOG_TRANSITIONS: true
});

// Router
App.Router.map(function () {
    this.resource('projects', function () {
        this.resource('project', { path: ':project_id' });
    });
});

App.IndexRoute = Ember.Route.extend({
    redirect: function () {
        this.transitionTo('projects');
    }
});

App.ProjectsRoute = Ember.Route.extend({
    model: function () {
        return App.Project.find();
    }
});

App.ProjectsController = Ember.ArrayController.extend({
    sortProperties: ['id']
});


// Models
App.Store = DS.Store.extend({
    revision: 11,
    adapter: 'DS.FixtureAdapter'
});

App.Project = DS.Model.extend({
    name: DS.attr('string'),
    address: DS.attr('string'),
    info: DS.attr('string')
});


App.Project.FIXTURES = [
    {
        id: 1,
        name: 'Climb',
        info: 'CLIMB is a community-based initiative founded on the belief that safe parks are essential to community health as they combat problems such as sedentary lifestyles and obesity.\nDesign Need: A community map system for an urban hiking trail that connects Central Park to parks in northern Manhattan, such as the Cloisters and Highbridge Park.',
        location: "USE LOCATION HERE"
    }
];
