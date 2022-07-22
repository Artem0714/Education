const symbol = ['I', 'V', 'X', 'L', 'C', 'D', 'M']
const value = [1, 5, 10, 50, 100, 500, 1000]

let number = function(x) {
    for (let i = 0; i < symbol.length; i += 1) {
        if (x == symbol[i]) {
            return value[i]
        }
    }
}

const mean = 'LVIII'
let mas = Array.from(String(mean), String)
for (let j = 0; j < mas.length; j += 1) {
    if (number(mas[j]) < number(mas[j+1])) {
        console.log (number(mas[j+1])-number(mas[j]));
        j += 1
    } else {
        console.log (number(mas[j]))
    }
}*/
// const finish = M;
// if (let finish == )

// for (let i = 0; i < number.length; i += 1) {

// }

// for (let i = 0; i < mas.length; i += 1) {
//     if (mas[i] = number.filter(name))
// }

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

