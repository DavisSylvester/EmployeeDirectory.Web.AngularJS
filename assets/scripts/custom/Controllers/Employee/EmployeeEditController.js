/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('EmployeeEditController', function ($scope, $http, $routeParams,
        SubCategoryService, EmployeeService) {

    PopulateAllData();

    $scope.Emp = CreateEmployeeObject();    
    $scope.ListOfSuffixes = [];
    $scope.ListOfJobTitles = [];
    $scope.ListOfOfficeLocations = [];
    $scope.EmployeeData = [];
    $scope.EmployeeSaveResult = '';
    $scope.SavePerson = function () {
        var sample = $scope.Emp;

        var d = JSON.stringify(sample, null, 4);
//        alert(d);
//        console.log(d);
//        alert('Calling Service');
        
        EmployeeService.SaveEmployee(d, function(data, status, headers, config){
   
            $scope.EmployeeSaveResult = 'This is the Return Data: ' + data + status + headers + config;                    
        }, function(){
            $scope.EmployeeSaveResult = 'FAILED';
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
    }
    ;

    function GetEmployeeData() {
        EmployeeService.GetEmployee(function (data, id) {
//            var d = JSON.stringify(data, null, 4);
//            console.log("Employee Data: " + d);
            $scope.EmployeeData = ToEmployeePerson(data);
        });
    }
    ;

    function PopulateAllData() {
        PopulateSuffixes();
        PopulateJobTitles();
        PopulateOfficeLocations();
    }
    ;

    function PopulateSuffixes() {
        SubCategoryService.GetNameSuffixes(function (data) {
//            var d = JSON.stringify(data, null, 4);
//            console.log("GetJobTitles: " + d);
            $scope.ListOfSuffixes = ToSubCategories(data);
        });
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
    }
    ;

});