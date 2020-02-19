module.exports = function reverse (n) {
    const str = String(Math.abs(n));
    const reversedStr = str.split('').reverse().join('');
    return Number(reversedStr);
}
