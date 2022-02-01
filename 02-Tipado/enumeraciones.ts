enum StatusResponse{
    OK = 'Ok',
    ERROR = 'Error',
    NOT_FOUND = 'No encontrado'
}

const statusR: StatusResponse = StatusResponse.NOT_FOUND

console.log(statusR)
console.log(StatusResponse)