/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    // Our "notebook" to store results. It's an empty object for now.
    var cache = {};
     /* We also need to keep track of how many times the *original* function was called.*/
    let callCount = 0;

    return function(...args) {
        // 1. Create a unique key from the inputs.
        const key = JSON.stringify(args);

        // 2. Check the notebook (cache) for this key.
        if(key in cache){
            // Found it! Return the cached result without calling the original function.
            return cache[key];
        } else {
            // Increment the call count because we're about to do the real work.
            callCount++;

            // Call the original function with the given arguments.
            var result = fn(...args);
            // Write the new result in our notebook for the future.
            cache[key] = result;

            return result;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */
