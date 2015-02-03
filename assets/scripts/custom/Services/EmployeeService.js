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
    };
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

