const palindromes = function (string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const clean = string
                .toLowerCase()
                .split('')
                .filter(character => alphanumerical.includes(character))
                .join('');


    const reversed = clean.split('').reverse().join('');

    return clean === reversed;
};

// Do not edit below this line
module.exports = palindromes;
