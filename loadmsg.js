imb.controller('loadmsg', function($scope,$http,$routeParams, $route,$sessionStorage){
  $scope.isPost=false;
  $scope.Admin=function(){
    if ($sessionStorage.isAdmin) return true;
    else return false;
  }
  $scope.isEmpty1=isEmpty;
  var num=$routeParams.thread;
  $http({method: 'GET', url: 'https://xchget.azurewebsites.net/api/HttpTriggerJS1?code=aWwDao5H20yoiJ0LePScxqh53WhNXkaTPWe228KoZulVE9Mxw/elcA==', params:{'board':'', 'num':num}}).
            then(function onSuccess(response) {
                $scope.thred=response.data[0];
  })
  $scope.sendMessage = function(text){
    $scope.isPost=true;
    var time= new Date();
    var date=time.getDate()+'.'+(time.getMonth()+1)+'.'+time.getFullYear();
    var stime=time.getHours()+':'+time.getMinutes()+':'+time.getSeconds();
    var answer ={
      num: num,
      date: date,
      time: stime,
      text: text
    }
    $http.post('https://xchget.azurewebsites.net/api/setMsg?code=KUihkH3TrhIVW4RKxx8orsAwKmOruIjoTJMYu1GnPrtarH0RH36Lrg==', answer).then(function success (response) {
                        $route.reload();
                  });
  }
  $scope.delMsg=function(thr,msg){
    $http({method: 'GET', url: 'https://xchget.azurewebsites.net/api/getMsg?code=kd5NKDIndLR4czCMcScHf7063p8OxFNwPy8al7uA5izFsIi0yVpz1w==', params:{'type':'msg' ,'num':thr, 'msg':msg}}).
              then(function onSuccess(response) {
                  console.log("delete successful");
                    $route.reload();
    })
  }
});
