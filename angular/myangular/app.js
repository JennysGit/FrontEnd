var module = angular.module('ngRepeatTest', []);
       
       module.directive('myRequired', [function () {
           return {
               restrict: "A",
               require: ['ngModel', '^form'],
               link: function (scope, iElement, iAttrs, ctrls) {
                   var formCtrl = ctrls[1],
                           ngModelCtrl = ctrls[0];

                   iElement.addClass("required");
                   scope.$watch(function () {
                       return isValid(ngModelCtrl.$modelValue)
                   }, function (newValue) {
                       formCtrl.$setValidity("MYREQUIRED", newValue, ngModelCtrl);
                   });
               }
           };

           function isValid(value) {
               return !!value;
           }
       }]);

       module.controller('Ctrl', ['$scope', function ($scope) {
           $scope.vm = {persons: [
               {name: 'Jim'}
           ]};

           $scope.addNewLine = function () {
               $scope.vm.persons.push({});
           };
           $scope.deleteALine = function (person) {
               for (var index = 0; index < $scope.vm.persons.length; index++) {
                   if (person.name === $scope.vm.persons[index].name) {
                       $scope.vm.persons.splice(index, 1);
                       return;
                   }
               }
           };
       }]);