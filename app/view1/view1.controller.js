angular.module('myApp.view1')
  .controller('View1Ctrl', ['$uibModal', 'DataFactory', '$scope', function($uibModal, DataFactory, $scope) {
  var vc = this;
  vc.yolo = 'hey there';

  vc.setSelectedOrg = function(orgName) {
    vc.selectedOrgName = orgName;
    vc.events = DataFactory.orgs[orgName].events;
    console.log("Selected Org Name called ", vc.selectedOrgName)
  };

  vc.animationsEnabled = true;
  vc.open = function (size) {
    console.log('fucking first one');
     var modalInstance = $uibModal.open({
       animation: vc.animationsEnabled,
       ariaLabelledBy: 'modal-title',
       ariaDescribedBy: 'modal-body',
       templateUrl: 'view1/userInfo/userInfo.html',
       controller: 'UserInfoCtrl',
       controllerAs: 'uc',
       size: size
     });
   };
  var _checkOrgMap = function(){
    console.log('length: ', Object.keys(DataFactory.orgs).length);
    return Object.keys(DataFactory.orgs).length;
  };
  var _init = function(){
    vc.orgMap = DataFactory.orgs;
    console.log('orgMap: ', vc.orgMap);
    $scope.$watch(_checkOrgMap, function(newVal, oldVal){
      if(!newVal || !oldVal){
        return false;
      }
      vc.orgMap = angular.copy(DataFactory.orgs);
    })
  };
  _init();


  vc.addEvent = function (size) {
    console.log('add event modal');
    var modalInstance = $uibModal.open({
      animation: vc.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'view1/addevent/addEvent.html',
      controller: 'AddEventCtrl',
      controllerAs: 'ec',
      resolve: {
        Selected: function(){
          return DataFactory.orgs[vc.selectedOrgName];
        }
      },
      size: size
    });
  }

}]);
