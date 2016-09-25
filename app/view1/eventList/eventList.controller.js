angular.module('myApp.eventList')
  .controller('EventListCtrl', ['$scope','DataFactory',function($scope, DataFactory){
    var elc = this;
   elc.$onChanges = function(){
      elc.currOrg = DataFactory.orgs[elc.orgName];
   }

  }]);

