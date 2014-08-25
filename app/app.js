var chartify = angular.module('chartify', [
  'ngRoute'
])
  .controller('PatternController',['$scope', '$location',
  function($scope, $location){
    $scope.chart= function(){
      $location.path('/chart');
    };
}])
  .controller('ChartController', ['$scope', 
    function($scope){
      $scope.rows = [
        ['k', 'k', 'p', 'p'],
        ['k', 'k', 'p', 'p']
      ];
  }]);

chartify.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'pattern-text.html',
      controller: 'PatternController'
    })
    .when('/chart', {
      templateUrl: 'chart.html',
      controller: 'ChartController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);


