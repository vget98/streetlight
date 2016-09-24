angular.module('myApp.view1')
  .controller('View1Ctrl', [function() {
  var vc = this;
  vc.yolo = 'hey there';

  vc.setSelectedOrg = function(orgName) {
    vc.selectedOrgName = orgName;
    console.log("Selected Org Name called ", vc.selectedOrgName)
  }


}]);