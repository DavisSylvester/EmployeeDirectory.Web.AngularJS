/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";

app.factory('EmployeeService', function ($http) {
    var BASE_URL = 'http://localhost:7702/api';

    var factory = {};

    factory.GetAllEmployees = function (returnData) {
        $http.get(FullURI('/Employee/GetEmployees')).success(returnData);
    };

    factory.GetEmployee = function (returnData, id) {
        var ACTION_URL = '/Employee/GetEmployee/' + id;
        $http.get(FullURI(ACTION_URL)).success(returnData);
    };

    factory.SaveEmployee = function (data, successfulPostCB, failedPostCB) {
        var ACTION_URL = '/Employee/SaveEmployee';

        $.ajax({
            type: "POST",
            url: FullURI(ACTION_URL),
            data: data,
            contentType: "text/json",
            accept: "application/json; charset=utf-8",
            success: successfulPostCB,
            error: failedPostCB,
            dataType: "json"
        });

        function post(uri, data, successfulCB, failedCB) {
            var result = $.ajax({
                type: "POST",
                url: uri,
                data: data,
                contentType: "text/json",
                accept: "application/json; charset=utf-8",
                success: successfulCB,
                error: failedCB,
                dataType: "json"
            });
            return result;
        }
        ;


//alert("Starting angular Call");
//        $http.defaults.headers.post["Content-Type"] = "application/json";
//        alert($http.defaults.headers.post["Content-Type"]);
//        $http.post(FullURI(ACTION_URL), data).success(successfulPostCB).error(failedPostCB);
    };

//    factory.GetJobTitles = function (returnData) {
//        $http.get(FullURI(GetWebServicePath('Name', 'JobTitles'))).success(returnData);
//    };
//
//    factory.GetOfficeLocations = function (returnData) {
//        $http.get(FullURI(GetWebServicePath('Name', 'OfficeLocation'))).success(returnData);
//    };
//
//    factory.GetNameSuffixes = function (returnData) {
//        $http.get(FullURI(GetWebServicePath('Name', 'NameSuffix'))).success(returnData);
//    };
//
//    factory.GetCommunicationTypes = function (returnData) {
//        $http.get(FullURI(GetWebServicePath('Name', 'CommunicationTypes'))).success(returnData);
//    };
//
    function FullURI(actionUrl) {
        return BASE_URL + actionUrl;
    }
    ;
//    function GetSubCategoryParameter(nameOrID) {
//        switch (nameOrID.toLowerCase()) {
//            case 'id':
//                return 'catID';
//                break;
//            case 'name':
//                return 'catName';
//                break;
//            default:
//                return 'catID';
//        }
//    };
//    function GetWebServicePath(nameOrID, value) {
//        var paraType = GetSubCategoryParameter('Name');
//        var _url = '/Admin/GetSubCategories?' + paraType + '=' + value;
//        return _url;
//    };

    return factory;
});

