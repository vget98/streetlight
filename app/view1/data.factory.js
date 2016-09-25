angular.module('myApp.data', [])
  .factory('DataFactory', [function(){
    // Used to inject dummy data into various services:
    // 1) inject DataFactory, then
    // 2) set local var to orgs, ie: vm.orgs = data.orgs
    // 3) add other non-org data as needed to this file
    var data = {};
    data.orgs = _orgs;
    data.addOrg = function(org){
      data.orgs[org.name] = org;
      console.log('orgData: ', data.orgs);
    };
    return data;
  }
  ]);

// modify dummy orgs here for development
var _orgs = {
  'Helping Hand':{
    name: 'Helping Hand',
    email: 'helpinghand@hotmail.com',
    location: [37.784784, -122.410136],
    address: '261 Ellis Street, San Francisco, CA 94102',
    description: 'its hands that help',
    category: 'exercise',
    serviceArea: [[37.80218877920469,-122.43267059326172],[37.779398571318765,-122.43301391601562],[37.773157169570695,-122.40245819091797],[37.785096782276035,-122.3880386352539],[37.798662182986945,-122.39662170410156],[37.80544394934271,-122.40348815917969],[37.80815648152641,-122.41344451904297],[37.80463017025873,-122.43026733398438],[37.802460048862656,-122.43404388427734]],
    events:[{
      name:'Give a Hand',
      location: [37.784784, -122.410136],
      address: '261 Ellis Street, San Francisco, CA 94102',
      description: 'Volunteer to help those who need it',
      date: '09/25/16',
      time: ['16:30','22:00']
    }]
  },
  'Urban Helpers':{
    name: 'Urban Helpers',
    email: 'urbanhelpers@yahoo.com',
    location: [37.753726, -122.387846],
    address: '2833 3rd Street, San Francisco, CA 94107',
    description: 'urban areas need help',
    category: 'food',
    serviceArea: [[37.78238340327456,-122.38838195800781],[37.773699921075135,-122.40623474121094],[37.75334401310656,-122.40348815917969],[37.73786977649298,-122.40657806396484],[37.735154664553534,-122.37602233886719],[37.78238340327456,-122.3876953125]],
    events:[{
      name:'Urban Helpers Meeting',
      location: [37.753726, -122.387846],
      address: '2833 3rd Street, San Francisco, CA 94107',
      description: 'Meet with the Urban Helpers and learn more',
      date: '09/25/16',
      time: ['17:45','20:00']
    }]
  },
  'Mountain Helpers':{
    name: 'Mountain Helpers',
    email: 'mountainhelpers@sbcglobal.net',
    location: [37.786962, -122.458764],
    description: 'i guess some mountains need help too',
    address: '3984 Sacramento Street, San Francisco, CA 94118',
    category: 'healthcare',
    serviceArea: [[37.77641361883315,-122.45635986328125],[37.788624026050876,-122.43404388427734],[37.80028986370208,-122.44949340820312],[37.79974730744888,-122.4700927734375],[37.78699608830537,-122.4752426147461],[37.7761422535397,-122.45773315429688]],
    events:[{
      name:'Volunteering',
      location: [37.786962, -122.458764],
      address: '3984 Sacramento Street, San Francisco, CA 94118',
      description: 'Help others climb the mountain of success',
      date: '09/25/16',
      time: ['12:00','17:30']
    }]
  },
    'Sunset Helpers': {
    name: 'Sunset Helpers',
    emial: 'sunsethelpers@hotmail.com',
    location: [37.750573, -122.498686],
    description: 'helping homeless walk into sunset',
    address: '',
    category: 'Healthcare',
    serviceArea: [],
    events: [{
      name: 'Soup Kitchen',
      location: [37.750573, -122.498686],
      address: '',
      description: 'Come eat our soup',
      date: '10/11/16',
      time: ['08:00', '20:00']
    }]
  },
  'Merced Helpers': {
    name: 'Merced Helpers',
    emial: 'mercedhelpers@hotmail.com',
    location: [37.708329, -122.447038],
    description: 'Helping homelss around the lake',
    address: '',
    category: 'food',
    serviceArea: [],
    events: [{
      name: 'Merced Food Drive',
      location: [37.708329, -122.447038],
      address: '',
      description: 'Food drive for the homeless',
      date: '12/24/16',
      time: ['13:00', '18:45']
    }]
  },
  'Visitation Helpers': {
    name: 'Visitation Helpers',
    email: 'visitationhelpers.gmail.com',
    location: [37.713948, -122.407953],
    description: 'visiting the homeless in the valley',
    address: '',
    category: 'food',
    serviceArea: [],
    events: [{
      name: 'valley food fair',
      location: [37.713948, -122.407953],
      address: '',
      description: 'Food in the valley',
      date: '1/1/17',
      time: ['08:00', '12:56']
    }]
  }

};