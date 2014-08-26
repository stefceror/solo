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
      var symbols = {
        k: ' ',
        p: '\xB7'
      }
      $scope.rows = [
        [symbols.k, symbols.k, symbols.p, symbols.p, symbols.k, symbols.k, symbols.p, symbols.p],
        [symbols.k, symbols.k, symbols.p, symbols.p, symbols.k, symbols.k, symbols.p, symbols.p],
        [symbols.k, symbols.k, symbols.p, symbols.p, symbols.k, symbols.k, symbols.p, symbols.p],
        [symbols.k, symbols.k, symbols.p, symbols.p, symbols.k, symbols.k, symbols.p, symbols.p]
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


