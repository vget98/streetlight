angular.module('myApp.mapWrapper')
  .controller('MapCtrl', ['NgMap', 'DataFactory', function(NgMap, DataFactory){
    var mc = this;

    _getMap = function(){
        console.log("timeout");
        NgMap.getMap('ng-map').then(function(map) {
          mc.map = map;
          console.log(map.getCenter());
          console.log('markers', map.markers);
          console.log('shapes', map.shapes);
        });
    };

    mc.markerClickHandler = function(event, $index, o){
      console.log('args: ', event, $index, o);
      mc.map.showInfoWindow(event, $index);
      mc.setOrg({'orgName': o.name});
    };

    mc.$onInit = function() {
      console.log('setOrgCb: ', mc.setOrg);
      mc.orgs = Object.keys(DataFactory.orgs).map(function(name){
        return DataFactory.orgs[name];
      });
      _getMap();
    }

  }]);