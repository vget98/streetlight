'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl as vt'
  });
}])

.controller('View2Ctrl', ['DataFactory','$scope', function(DataFactory, $scope) {
  var vt = this;
  vt.orgEvents = [];
  var _checkOrgMap = function(){
    return Object.keys(DataFactory.orgs).length;
  };
  var _init = function(){
    Object.keys(DataFactory.orgs).forEach(function(key){
        vt.orgEvents = vt.orgEvents.concat(DataFactory.orgs[key].events);
    });
    $scope.$watch(_checkOrgMap, function(newVal, oldVal){
      if(!newVal || !oldVal){
        return false;
      }
      vt.org = angular.copy(DataFactory.orgs);
      vt.orgEvents = [];
      Object.keys(DataFactory.orgs).forEach(function(key){
        vt.orgEvents = vt.orgEvents.concat(DataFactory.orgs[key].events);
      });

    })
  };

  _init()

}]);

