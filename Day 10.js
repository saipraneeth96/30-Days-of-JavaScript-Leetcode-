/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;
    let result;
    return function(...args){

        if(called == false){
            called = true;
            result = fn(...args);
            return result;
        }
        return undefined;
    }
};

/*Closure: The returned function must "remember" whether it's been called already. Typically, this is done using a variable (called) inside the once function's scope.

Wrapper Function: The returned function wraps the behavior of the original function but manages its invocation count.
 */
/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
