angular.module('myApp.eventList')
  .controller('EventListCtrl', ['$scope',function($scope, MyAppFactory){
    var elc = this;

   elc.$onChanges = function(){
      elc.currOrg = orgs[elc.orgName];
      console.log('dsadsadsa');
   }

  }]);

