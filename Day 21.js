/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    var chunk = [];

    for(let i = 0; i < arr.length; i = i + size){
        chunk.push(arr.slice(i, i + size));
    }

    return chunk;
};
