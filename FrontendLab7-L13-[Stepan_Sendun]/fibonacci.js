var fibonacci = (function () {
    var cache = {};
    return function countingFoo(number) {
        if (number in cache) {
            return cache[number];
        } else {
            if (number === 0 || number === 1) {
                return number;
            } else {
                return cache[number] = countingFoo(number - 1) + countingFoo(number - 2);
            }
        }
    }

})();


module.exports = fibonacci;