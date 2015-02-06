/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('AdminController', function ($scope, $http, $routeParams, CategoryService, SubCategoryService, EmployeeService){
    PopulateCategories();


    $scope.AddSubCategory = AddSubCategory;
    $scope.ListOfCategories = [];
    $scope.SubCat = new SubCategory();
    $scope.Cat = new Category();
    $scope.SaveCategory1 = SaveSubCategory;
    $scope.SaveCategory = saveCategory;
     
    function AddSubCategory(){
        alert('I was clicked');
    };
    function SaveSubCategory(){
        $scope.SubCat.ID = -1;
        var data = JSON.stringify($scope.SubCat, null, 4);
        //alert(data);
        SubCategoryService.SaveSubCategory(data, successfulPostCB, failedPostCB);
    };
    function saveCategory(){
        $scope.Cat.ID = -1;
        var data = JSON.stringify($scope.Cat, null, 4);
        //alert(data);
        CategoryService.SaveCategory(data, successfulPostCB, failedPostCB);
    };
    function successfulPostCB(data, status, headers, config){
        $scope.AddResult = data;
    };
    function failedPostCB(data, status, headers, config){
        $scope.AddResult = 'Failed';
    };
    function PopulateCategories(){
        CategoryService.GetAllCategories(function(data){            
            $scope.ListOfCategories = ToCategories(data);            
        });
    };
    });
    
    
        



