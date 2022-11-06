s = "(()"

// ЧЕРЕЗ СТРОКУ
// function isValid (s) {
//     let arr = s;

//     for (let i = 0; i < (arr.length); i++) {
//         while (arr[i] == '(' && arr[i+1] == ')' || arr[i] == '[' && arr[i+1] == ']' || arr[i] == '{' && arr[i+1] == '}') {
//             arr = arr.slice(0, i) + arr.slice(i+2);
//             i = 0;
//         }
//     }

//     if (arr.length == 0) {
//         return true
//     } else {
//         return false
//     }
// }

// isValid(s)

// ЧЕРЕЗ МАССИВ
// function isValid (s) {
//     let arr = s.split('');

//     for (let i = 0; i < (arr.length); i++) {
//         while (arr[i] == '(' && arr[i+1] == ')' || arr[i] == '[' && arr[i+1] == ']' || arr[i] == '{' && arr[i+1] == '}') {
//             arr.splice(i, 2);
//             i = 0;
//         }
//     }

//     if (arr.length == 0) {
//         return true
//     } else {
//         return false
//     }
// }

// isValid(s)

// ЧЕРЕЗ STACK(воспользовался YouTube)
function isValid (s) {
    let stack = [];

    let valid = {
        ')':'(',
        ']':'[',
        '}':'{',
    }
    
    for (let i = 0; i < (s.length); i++) {
        if (close(s[i]) >= 0) {
            if (valid[s[i]] !== stack.pop()) return false;
        } else {
            stack.push(s[i])
        }
    }

    function close(x) {
        return [')', ']', '}'].indexOf(x)
    }

    return stack.length === 0
}

isValid(s)