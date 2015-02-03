/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


app.directive('employeeSummary', function (SubCategoryService) {
    return {
        restrict: "EA",
        scope: {
            model: '=',
            jobTitleList: '=',
            locationList: '=',
            showJobTitle: '&',
            showofficelocation: '&'

                    // products: '=' // Passes the $scope.Products Object
                    //itemInCart: '=' // Passes a Scope Object
                    //addToCart: '&' // Passes a Scope Function

        },
        link: function (scope, element, attrs) {

        },
        templateUrl: 'Views/Employee/employeeSummary.html',
        controller: function ($scope, SubCategoryService) {
          
        }


    };
});