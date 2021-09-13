"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    console.log(response.data);
    var ID = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    console.log("\n    ID: " + ID + "\n    Title: " + title + "\n    Status: " + finished + "\n  ");
});
