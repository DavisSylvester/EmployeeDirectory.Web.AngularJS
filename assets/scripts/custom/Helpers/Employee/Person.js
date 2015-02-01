/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Person = function(id, firstName, middleName, lastName, email, suffix, isActive, isArchived){
    this.ID = id;
    this.FirstName = firstName;
    this.MiddleName = middleName;
    this.LastName = lastName;
    this.Email = email;
    this.Suffix = suffix;
    this.isActive = isActive;
    this.isArchived = isArchived;
};
