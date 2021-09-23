/**
 * Definition for read4()
 * 
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
 var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */ 
  return function(buf, n) {
      let buf4 = [];
      let offset = 0;
      
      while (n > 0){                        
          let rn = read4(buf4);
          
          for (let i = 0; i < Math.min(n, rn); i++){
              buf[i+offset] = buf4[i];
          }
          
          if (rn === 0){
              break;
          }
          
          n -= rn
                      
          offset += 4;
      }
  };
};