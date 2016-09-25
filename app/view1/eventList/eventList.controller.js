angular.module('myApp.eventList')
  .controller('EventListCtrl', ['$scope',function($scope){
    var elc = this;
    elc.$onChanges = function(){
      // elc.currOrg = elc.orgMap[elc.orgName];
      // if elc.currentOrg{}
      // elc.events = elc.currOrg.events
    }
  }]);

