/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let results = new Array(functions.length);  // To store results in order
        let completed = 0;  // Count of resolved promises
        let hasRejected = false; // To avoid multiple rejections

        functions.forEach((fn, index) => {
            try {
                fn()
                  .then(value => {
                      results[index] = value;  // Store result in correct order
                      completed++;
                      if (completed === functions.length) {
                          resolve(results); // Resolve when all completed
                      }
                  })
                  .catch(err => {
                      if (!hasRejected) { // Reject only once
                          hasRejected = true;
                          reject(err);
                      }
                  });
            } catch (err) {
                // Handle synchronous error in case fn() throws
                if (!hasRejected) {
                    hasRejected = true;
                    reject(err);
                }
            }
        });

        // Edge case: empty array
        if (functions.length === 0) {
            resolve([]);
        }
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
