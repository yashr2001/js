const accountId = 12345
let accountEmail = "yash@email.com"
var accountPassword = "56789"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //this is not allowed

accountEmail = "y@y.com"
accountPassword = "56565656"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);