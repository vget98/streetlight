angular.module('myApp.eventList')
  .controller('EventListCtrl', ['$scope',function($scope, MyAppFactory){
    var elc = this;

   elc.$onChanges = function(){
      elc.currOrg = orgs[elc.orgName];
   }

  }]);




  var orgs = {
  'Helping Hand':{
   name: 'Helping Hand',
    location: [37.784784, -122.410136],
    address: '261 Ellis Street, San Francisco, CA 94102',
    description: 'description',
    category: ['stringz'],
    serviceArea: [[1,1],[1,1]],
    events:[{
      name:'First Event',
      location: [37.784784, -122.410136],
      address: '261 Ellis Street, San Francisco, CA 94102',
      description: 'description',
      date: '09/25/16',
      time: ['16:30','22:00']
    }]
  },
  'Urban Helpers':{
    name: 'Urban Helpers',
    location: [37.753726, -122.387846],
    address: '2833 3rd Street, San Francisco, CA 94107',
    description: 'description',
    category: ['stringz'],
    serviceArea: [[1,1],[1,1]],
    events:[{
      name:'First Event',
      location: [37.753726, -122.387846],
      address: '2833 3rd Street, San Francisco, CA 94107',
      description: 'description',
      date: '09/25/16',
      time: ['17:45','20:00']
    }]
  },
   'Mountain Helpers':{
    name: 'Mountain Helpers',
    location: [37.786962, -122.458764],
    address: '3984 Sacramento Street, San Francisco, CA 94118',
    description: 'description',
    category: ['stringz'],
    serviceArea: [[1,1],[1,1]],
    events:[{
      name:'First Event',
      location: [37.786962, -122.458764],
      address: '3984 Sacramento Street, San Francisco, CA 94118',
      description: 'description',
      date: '09/25/16',
      time: ['12:00','17:30']
    }]
  }
}