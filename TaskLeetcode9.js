// function isPalindrome(x) {
//     let MasX = Array.from(String(x), Number)
//     for (let i = 0; i < MasX.length; i += 1) {
//         const iValue = MasX[i]
//         console.log (iValue) 
//     };
// };
// let result = isPalindrome(123454321);
// console.log (result);

// let b = a.reverse()

// **Первое решение через 2 массива (основной и реверсивный) и цикл**
/*let isPalindrome = function(x) {
    let MasX = Array.from(String(x), Number);

    let MasReverse = Array.from(String(x), Number).reverse();

    for (let i=0; i < MasX.length; i +=1) {
        const arr1 = MasX[i];
        const arr2 = MasReverse[i];
        if (arr1 != arr2) {
            return (false)
        }
    }
    return (true)
}

console.log (isPalindrome(123));*/


// const x = 1234321

// let MasX = Array.from(String(x), Number);
// let MasReverse = Array.from(String(x), Number).reverse();
// console.log (JSON.stringify(MasX) == JSON.stringify(MasReverse));


// **Второе решение через разбиение строк**

// let isPalindrome = function(x) {
//     // let StringA = Array.from(String(x), String)
//     // let StringF = StringA.splice((StringA.length / 2),((StringA.length+1)/ 2))
//     // let A = String(StringF.reverse())
//     // let B = String(StringA)
//     // console.log (A)
//     // if (A == B){
//     //     return true
//     // } else {
//     //     return false
//     // }
// }

/*let isPalindrome = function(x) {
    let AB = String(x);
    let StringA = AB.substring(0, (AB.length+1)/2);
    let StringB = AB.substring(AB.length/2).split('').reverse().join('');
    return Boolean(StringA == StringB)
}

console.log (isPalindrome(1232321))*/

// **Третье решение через 1 массив и 1 цикл**

/*let isPalindrome = function(x) {
    let Arr1 = Array.from(String(x), Number);
    for (let i=0; i < Arr1.length; i += 1) {
        if (Arr1[i] != Arr1[Arr1.length-i-1]) {
            return false
        }
    }
    return true
}

console.log (isPalindrome(112585211));*/
