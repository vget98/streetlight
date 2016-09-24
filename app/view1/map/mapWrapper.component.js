angular.module('myApp.mapWrapper', ['ngMap'])
  .component('mapWrapper',{
    templateUrl:'view1/map/mapWrapper.html',
    bindings: {
      points:'<',
      callback: '&',
      mapname: '@',
      model:'='
    },
    controller: 'MapCtrl',
    controllerAs: 'mc'
  })




  //component takes obj