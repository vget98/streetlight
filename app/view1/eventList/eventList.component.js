angular.module('myApp.eventList', [])
  .component('eventList',{
    templateUrl:'view1/eventList/eventList.html',
    bindings: {
      orgName: '<',
      orgMap: '<'
    },
    controller: 'EventListCtrl',
    controllerAs: 'elc'
  });