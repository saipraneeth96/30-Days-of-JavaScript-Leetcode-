/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    // Use the reduce method to iterate over the array and build the grouped object.
    // The accumulator 'acc' starts as an empty
    return this.reduce((acc, item) => {
        // For each item in the array, call the provided function 'fn' to get the key.
        const key = fn(item);
        // Check if the key already exists in our accumulator object.
        // If it doesn't, initialize it with an empty array.
        if(!acc[key]){
            acc[key] = [];
        }
        // Push the current item into the array associated with its key.
        acc[key].push(item);
        // Return the accumulator for the next iteration.
        return acc;
    }, {});
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
