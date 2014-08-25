var chartify = angular.module('chartify', [
  'ngRoute'
])
  .controller('PatternController',['$scope', '$location',
  function($scope, $location){
    $scope.chart= function(){
      $location.path('/chart');
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


