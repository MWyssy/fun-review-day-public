function generateMultiples(multNum) {
    return function multiply(lengthOfList) {
        const result = [];
        if (lengthOfList < 1) return result;

        for (let i = 1; i <= lengthOfList; i++) {
            result.push(i * multNum);
        };
        return result;
    };
}

function secureFunc(passsword, func) {
    return function testPassword(passwordAttempt, ...args) {
        if (passwordAttempt === passsword) return func(...args);
        return 'Sorry your password is incorrect!';
    };
};

module.exports = { generateMultiples, secureFunc };
