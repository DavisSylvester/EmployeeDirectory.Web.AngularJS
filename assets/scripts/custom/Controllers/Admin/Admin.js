/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('AdminController', function ($scope, $http) {

    var api = 'http://localhost:7701/api/Products/GetProducts';

    $scope.Data = '';
    
    $http.get(api)
            .success(function (data) {
                $scope.ListOfProducts = ToProductItem(data);                
            })
            .error(function () {
                console.log('Error: ');
            });
});


