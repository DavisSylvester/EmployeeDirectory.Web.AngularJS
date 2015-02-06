/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function ToSubCategories(data) {
//    var d = JSON.stringify(data, null, 4);
//    console.log("SubCategories: " + d);
    var result = [];
    for (var i = 0; i < data.length; i++) {
        var temp = new SubCategory(
                data[i].ID,                               
                data[i].CategoryID,
                data[i].Name, 
                data[i].Code,
                data[i].ShortDescription,
                data[i].LongDescription
                );       
        result.push(temp);
    }
    return result;
}
function ToCategories(data) {
//    var d = JSON.stringify(data, null, 4);
//    console.log("SubCategories: " + d);
    var result = [];
    for (var i = 0; i < data.length; i++) {
        var temp = new Category(
                data[i].ID,                               
                data[i].Name
                );       
        result.push(temp);
    }
    return result;
}