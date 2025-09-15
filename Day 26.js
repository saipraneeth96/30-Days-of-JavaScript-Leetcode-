/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    if(n == 0){
        return arr;
    }
    const result = [];

    for(const element of arr){
        if(Array.isArray(element) && n > 0){
            result.push(...flat(element, n-1));
        }
        else{
            result.push(element);
        }
    }

    return result;
};
