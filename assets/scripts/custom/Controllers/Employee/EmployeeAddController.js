/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('EmployeeAddController', function ($scope, $routeParams,
        SubCategoryService, EmployeeService) {

    PopulateAllData();
    
    $scope.ListOfSuffixes = [];
    $scope.ListOfJobTitles = [];
    $scope.ListOfOfficeLocations = [];
    $scope.EmployeeSaveResult = '';
    $scope.ID = $routeParams.id;
    $scope.SavePerson = function () {        
        var sample = $scope.EmployeeData;
        var d = JSON.stringify(sample, null, 4);
//        alert(d);
//        console.log(d);
//        alert('Calling Service');

        EmployeeService.SaveEmployee(d, function (data, status, headers, config) {
            console.log(data.StatusMessage);
            $scope.EmployeeSaveResult = data.StatusMessage;
            $scope.$apply();
        }, function () {
            $scope.EmployeeSaveResult = 'FAILED';
            $scope.$apply();
        });
    };
    $scope.ClearPersonForm = function () {
        var per = CreatePersonObject();
        var emp = CreateEmployeeObject();
        $scope.Emp.Per = per;
        $scope.Emp.Emp = emp;
    };
    function CreateEmployeeObject() {
        var emp = new EmployeePerson();
        emp.ID = -1;
        emp.FirstName = '';
        emp.LastName = '';
        emp.MiddleName = '';
        emp.Email = '';
        emp.Suffix = -1;
        emp.isActive = 1;
        emp.isArchived = 0;
        emp.CreatedOn = new Date();
        emp.CreatedBy = -1;
        emp.LastModifiedOn = new Date();
        emp.LastModifiedBy = -1;
        emp.EmployeeID = -1;
        emp.JobTitleID = -1;
        emp.OfficeLocationID = -1;
        emp.PersonID = -1;
        emp.PhotoSrc = '';
        return emp;
    };
    function GetEmployeeData(id) {
        EmployeeService.GetEmployee(id, getEmployeeSuccess);        
    };    
    function getEmployeeSuccess(data) {        
        $scope.EmployeeData = ToEmployeePerson(data);          
        
//        var d = JSON.stringify($scope.EmployeeData, null, 4);
//            console.log("Employee Data: " + d);
        return $scope.EmployeeData;        
    };
    function getEmployeeFailed(data) {
        $scope.EmployeeData = 'Failed';
       
      
    };
    function PopulateAllData() {
        GetEmployeeData($routeParams.id);
        PopulateSuffixes();
        PopulateJobTitles();
        PopulateOfficeLocations();
    };
    function PopulateSuffixes() {
        SubCategoryService.GetNameSuffixes(function (data) {
//            var d = JSON.stringify(data, null, 4);
//            console.log("GetJobTitles: " + d);
            $scope.ListOfSuffixes = ToSubCategories(data);
        });
    };
    function PopulateJobTitles() {
        SubCategoryService.GetJobTitles(function (data) {
            $scope.ListOfJobTitles = ToSubCategories(data);
        });
    };
    function PopulateOfficeLocations() {
        SubCategoryService.GetOfficeLocations(function (data) {
//            var d = JSON.stringify(data, null, 4);
//            console.log("GetJobTitles: " + d);
            $scope.ListOfOfficeLocations = ToSubCategories(data);
        });
    };
    function getDate() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd
        }

        if (mm < 10) {
            mm = '0' + mm
        }

        today = mm + '/' + dd + '/' + yyyy;
        alert(today);
        return today;
    };
});


