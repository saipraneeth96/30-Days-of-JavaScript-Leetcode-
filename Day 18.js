/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function(fn, t) {
    // A variable to store the timeout ID.
    // This variable is "closed over" by the returned function,
    // so it persists across calls.
    let timerId;

    // Return a new function that encapsulates the debounce logic.
    return function(...args) {
        // When the debounced function is called, first clear any existing timer.
        // This prevents the previously scheduled function from running.
        clearTimeout(timerId);

        // Then, set a new timer. The original function `fn` will be called
        // after `t` milliseconds, but only if this timer is not cleared
        // by another call in the meantime.
        timerId = setTimeout(() => {
            // When the timer finally runs, execute the original function `fn`
            // with the arguments from the very last call.
            fn(...args);
        }, t);
    };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
