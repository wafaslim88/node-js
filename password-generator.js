const generatePassword = require('generate-password');
function generateRandomPassword() {
   
    const password = generatePassword.generate({
        length : 4,
        uppercase: true,
        numbers : false
    });
    return password;
};
console.log('password');
