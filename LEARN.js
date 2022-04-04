// Создание нового массива с помощью функции без изменения первоначального массива
/*let numbers =[1,2,3,4,5]
const A = numbers.map(number2 => number2 * 2)
console.log (A)
console.log (numbers)*/

// Работа с массивом объектов

const number = [
    {name: 'I', meaning: 1},
    {name: 'V', meaning: 5},
    {name: 'X', meaning: 10},
    {name: 'L', meaning: 50},
    {name: 'C', meaning: 100},
    {name: 'D', meaning: 500},
    {name: 'M', meaning: 1000}
]

const all = number
.filter(person => person.meaning >10)
.reduce((acc,person) => {
    acc += person.meaning
    return acc
}, 0) 

console.log(all)