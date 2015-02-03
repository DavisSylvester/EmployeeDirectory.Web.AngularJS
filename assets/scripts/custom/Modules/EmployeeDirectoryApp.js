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

app.config(function ($routeProvider) {
    $routeProvider
            .when("/", {
                templateUrl: "Views/Products/ProductList.html",
                controller: "ProductsController"
            })
            .when("/Cart", {
                templateUrl: "Views/Cart/cart.html",
                controller: "CartController"
            });

});