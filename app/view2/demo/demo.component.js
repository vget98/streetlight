angular.module('myApp.demo', [])
  .component('demo',{
    templateUrl:'view2/demo/demo.html',
    bindings: {
      points:'<',//< means 1 way binding
      callback: '&',// & means cb fn
      demoname: '@',//@ means expect string || can be interpolated
      model:'='//= means 2 way binding
    },
    controller: 'DemoCtrl',
    controllerAs: 'dc'//alias attached to $scope obj
  })




  //component takes obj