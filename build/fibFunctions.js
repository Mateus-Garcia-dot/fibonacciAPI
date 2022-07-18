"use strict";
function fib(position, memo = {}) {
    if (position in memo)
        return memo[position];
    if (position === 0)
        return 0;
    if (position === 1)
        return 1;
    memo[position] = fib(position - 1, memo) + fib(position - 2, memo);
    return memo[position];
}
// returns a null if overflowed
function fibSequence(position) {
    let memo = {};
    let sequence = [];
    let num;
    for (let i = 0; i <= position; i++) {
        num = fib(i, memo);
        if (!isFinite(num)) {
            sequence.push(null);
            break;
        }
        sequence.push(num);
    }
    return sequence;
}
module.exports = { fib, fibSequence };
