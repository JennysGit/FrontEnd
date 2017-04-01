var myApp = angular.module('hello', ['ngRoute']);

myApp.controller('HelloController', function(Users) {
    alert("ok")
    console.log(location);
});

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/hello', {
        template: '<h3>hello page!</h3>',
        controller: 'HelloController'
    }).when('/about', {
        //template: '<h3>about page!</h3>'
        templateUrl: 'about.html'
    }).otherwise({
        redirectTo: '/hello'
    })
}]);


myApp.factory('Users', ['$http', function($http) {
    var url = 'server.json';
    var getAllUsers = function() {
        return $http({
            method: 'get',
            url: url
        })
    };

    return {
      events: function(){
        return getAllUsers();
      }
    }
}])


