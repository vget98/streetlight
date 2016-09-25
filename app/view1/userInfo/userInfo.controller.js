angular.module('myApp.userInfo', [])
  .controller('UserInfoCtrl', ['DataFactory', 'MyAppFactory', '$scope', function(DataFactory, MyAppFactory, $scope) {
    var uc = this;
    uc.addOrg = function(){
      console.log('addingOrg', uc.org);
      MyAppFactory.getCoordinates(uc.org.address).then(function(result){
        uc.org.location = result;
        DataFactory.addOrg(uc.org);
        $scope.$close()
      });
    };
    var _init = function() {
      uc.org = {};
      uc.org.events = [];
    };
    _init()
  }]);