"use strict";
var StatusResponse;
(function (StatusResponse) {
    StatusResponse["OK"] = "Ok";
    StatusResponse["ERROR"] = "Error";
    StatusResponse["NOT_FOUND"] = "No encontrado";
})(StatusResponse || (StatusResponse = {}));
const statusR = StatusResponse.NOT_FOUND;
console.log(statusR);
console.log(StatusResponse);
