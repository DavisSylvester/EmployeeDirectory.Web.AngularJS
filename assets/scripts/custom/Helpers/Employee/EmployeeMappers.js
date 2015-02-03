/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function ToEmployeePerson(data) {
    var d = JSON.stringify(data, null, 4);
    console.log("This is your Data: " + d);
    var result = [];
    for (var i = 0; i < data.length; i++) {
        var temp = new EmployeePerson(
                data[i].ID,
                data[i].FirstName,                
                data[i].LastName,
                data[i].MiddleName,
                data[i].Email,
                data[i].Suffix,
                data[i].isActive,
                data[i].isArchived,
                data[i].EmployeeID,
                data[i].JobTitle,
                data[i].OfficeLocation,
                data[i].PersonID,
                data[i].CreatedOn,
                data[i].CreatedBy,
                data[i].LastModifiedOn,
                data[i].LastModifiedBy,
                data[i].PhotoSrc,                
                data[i].JobTitleName,
                data[i].OfficeLocationName
                );
        
        result.push(temp);
    }
    return result;
}
