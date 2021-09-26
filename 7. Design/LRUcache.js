/**
 * @param {number} capacity
 */
 var LRUCache = function(capacity) {
  this.capacity = capacity;
  this.cache = {};

  this.lru = [];
  this.count = {};
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  // console.log({lru: this.lru});
  // console.log(`GET: ${key}\n`);
  
  if (! (key in this.cache)) {
    return -1;
  }

  // Add to LRU
  this.lru.push(key);
  if (! (key in this.count)) { this.count[key] = 0; }
  this.count[key] ++;

  return this.cache[key];
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  // console.log({lru: this.lru});
  // console.log(`PUT: ${key}:${value}\n`);
  
  if (this.capacity > 0) {
    // Add to LRU
    this.lru.push(key);
    if (! (key in this.count)) { this.count[key] = 0; }
    this.count[key] ++;
    
    // Only reduce capacity when needed
    if (!(key in this.cache)) {
      this.capacity --;
    }

    this.cache[key] = value;
    return;
  }

  // Only remove another item from the LRU if this is a new one
  if (! ( key in this.count) || this.count[key] < 1){ 
    // Remove the LRU
    let lruKey = this.lru.shift();
    while (this.count[lruKey] > 1){
      this.count[lruKey]--;
      lruKey = this.lru.shift();
    }
    delete this.count[lruKey];
    delete this.cache[lruKey];
  }

  // Add to LRU
  this.lru.push(key);
  if (! (key in this.count)) { this.count[key] = 0; }
  this.count[key] ++;

  this.cache[key] = value;
};

function run(param, arr, result) {
  let actual = [];
  let obj;
  for (let i = 0; i < param.length; i++){
    let cmd = param[i];
    if (cmd === "LRUCache"){
      obj = new LRUCache(arr[i]);
      actual.push(null);
    }
    else if (cmd === "put") {
      obj.put(arr[i][0], arr[i][1]);
      actual.push(null);
    }
    else if (cmd === "get") {
      let val = obj.get(arr[i][0])
      actual.push(val);
    }
  }

  console.log(actual.map(r => r ? r : 'null').join(', '));
  console.log(result.map(r => r ? r : 'null').join(', '));

  for (let i = 0; i < arr.length; i++){
    if (actual[i] !== result[i]){
      console.log("FAILURE");
      return;
    }
  }
  console.log("SUCCESS");
  
}

run(["LRUCache","put","put","get","put","get","put","get","get","get"], [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]], [null,null,null,1,null,-1,null,-1,3,4])
run(["LRUCache","put","put","get","put","get","put","get","get","get"], [[2],[1,0],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]], [null,null,null,0,null,-1,null,-1,3,4]);

run(["LRUCache","get","put","get","put","put","get","get"], [[2],[2],[2,6],[1],[1,5],[1,2],[1],[2]], [null,-1,null,-1,null,null,2,6])

run (["LRUCache","put","put","put","put","get","get"], [[2],[2,1],[1,1],[2,3],[4,1],[1],[2]], [null,null,null,null,null,-1,3]);

run(["LRUCache","put","put","put","put","put","get","put","get","get","put","get","put","put","put","get","put","get","get","get","get","put","put","get","get","get","put","put","get","put","get","put","get","get","get","put","put","put","get","put","get","get","put","put","get","put","put","put","put","get","put","put","get","put","put","get","put","put","put","put","put","get","put","put","get","put","get","get","get","put","get","get","put","put","put","put","get","put","put","put","put","get","get","get","put","put","put","get","put","put","put","get","put","put","put","get"], [[10],[10,13],[3,17],[6,11],[10,5],[9,10],[13],[2,19],[2],[3],[5,25],[8],[9,22],[5,5],[1,30],[11],[9,12],[7],[5],[8],[9],[4,30],[9,3],[9],[10],[10],[6,14],[3,1],[3],[10,11],[8],[2,14],[1],[5],[4],[11,4],[12,24],[5,18],[13],[7,23],[8],[12],[3,27],[2,12],[5],[2,9],[13,4],[8,18],[1,7],[6],[9,29],[8,21],[5],[6,30],[1,12],[10],[4,15],[7,22],[11,26],[8,17],[9,29],[5],[3,4],[11,30],[12],[4,29],[3],[9],[6],[3,4],[1],[10],[3,29],[10,28],[1,20],[11,13],[3],[3,12],[3,8],[10,9],[3,26],[8],[7],[5],[13,17],[2,27],[11,15],[12],[9,19],[2,15],[3,16],[1],[12,17],[9,1],[6,19],[4]], [null,null,null,null,null,null,-1,null,19,17,null,-1,null,null,null,-1,null,-1,5,-1,12,null,null,3,5,5,null,null,1,null,-1,null,30,5,30,null,null,null,-1,null,-1,24,null,null,18,null,null,null,null,-1,null,null,18,null,null,-1,null,null,null,null,null,18,null,null,-1,null,4,29,30,null,12,-1,null,null,null,null,29,null,null,null,null,17,22,18,null,null,null,-1,null,null,null,20,null,null,null,-1])
/** 
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/