function fib(position, memo = {}){
    if ( position in memo ) return memo[position]
    if ( position === 0 ) return 0
    if ( position === 1 ) return 1
    memo[position] = fib(position-1, memo) + fib(position-2, memo)
    return memo[position]
}

function fibSequence(position){
    let memo = {}
    let sequence = []
    for (let i = 0; i < position; i++) {
        sequence.push(fib(i,memo))
    }
    return sequence
}
