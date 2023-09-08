var LFUCache = function (capacity) {
    this.map = new Map();
    this.capacity = capacity;
};
LFUCache.prototype.get = function (key) {
    if (!this.map.has(key)) return -1;
    const { value, count } = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, { value: value, count: count + 1 });
    return value;
};
LFUCache.prototype.put = function (key, value) {
    if (this.capacity === 0) return; // Edge case: Capacity is zero, do nothing
    // If the key is already in the cache, update its value and count
    if (this.map.has(key)) {
        const { count } = this.map.get(key);
        this.map.set(key, { value: value, count: count + 1 });
    } else {
        // If the cache is full, remove the least frequently used item
        if (this.map.size >= this.capacity) {
            let minCount = Infinity;
            let evictKey = null;
            for (const [key, { count }] of this.map.entries()) {
                if (count < minCount) {
                    minCount = count;
                    evictKey = key;
                }
            }
            this.map.delete(evictKey);
        }
        // Add the new key with a count of 1
        this.map.set(key, { value: value, count: 1 });
    }
};

/** 
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)()
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */



