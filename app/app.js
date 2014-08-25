var chartify = angular.module('chartify', [
  'ngRoute'
])
  .controller('PatternController',['$scope',
  function($scope){
    $scope.chart= function(){
      console.log('chart clicked');
    };
}]);

chartify.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'pattern-text.html',
      controller: 'PatternController'
    })
    .when('/chart', {
      templateUrl: 'chart.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);


