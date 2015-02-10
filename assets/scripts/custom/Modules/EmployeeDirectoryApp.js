/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var app = angular.module('EmployeeDirectory', ["ngRoute"]);

app.value("Contact", Contact);
app.value("Employee", Employee);
app.value("Person", Person);
app.value("EmployeePerson", EmployeePerson);
app.value("SubCategory", SubCategory);
app.value("Category", Category);
app.value("EmployeeListModel", EmployeeListModel);

//app.config(['$routeProvider',
//  function($routeProvider) {
//    $routeProvider.
//      when('/addOrder', {
//        templateUrl: 'Add.html',
//        controller: 'EmployeeController'
//      }).
//      when('/showOrders', {
//        templateUrl: 'templates/show-orders.html',
//        controller: 'ShowOrdersController'
//      }).
//      otherwise({
//        redirectTo: '/addOrder'
//      });
//  }]);
app.config(function ($routeProvider, $locationProvider, $httpProvider) {
    
    $routeProvider
            .when("/", {
                templateUrl: "/Views/Employee/ListOfEmployees.html",
                controller: "EmployeeController"
            });
   
    $routeProvider.when("/Employee/Detail/:id", {
//                templateUrl: "EmployeeDetail.html",
                templateUrl: "/Views/Employee/Details.html",
                controller: "EmployeeEditController"
            });
            
    $routeProvider.when("/Employee/Edit/:id", {
                templateUrl: "/Views/Employee/Edit.html",
                controller: "EmployeeAddController"
            });
            
     $routeProvider.when("/Employee/Add/", {
                templateUrl: "/Views/Employee/New.html",
                controller: "EmployeeNewController"
            });
            
    $routeProvider.when("/Employee/Search/", {
                templateUrl: "/Views/Employee/Search.html",
                controller: "EmployeeSearchController"
            });
            
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
    
//    $httpProvider.defaults.headers.post['Accept'] = 'application/json, text/javascript';
//    $httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
//    $httpProvider.defaults.headers.post['Access-Control-Max-Age'] = '1728000';
//    $httpProvider.defaults.headers.common['Access-Control-Max-Age'] = '1728000';
//    $httpProvider.defaults.headers.common['Accept'] = 'application/json, text/javascript';
//    $httpProvider.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';
});


