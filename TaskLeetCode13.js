// const symbol = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
// const value = [1, 5, 10, 50, 100, 500, 1000]

// let number = function(x) {
//     for (let i = 0; i < symbol.length; i += 1) {
//         if (x == symbol[i]) {
//             return value[i]
//         }
//     }
// }

// const mean = 'LVIII'

// let Arr1 = Array.from(number(mean), Number)
// alert (Arr1)

// let NumberArray = function 
// for (let j = 0; j < mas.length; j += 1) {
//     let NumberArray = number(mas[j])
//     for (let e = 0; e < NumberArray.length; e += 1) {
//         if (NumberArray[e+1] < NumberArray[e]) {
//             alert (1)
//         } else {
//             alert (2)
//         }
// }

/*const finish = M;
if (let finish == )

for (let i = 0; i < number.length; i += 1) {

}

for (let i = 0; i < mas.length; i += 1) {
    if (mas[i] = number.filter(name))
}

/*let num = [
    {symbol: 'I', value: 1},
    {symbol: 'V', value: 5},
    {symbol: 'X', value: 10},
    {symbol: 'L', value: 50},
    {symbol: 'C', value: 100},
    {symbol: 'D', value: 500},
    {symbol: 'M', value: 1000}
]

const allnumbers = num
    .filter(number => number.num)
    number.num
    console.log (num.filter.value > 10)


let number = function(x) {
    for (let i = 0; i < symbol.length; i += 1) {
        if (x == symbol[i]) {
            return value[i]
        }
    }
}

const mean = 'LVIII'
let mas = Array.from(String(mean), String)
// console.log (number(mas[0]))
for (let j = 0; j < mas.length; j += 1) {
    if (number(mas[j]) < number(mas[j+1])) {
        console.log (number(mas[j+1])-number(mas[j]));
        j += 1
    } else {
        console.log (number(mas[j]))
    }
}*/





const symbol = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
const value = [1, 5, 10, 50, 100, 500, 1000]

let number = function(x) {
    for (let i = 0; i < symbol.length; i += 1) {
        if (x == symbol[i]) {
            return value[i]
        }
    }
}

let mean = function(x) {
    let NumberArr1 = Array.from(String(x), String);
    for (let j = 0; j < NumberArr1.length; j += 1) {
        let NumberArr2 = number(NumberArr1[j])
        if (NumberArr2[j+1] > NumberArr2[j]){
            alert (NumberArr2[j+1] - NumberArr2[j])
        } else {
            alert (NumberArr2[j])
        }
        
    }
}

x = 'LVIII'

alert (mean(x))