var imb=angular.module('myApp',['ngRoute','ngStorage']);
var adminId=20371592;
imb.config( ['$routeProvider', function($routeProvider) {
  $routeProvider.when('/:auto', {
    templateUrl: 'auto.html'
  });
  $routeProvider.when('/:auto/:thread', {
      templateUrl: 'thread.html'
    });
  $routeProvider.when('/',{
    templateUrl: 'main.html'
  });
}]);
imb.controller('Navigation', function($scope, $http, $location, $sessionStorage,$routeParams,$route){
  $scope.Login=function(){
    VK.Auth.getLoginStatus(function(response){
      if(response.status=='unknown'||response.status=='not_authorized'){
        VK.Auth.login(function(responsed) {
          if (responsed.session.user.id==adminId){
              $sessionStorage.isAdmin=true;
              $route.reload();
          } else {
            alert("Вы не являетесь администратором");
          }
        });
      } else if (response.status=='connected'){
        VK.Auth.logout(function(response){
          $sessionStorage.isAdmin=false;
          $route.reload();
        });
      }
    });

  }
  $scope.links=[{
    name:'Автомобили',
    id:'auto',
    url:"#!auto"
  },{
    name:'Мода и стиль',
    id:'style',
    url:'#!style'
  },{
    name:'Спорт',
    id:'sport',
    url:'#!sport'
  },{
    name:'История',
    id:'history',
    url:'#!history'
  },{
    name:'Музыка',
    id:'music',
    url:'#!music'
  },{
    name:'Наука',
    id:'science',
    url:'#!science'
  }]

});
var isEmpty=function(a){
  if (a==""||(typeof(a)=="undefined")) {
    return true;
  } else {
    return false;
  }
}
VK.init({
  apiId: 6299729
});
