angular.module('myApp.eventList')
  .controller('EventListCtrl', [function(){
    var elc = this;

    elc.getOrg = function(name){
      return orgs[name];
    }
    elc.currOrg = elc.getOrg('Helping Hand');

  }]);




  var orgs = {
  'Helping Hand':{
   name: 'Helping Hand',
    location: [37.784784, -122.410136],
    description: 'description',
    category: ['stringz'],
    serviceArea: [[1,1],[1,1]],
    events:[{
      name:'First Event',
      location: [37.784784, -122.410136],
      description: 'description',
      date: '09/25/16',
      time: ['16:30','22:00']
    }]
  },
  'Urban Helpers':{
    name: 'Urban Helpers',
    location: [37.753726, -122.387846],
    description: 'description',
    category: ['stringz'],
    serviceArea: [[1,1],[1,1]],
    events:[{
      name:'First Event',
      location: [37.753726, -122.387846],
      description: 'description',
      date: '09/25/16',
      time: ['17:45','20:00']
    }]
  },
   'Mountain Helpers':{
    name: 'Mountain Helpers',
    location: [37.786962, -122.458764],
    description: 'description',
    category: ['stringz'],
    serviceArea: [[1,1],[1,1]],
    events:[{
      name:'First Event',
      location: [37.786962, -122.458764],
      description: 'description',
      date: '09/25/16',
      time: ['12:00','17:30']
    }]
  }
}