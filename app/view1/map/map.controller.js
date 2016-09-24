angular.module('myApp.map')
  .controller('MapCtrl', ['NgMap',function(NgMap){
    var mc = this;
    console.log(mc);
    NgMap.getMap().then(function(map) {
      console.log(map.getCenter());
      console.log('markers', map.markers);
      console.log('shapes', map.shapes);
    });
  }]);