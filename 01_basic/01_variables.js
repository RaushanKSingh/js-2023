const accountId = 12345;
let accountEmail = "raushan.kr009@gmail.com";
var accountPassword = "11111"; /* prefer not to use var
beacuse of issue in block space and functional scope  */

accountCity ="Chennai"; // not a good practice to assign variable without type
let accountState;

// accountId = 3; // not allowed

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);