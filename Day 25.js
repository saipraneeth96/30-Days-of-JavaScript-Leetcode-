/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    // Use an object as a hash map for efficient lookups.
    const merged = {};

    // Add all items from the first array to the map.
    for(const obj of arr1){
        merged[obj.id] = obj;
    }

    // Iterate through the second array.
    for(const obj of arr2){
        // If an object with the same id already exists, merge their properties.
        // Otherwise, add the new object to the map.
        merged[obj.id] = { ...merged[obj.id], ...obj };
    }

    // Convert the map's values back to an array.
    const joinedArray = Object.values(merged);

    // Sort the final array based on the id in ascending order.
    joinedArray.sort((a, b) => a.id - b.id);

    return joinedArray;
};
