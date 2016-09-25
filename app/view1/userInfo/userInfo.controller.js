angular.module('myApp.userInfo', [])
  .controller('UserInfoCtrl', [function(DataFactory) {
    console.log(DataFactory);
  }]);