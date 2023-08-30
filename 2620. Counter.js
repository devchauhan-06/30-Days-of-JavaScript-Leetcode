/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = n =>{
    let count = n , i=-1
    return () => count + ++i;
}

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */