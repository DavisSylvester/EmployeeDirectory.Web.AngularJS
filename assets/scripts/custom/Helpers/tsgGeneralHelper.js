/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

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
