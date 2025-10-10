/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    let typeSort = {
        asc: (a, b) => {
            let k = a.localeCompare(b,['ru', 'en'], {caseFirst : 'upper'});
            if (k > 0) return 1;
            if (k == 0) return 0;
            if (k < 0) return -1;
        },
        desc: (a, b) => {
            let k = a.localeCompare(b,['ru', 'en'], {caseFirst : 'upper'});            
            if (k > 0) return -1;
            if (k == 0) return 0;
            if (k < 0) return 1;
        }
    }
    return [...arr].sort(typeSort[param]);
}
