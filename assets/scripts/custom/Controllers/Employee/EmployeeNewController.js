/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

app.controller('EmployeeNewController', function ($scope, SubCategoryService, EmployeeService) {

    PopulateAllData();

    $scope.EmployeeData = CreateEmployeeObject();
    $scope.ListOfSuffixes = [];
    $scope.ListOfJobTitles = [];
    $scope.ListOfOfficeLocations = [];
    $scope.JB = $scope.EmployeeData.JobTitleID;
    
    //$scope.MyTest = $scope.Emp.FirstName;
    //$scope.EmployeeData = [];

    $scope.EmployeeSaveResult = '';
    $scope.SavePerson = function () {
        var sample = $scope.EmployeeData;
        var d = JSON.stringify(sample, null, 4);

        EmployeeService.SaveEmployee(d, function (data, status, headers, config) {

            $scope.EmployeeSaveResult = data.StatusMessage;
            $scope.$apply();
            $scope.ClearPersonForm();
        }, function () {
            $scope.EmployeeSaveResult = 'FAILED';
        });
    };

    $scope.ClearPersonForm = function () {
        var per = CreateEmployeeObject();
        $scope.EmployeeData = per;
        
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
        emp.PhotoSrc = 'blankPerson.jpg';
        
        return emp;
    };


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
//            var d = JSON.stringify($scope.ListOfJobTitles, null, 4);
//        alert(d);
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
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }

        today = mm + '/' + dd + '/' + yyyy;
        alert(today);
        return today;
    }
    ;

    function formatDate(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
    };

});
