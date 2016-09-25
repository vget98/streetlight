angular.module('myApp.eventList', [])
  .component('eventList',{
    templateUrl:'view1/eventList/eventList.html',
    bindings: {
      orgName: '<',
      events: '<'
    },
    controller: 'EventListCtrl',
    controllerAs: 'elc'
  });



  //component takes obj