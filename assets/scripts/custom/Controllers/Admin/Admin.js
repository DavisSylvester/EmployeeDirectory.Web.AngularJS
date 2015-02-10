/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('AdminController', function ($scope, $http, $routeParams, CategoryService, SubCategoryService, EmployeeService) {

    OnPageLoad();

    $scope.AddSubCategory = AddSubCategory;
    $scope.ListOfCategories = [];
    $scope.SubCat = new SubCategory();
    $scope.Cat = new Category();
    $scope.SaveCategory1 = SaveSubCategory;
    $scope.SaveCategory = saveCategory;
    $scope.CheckCategoryExist = DoesCategoryExist;
    $scope.CheckResult = '';
    $scope.jj = test;
//    $scope.CheckMe = AddCategoryOnChange;
    SetDefaults();
    function DoesCategoryExist() {
        var data = $scope.test;

        CategoryService.CategoryExists(data, function (data2, status, headers, config) {
            $scope.Answer = data2;
        }, failedPostCB);
    }
    ;
    function AddSubCategory() {
        alert('I was clicked');
    }
    ;
    function SaveSubCategory() {
        $scope.SubCat.ID = -1;
        var data = JSON.stringify($scope.SubCat, null, 4);
        //alert(data);
        SubCategoryService.SaveSubCategory(data, successfulPostCB, failedPostCB);
    }
    ;
    function saveCategory() {
        $scope.Cat.ID = -1;
        var data = JSON.stringify($scope.Cat, null, 4);
        //alert(data);
        CategoryService.SaveCategory(data, successfulPostCB, failedPostCB);
    }
    ;
    function successfulPostCB(data, status, headers, config) {
        $scope.AddResult = data;
        $scope.CheckResult  = data;
        $scope.$apply();
        $('.Hide').css('display', 'block');
        
    }
    ;
    function failedPostCB(data, status, headers, config) {
        $scope.AddResult = 'Failed';
    }
    ;
    function PopulateCategories() {
        CategoryService.GetAllCategories(function (data) {
            $scope.ListOfCategories = ToCategories(data);
        });
    }
    ;
    function OnPageLoad() {
        AddEventHandlers();
        PopulateCategories();
    }
    ;
    function AddEventHandlers() {
        //AddCategoryOnChange();
        AddCategoryLoseFocus();
    }
    ;
//    function AddCategoryOnChange() {
//
////            var newCategoryName = $('.categoryNameInput').val();
//
//        //alert(newCategoryName);
//        CategoryService.CategoryExists($scope.Cat.Name,
//                function (data) {
//
//                    $scope.CheckResult = data;
//                    $scope.apply();
//                },
//                function (data) {
//                    $scope.CheckResult = data;
//                });
//    }
//    ;
    function AddCategoryLoseFocus() {
        $('.categoryNameInput').change(function () {
          $scope.jj($scope.Cat.Name);
        });

    };
    function SetDefaults(){
        $scope.Cat.Name = '';
    };
    function test(data){
        CategoryService.CategoryExists(data,
                    function (data) {
                        $scope.CheckResult = data.Result;
                        if($scope.CheckResult === "False"){                        
                        $('.categoryNameInput').css("background", "#FFF");
                        $('.SubmitButton').removeAttr('disabled');
                        $('.categoryNameInput').css("border", "1px solid #000;");
                        $('.errorMessage').html('');
                        
                    }else{
                        $('.categoryNameInput').css("border", "1px dashed yellow");
                        $('.categoryNameInput').css("background", "#FF3333");
                        $('.SubmitButton').attr('disabled','disabled');
                        $('.errorMessage').html($('.categoryNameInput').val() + ", has already been added!");
                        $('.Hide').css('display', 'block');
                    }
                        $scope.$apply();
                        

                    },
                    function (data) {
                        $scope.CheckResult = data;
                        $scope.$apply();
                    });
    };
});






