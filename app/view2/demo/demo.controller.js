angular.module('myApp.demo')
  .controller('DemoCtrl', [function(){
    var dc = this;
    console.log(dc);
    dc.func = function(){
      console.log("called");
      dc.callback({value: dc.model});
    }
  }]);