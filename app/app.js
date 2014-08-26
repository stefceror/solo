var chartify = angular.module('chartify', [
  'ngRoute',
  'chartify.pattern'
])
  .controller('PatternController',
  function($scope, $location, chartifyPattern){
    var createChart = chartifyPattern.chartifyPattern;
    var resetChart = chartifyPattern.resetChart;
    $scope.chart= function(){
      resetChart();
      createChart($scope.pattern);
      $location.path('/chart');
    };
})
  .controller('ChartController',
    function($scope, chartifyPattern){
      var symbols = {
    k: ' ',
    p: '\xB7'
  };
      $scope.rows = chartifyPattern.chartSymbols; //[
      //   [symbols.k, symbols.k, symbols.p, symbols.p, symbols.k, symbols.k, symbols.p, symbols.p],
      //   [symbols.k, symbols.k, symbols.p, symbols.p, symbols.k, symbols.k, symbols.p, symbols.p],
      //   [symbols.k, symbols.k, symbols.p, symbols.p, symbols.k, symbols.k, symbols.p, symbols.p],
      //   [symbols.k, symbols.k, symbols.p, symbols.p, symbols.k, symbols.k, symbols.p, symbols.p]
      // ];
  });

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


