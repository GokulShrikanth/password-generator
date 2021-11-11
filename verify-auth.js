function verify(authToken){
let key = "Bearer testtoken";
    if(authToken == key)
        return true
    return false;
}

module.exports = verify;