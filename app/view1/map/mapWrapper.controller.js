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

    mc.showInfoWindow = function(event, $index,o) {
      var infowindow = new google.maps.InfoWindow();
      var center = new google.maps.LatLng(mc.orgs[$index].location[0]+0.006, mc.orgs[$index].location[1]);

      infowindow.setPosition(center);

      infowindow.setContent(
          '<h5>' + mc.orgs[$index].name + '</h5>' +
          '<p>' + mc.orgs[$index].description + '</p>'
          );

      infowindow.open(mc.map);
      mc.setOrg({'orgName': o.name});
    };

    mc.mapClickHandler = function(event) {
      console.log('event: ', event);
      mc.path.push([event.latLng.lat(), event.latLng.lng()]);
      console.log('path:', mc.path);
    };
    
    mc.getColor = function(category) {
      var _colorMap = {
        'healthcare': '#FF0000',
        'food': '#00FF00',
        'exercise': '#0000FF'
      };
      console.log('category: ', category);
      console.log('color: ', _colorMap[category]);
      return _colorMap[category];
    };

    mc.$onInit = function() {
      console.log('setOrgCb: ', mc.setOrg);
      mc.path = [];
      mc.orgs = Object.keys(DataFactory.orgs).map(function(name){
        return DataFactory.orgs[name];
      });
      mc.paths = mc.orgs.map(function(org){
        return org.location
      });
      mc.paths2 = [
        [37.784784, -122.410136],
        [37.753726, -122.387846],
        [37.786962, -122.458764]
      ];
      console.log('mc.paths:', mc.paths)
      _getMap();
    }

  }]);