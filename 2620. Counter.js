/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter = n =>{
    let counter = n , i=-1
    return () => counter + ++i;
}

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */