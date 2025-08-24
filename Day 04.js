/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const original = init;
    let val1 = init;
    return obj1 = {
        increment: function(){
            val1++;
            return val1;
        },
        decrement: function(){
            val1--;
            return val1;
        },
        reset: function(){
            val1 = original;
            return val1;
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
