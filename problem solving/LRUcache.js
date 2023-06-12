// var LRUCache = function (capacity) {
//     this.capacity = capacity;
//     this.map = new Map();
// };
// che.prototype.get = function (key) {
//     if (!this.map.has(key)) return -1;
//     const value = this.map.get(key);
//     this.map.delete(key);
//     this.map.set(key, value)
//     return this.map.get(key);
// };
// LRUCache.prototype.put = function (key, value) {
//     if (this.map.has(key)) this.map.delete(key);
//     this.map.set(key, value);
//     if (this.map.size > this.capacity) {
//         this.map.delete(this.map.keys().next().value);
//     }
// };

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
class LRUCache {

    constructor(max=3) {
        this.max = max;
        this.map = new Map();
    }

    get(key) {

        let item=this.map.get(key);
        if (item) {
            this.map.delete(key);
            this.map.set(key, item);
        }

        return item;

    }
    set(key, value) {
        if (this.map.has(key)) this.map.delete(key);
        else if (this.map.size === this.max) {
            this.map.delete(this.map.keys().next().value);
        }

        this.map.set(key, value);
    }
}


const LruAns = new LRUCache(3);
LruAns.set("name", "prashant")
LruAns.set("job", "dev")
LruAns.set("age", "23")
console.log(LruAns.map);
LruAns.get("name");
console.log(LruAns.map);
LruAns.set("location", "DEHRADUN")
console.log(LruAns.map);