
//Sort Array by number

let arr = [2, 4, 1, 5, 6, 8, 10]

function sortByValue(array) {
    array.sort((a, b) => b - a)
    console.log(array);
}
sortByValue(arr)


//Months by their index

let months = ["January", "February", "March", "April"]

let monthByNum = months.map(monthsOrder)

function monthsOrder(month, index) {

    let count = index + 1

    let value = month + "-" + count;

    return value;
}

console.log(monthByNum);

//String to Array
let string = "salam olsun hamiya"

function countChars(str) {
    let arr = str.split(" ")
    let result = arr.map(m => (m.length));
    return result;
}
console.log(countChars(string));


