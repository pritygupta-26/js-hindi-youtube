const accountId = 144553
let accountEmail = "demo@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState ;

// accountId = 2 //  not allowed

accountEmail = "hans@ds.com"
accountPassword = "21212121"
accountCity = "bengaluru"


console.log(accountId);

/*
Prefer not to usr var because of issues in functional scope and block scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);