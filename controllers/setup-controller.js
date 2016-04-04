var Todos = require('../models/TodoModel');

// seed database
var todos = [{
        username: "Suresh",
        todo: "Learn Mean",
        isDone: false,
        hasAttachment: false
    },{
        username: "Suresh",
        todo: "Learn Mean",
        isDone: false,
        hasAttachment: false
    },{
        username: "Suresh",
        todo: "Learn Latest Node",
        isDone: false,
        hasAttachment: false
    },{
        username: "Suresh",
        todo: "Learn AWS - Prep for certification",
        isDone: false,
        hasAttachment: false
    },{
        username: "Suresh",
        todo: "Learn HTML5/CSS3 - in depth",
        isDone: false,
        hasAttachment: false
    },{
        username: "Suresh",
        todo: "Learn Arduino - connect with AWS IOT",
        isDone: false,
        hasAttachment: false
    },{
        username: "Kirthi",
        todo: "Support husband in his learning process",
        isDone: false,
        hasAttachment: false
    }];


module.exports = function(app){
    app.get('/api/setupTodos', function(req, res){
        Todos.create(todos, function(err, results){
            res.send(results);
        });
    });
    app.get('/api/cleanupTodos', function(req, res){
        // cleanup Todos.// TODO
    });
    app.get('/api/resetTodos', function(req, res){
        // cleanup and create Todos.    // TODO
    });
}