/**
 * A class that stores key-value pairs with an expiration time.
 */
var TimeLimitedCache = function() {
    // Use a Map to store the cache. The key is the user-provided key,
    // and the value is an object containing the user's value and the timer ID.
    this.cache = new Map();
};

/** * Sets a key-value pair in the cache with a specified duration.
 * @param {number} key The key to set.
 * @param {number} value The value to associate with the key.
 * @param {number} duration The time in milliseconds until the key expires.
 * @return {boolean} Returns true if an un-expired key already existed, otherwise false.
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    // Check if the key already exists and has not expired.
    const keyExists = this.cache.has(key);

    // If the key exists, we need to clear its existing expiration timer
    // because we are about to overwrite it with a new value and duration.
    if (keyExists) {
        const existingEntry = this.cache.get(key);
        clearTimeout(existingEntry.timer);
    }

    // Set a new timer. When the timer completes, it will delete the key
    // from the cache, effectively "expiring" it.
    const timer = setTimeout(() => {
        this.cache.delete(key);
    }, duration);

    // Store the value and the timer ID in the cache.
    this.cache.set(key, { value: value, timer: timer });

    // Return whether the key already existed.
    return keyExists;
};

/** * Retrieves the value associated with a key if it has not expired.
 * @param {number} key The key to retrieve.
 * @return {number} The value associated with the key, or -1 if the key doesn't exist or has expired.
 */
TimeLimitedCache.prototype.get = function(key) {
    // If the key exists in our cache, it means its timer has not yet run.
    if (this.cache.has(key)) {
        return this.cache.get(key).value;
    }
    // If the key is not in the cache, it either was never set or has expired and been deleted.
    return -1;
};

/** * Counts the number of un-expired keys in the cache.
 * @return {number} The number of active keys.
 */
TimeLimitedCache.prototype.count = function() {
    // The number of un-expired keys is simply the current size of the map,
    // as expired keys are actively removed by their timers.
    return this.cache.size;
};

/**
 * Example Usage:
 * const timeLimitedCache = new TimeLimitedCache()
 * console.log(timeLimitedCache.set(1, 42, 100)); // false
 * setTimeout(() => console.log(timeLimitedCache.get(1)), 50); // 42
 * setTimeout(() => console.log(timeLimitedCache.count()), 50); // 1
 * setTimeout(() => console.log(timeLimitedCache.get(1)), 150); // -1
 */
