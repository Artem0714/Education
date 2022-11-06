let strs = ["abc",'ab']

//РЕШЕНИЕ ЧЕРЕЗ 2 МАССИВА

// function longestCommonPrefix(strs) {
//     let result = '';
//     if (strs.length == 1){
//         return result = strs[0]
//     }
    
//     for (let x = 0; x < (strs.length-1); x++) {
//         for (let y = 0; y < strs[x].length; y++) {
//             if (x == 0) {
//                 if (strs[x][y] == strs[x+1][y]) {
//                     result += strs[x][y]
//                 }
//             } else if (strs[x+1][y] != result[y]) {
//                 return result = result.substring(0, y)
//             }
//         }
//     }
//     console.log(result);
// };

//РЕШЕНИЕ ЧЕРЕЗ 2 МАССИВА УКОРОЧЕННЫЙ

// function longestCommonPrefix(strs) {
//     let result = strs[0];
//     strs.forEach(element => {
//         element.split('').forEach((el, num) => {
//             console.log(el[0]);
//             el[num] == undefined ? result = result.substring(0, num) :
//             el[num] !== result[num] && num == 0 ? result = '' :
//             el[num] !== result[num] ? result = result.substring(0, num+1) :
//             result
//         })
//     })
//     console.log(result);
// }

function longestCommonPrefix(strs) {
    if (strs.length == 0) {
        return ''
    }

    let result = strs[0];
    for (let i = 0; i < (strs.length); i++) {
        while(strs[i].indexOf(result) !== 0) {
            result = result.substring(0, result.length-1)
        }
    }

    return result
}

longestCommonPrefix(strs)