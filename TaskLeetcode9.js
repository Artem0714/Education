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

let isPalindrome = function(x) {
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

console.log (isPalindrome(123))


// const x = 1234321

// let MasX = Array.from(String(x), Number);
// let MasReverse = Array.from(String(x), Number).reverse();
// console.log (JSON.stringify(MasX) == JSON.stringify(MasReverse));
