angular.module('myApp.helper', [])
  .factory('MyAppFactory', function ($http) {

    return {
      getAddress: function (cords)  {
        return $http({
          method: 'GET',
          url : 'http://maps.googleapis.com/maps/api/geocode/json?latlng=' + cords[0] + ',' + cords[1] + '&sensor=false'
        })
        .then(function(response) {
          var address = response.data.results.formatted_address
          console.log('this is formatted address', address);
          return address;
        })
      },
      getCoordinates: function(address){
        address = address.split(' ').join('+');
        return $http({
          method: 'GET',
          url: 'https://maps.googleapis.com/maps/api/geocode/json?address='+address
        })
        .then(function(response) {
          var coordinate = response.data.results.geometry.location
          console.log('this is formatted coordinate', coordinate);
          return coordinate;
        })
      }

    }
  })
