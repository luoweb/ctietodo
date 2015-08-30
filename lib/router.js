Router.configure({
    layoutTemplate: 'nav',
    // loadingTemplate: 'loading',
    // waitOn: function() { return Meteor.subscribe("tasks"); } 
});
Router.route('/', {name: 'layout'});

Router.route('/app', {name: 'applist'});