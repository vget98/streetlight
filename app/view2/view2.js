'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl as vt'
  });
}])

.controller('View2Ctrl', [function() {
  var vt = this;
  vt.print = function(value){
    console.log("in view2 controller ",value);
  }
}]);