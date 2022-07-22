// Создание нового массива с помощью функции без изменения первоначального массива
/*let numbers =[1,2,3,4,5]
const A = numbers.map(number2 => number2 * 2)
console.log (A)
console.log (numbers)*/

// Работа с массивом объектов

// const number = [
//     {name: 'I', meaning: 1},
//     {name: 'V', meaning: 5},
//     {name: 'X', meaning: 10},
//     {name: 'L', meaning: 50},
//     {name: 'C', meaning: 100},
//     {name: 'D', meaning: 500},
//     {name: 'M', meaning: 1000}
// ]

// const all = number
// .filter(person => person.meaning >10)
// .reduce((acc,person) => {
//     acc += person.meaning
//     return acc
// }, 0) 

// console.log(all)

//

/*let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;*/

//

/*function isEmpty(obj) {
    alert ( obj. === undefined) //необходимо решенеие через цикл, а не через сравнение 
}

alert(isEmpty(user))*/

//

/*let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (let key in salaries) {
    sum += salaries[key]
}

alert(sum)*/

/*function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === Number) {
            obj[key] *= 2
        } 
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu)*/

/*function User(name) {
    this.name = name;
    this.isAdmin = false;
  }
  
  let user = new User("Вася");
  
  alert(user.name); // Вася
  alert(user.isAdmin); // false
*/