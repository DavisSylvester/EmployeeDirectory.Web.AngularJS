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

app.config(function ($routeProvider, $locationProvider, $httpProvider) {
    
    $routeProvider
            .when("/", {
                templateUrl: "/",
                controller: "EmployeeController"
            });
            
    $routeProvider.when("/Employee/Detail/:id", {
                templateUrl: "EmployeeDetail.html",
                controller: "EmployeeController"
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