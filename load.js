imb.controller('Load', function($scope,$http,$routeParams,$sessionStorage,$route){
  $scope.isPosted=false;
  $scope.Admin=function(){
    if ($sessionStorage.isAdmin) return true;
    else return false;
  }
  $scope.isEmpty1=isEmpty;
  $scope.isCreate=false;
  $scope.links.forEach(function(item,i){
    if (item.id==$routeParams.auto){
      $scope.Thread=item.name;
    }
  });
  $scope.curThread=$routeParams.auto;
  var board='\''+$routeParams.auto+'\'';
$http({method: 'GET', url: 'https://xchget.azurewebsites.net/api/HttpTriggerJS1?code=aWwDao5H20yoiJ0LePScxqh53WhNXkaTPWe228KoZulVE9Mxw/elcA==', params:{'board':board ,'num':0}}).
          then(function onSuccess(response) {
              $scope.thrds=response.data;
})
$scope.show =function(){
    $scope.isCreate=!$scope.isCreate;
}
$scope.createThread=function(value,text){
  $scope.isPosted=true;
  var time= new Date();
  var date=time.getDate()+'.'+(time.getMonth()+1)+'.'+time.getFullYear();
  var answer ={
    board: value,
    date: date,
    msg: text
  }
  $http.post('https://xchget.azurewebsites.net/api/HttpTriggerJS2?code=j9WVNZ4DU/UuLa9l1ayxCfJoMptwAGDifo3qs5gDobITy33dD5cT9Q==', answer).then(function success (response) {
                    $scope.isCreate=false;
                    $route.reload();
                });
}
  $scope.delThr=function(thr){
    var config={
      params:{'type':'msg' ,'num':thr, 'msg':msg}
    };
    $http.delete('https://xchget.azurewebsites.net/api/getMsg?code=kd5NKDIndLR4czCMcScHf7063p8OxFNwPy8al7uA5izFsIi0yVpz1w==', config).
              then(function onSuccess(response) {
                  console.log("delete successful");
                  $route.reload();
    });
  }
  $scope.delMsg=function(thr,msg){
    var config={
      params:{'type':'msg' ,'num':thr, 'msg':msg}
    };
    $http.delete('https://xchget.azurewebsites.net/api/getMsg?code=kd5NKDIndLR4czCMcScHf7063p8OxFNwPy8al7uA5izFsIi0yVpz1w==',config).
              then(function onSuccess(response) {
                  console.log("delete successful");
                  $route.reload();
    });
  }
});
