angular.module('myApp.map', [])
  .component('map',{
    templateUrl:'view1/map/map.html',
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