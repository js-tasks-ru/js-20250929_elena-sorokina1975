/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if ((string.length == 0) || (size <=0)) {
    return '';
  }
  if (size == undefined) {
    return string;
  }
  let result = string[0]; 
  let countSymb = 1;
  let s = string[0]; 
  let sPrev = string[0]; 
  for (let i = 1; i < string.length; i++) {
      s = string[i];   
      if (s == sPrev)  {
          countSymb++;
          if (countSymb <= size) {
            result = result + s;
          } else {
            countSymb++;                  
          }
    } else {
        result = result + s;
        countSymb = 1;  
    }
    sPrev = string[i];  
  }    
  return result;  
}
