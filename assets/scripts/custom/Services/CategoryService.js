/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

"use strict";

app.factory('CategoryService', function ($http) {
    var BASE_URL = 'http://localhost:7702/api';

    var factory = {};
    
    factory.GetAllCategories = function (returnData) {
        $http.get(FullURI('/Admin/Categories')).success(returnData);
    };
    factory.SaveCategory = function (data, successfulPostCB, failedPostCB) {
        var ACTION_URL = '/Admin/SaveCategory';
        post(FullURI(ACTION_URL), data, successfulPostCB, failedPostCB);       
    };
    function FullURI(actionUrl) {
        return BASE_URL + actionUrl;
    };
    function GetSubCategoryParameter(nameOrID) {
        switch (nameOrID.toLowerCase()) {
            case 'id':
                return 'catID';
                break;
            case 'name':
                return 'catName';
                break;
            default:
                return 'catID';
        }
    };
    function GetWebServicePath(nameOrID, value) {
        var paraType = GetSubCategoryParameter('Name');
        var _url = '/Admin/GetSubCategories?' + paraType + '=' + value;
        return _url;
    };

    return factory;
});






