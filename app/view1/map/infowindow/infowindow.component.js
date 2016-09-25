angular.module('myApp.infoWindow', ['ngMap'])
  .component('infowindow',{
    templateUrl:'view1/map/infowindow/infowindow.html',
    bindings: {
      callbackname: '&',
    },
    controller: 'infoWindowCtrl',
    controllerAs: 'iw'
  })
