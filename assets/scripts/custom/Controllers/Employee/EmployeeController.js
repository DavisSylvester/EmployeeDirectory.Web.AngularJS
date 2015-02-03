/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
app.controller('EmployeeController', function ($scope, $http, SubCategoryService, EmployeeService) {
   
    PopulateAllData();
    
    $scope.EmployeeList = [];
    $scope.JobTitleList = [];
    $scope.LocationList = [];
    $scope.TotalEmployees = 0;
    $scope.TotalSubCategories = $scope.JobTitleList.length;
    $scope.TotalJobTitles = $scope.JobTitleList.length;


    function PopulateAllData(){
        PopulateJobTitles();
        PopulateEmployees();
        PopulateOfficeLocations();
    };  
    function PopulateJobTitles(){
        SubCategoryService.GetJobTitles(function(data){            
            $scope.JobTitleList = ToSubCategories(data);
            
        });
    };
    function PopulateEmployees(){
        EmployeeService.GetAllEmployees(function(data){            
            $scope.EmployeeList = ToEmployeePerson(data);
            $scope.TotalEmployees = $scope.EmployeeList.length;
            
//            var d = JSON.stringify(data, null, 4);
//            console.log("GetJobTitles: " + d);
        });
    };
    function PopulateOfficeLocations(){
        SubCategoryService.GetOfficeLocations(function(data){   
//            var d = JSON.stringify(data, null, 4);
//            console.log("GetJobTitles: " + d);
            $scope.LocationList = ToSubCategories(data);
        });
    };    

});


