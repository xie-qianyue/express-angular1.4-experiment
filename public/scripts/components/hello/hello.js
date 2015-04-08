angular.module('starterApp.hello', []) // declare a app.hello module
    .controller('HelloController', HelloController);

function HelloController() {
    this.name = 'World';
}