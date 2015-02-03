/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var EmployeePerson = function(
        id, firstName, lastName, middleName, email, suffix, isActive, isArchived, employeeID, jobTitleID, officeLocationID, personID,
        createdOn, createdBy,lastModifiedOn, lastModifiedBy, photoSrc, jobTitleName, officeLocationName){
    this.ID = id;
    this.FirstName = firstName;    
    this.LastName = lastName;
    this.MiddleName = middleName;
    this.Email = email;
    this.Suffix = suffix;
    this.isActive = isActive;
    this.isArchived = isArchived;
    this.EmployeeID = employeeID;
    this.JobTitleID = jobTitleID;
    this.OfficeLocationID = officeLocationID;
    this.PersonID = personID;
    this.CreatedOn = createdOn;
    this.CreatedBy = createdBy;
    this.LastModifiedOn = lastModifiedOn;
    this.LastModifiedBy = lastModifiedBy;
    this.PhotoSrc = photoSrc;
    this.JobTitleName = jobTitleName;
    this.OfficeLocationName = officeLocationName;
    this.FullName = firstName + ' ' + lastName;
};