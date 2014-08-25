var chartify = angular.module('chartify', [
  'ngRoute'
]);

chartify.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'pattern-text.html'
    })
    .when('/chart', {
      templateUrl: 'chart.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);