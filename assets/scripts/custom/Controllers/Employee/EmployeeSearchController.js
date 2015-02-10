/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('EmployeeSearchController', function ($scope, SubCategoryService, EmployeeService) {

    PopulateAllData();
    
    $scope.FirstName = '';
    $scope.LastName = '';
    $scope.OfficeID = '';
    $scope.JobID = '';
    $scope.isActive = true;
    $scope.isArchived = false;
    $scope.ShowGrid = false;
    
    $scope.CurrentEmployeeList = [];
    $scope.QueryEmployees = FindEmployees;
    
//    function GetEmployeeData() {
//        EmployeeService.GetAllEmployees(getEmployeeSuccess);        
//    };
    
//    function getEmployeeSuccess(data) {
//        
//            $scope.EmployeeData = ToEmployeePerson(data);
//            $scope.CurrentEmployeeList = $scope.EmployeeData;
////            var d = JSON.stringify($scope.CurrentEmployeeList, null, 4);
////            console.log("Employees: " + d);
//            SearchCurrentEmployeeList($scope.FirstName, $scope.LastName, $scope.OfficeID, $scope.JobID, $scope.isActive, $scope.isArchived);
//        
//        
//    }
//    ;
    
    function FindEmployees(){
        var query = new QuerySearchParams($scope.FirstName, $scope.LastName, $scope.JobID, $scope.OfficeID, $scope.isActive, $scope.isArchived);
        var d = JSON.stringify(query, null, 4);
        
         EmployeeService.SearchEmployee(d, function (data, status, headers, config) {
            $scope.ActiveResult = ToEmployeePerson(data);
            $scope.ShowGrid = true;
            $scope.$apply();
//            var dd = JSON.stringify($scope.ActiveResult, null, 4);
            
        }, function () {
            $scope.EmployeeSaveResult = 'FAILED';
            $scope.$apply();
        });

    };
    
   
    function PopulateAllData() {
        
        PopulateJobTitles();
        PopulateOfficeLocations();
    }
    ;
    
    function PopulateJobTitles() {
        SubCategoryService.GetJobTitles(function (data) {
            $scope.ListOfJobTitles = ToSubCategories(data);
        });
    }
    ;
    function PopulateOfficeLocations() {
        SubCategoryService.GetOfficeLocations(function (data) {
//            var d = JSON.stringify(data, null, 4);
//            console.log("GetJobTitles: " + d);
            $scope.ListOfOfficeLocations = ToSubCategories(data);
        });
    }
    ;
    
});