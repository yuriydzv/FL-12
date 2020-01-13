function convert(...args) {
    let newArray = [];

    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] === 'number') {
            let nTs = args[i].toString();

            newArray.push(nTs);
        } else if (typeof args[i] === 'string') {
            let sTn = +args[i];

            newArray.push(sTn);
        }
    }
    return newArray;
}

function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

function mapArray(arr, func) {
    let newArray = [];

    executeforEach(arr, (el) => {
        newArray.push(func(el));
    });
    return newArray;
}

function filterArray(arr, func) {
    let newArray = [];

    executeforEach(arr, (el) => {
        if (func(el)) {
            newArray.push(el);
        }
    });
    return newArray;
}

function flipOver(str) {
    let newArray = [];

    for (let i = str.length - 1; i >= 0; i--) {
        newArray.push(str[i]);
    }

    let newString = newArray.join('');
    return newString;
}

function makeListFromRange([start, end]) {
    let newArray = [];

    for (let i = start; i <= end; i++) {
        newArray.push(i);
    }
    return newArray;
}

function getArrayOfKeys(arr, key) {
    let newArray = [];

    executeforEach(arr, item => newArray.push(item[key]));
    return newArray;
}

function substitute(arr) {
    const THIRTY = 30;
    return mapArray(arr, item => item <= THIRTY ? '*' : item);
}

//const date = new Date(2019, 0, 2);
function getPastDay(date, num) {
    let newDate = new Date();
    let day = date.getDate();

    newDate.setDate(day - num);
    return newDate;
}

function formatDate(date) {
    let newDate = new Date(Date.parse(date));

    return `${newDate.getFullYear()}/${newDate.getMonth() + 1}/${newDate.getDate()} ${newDate.getHours()}:${newDate
        .getMinutes()}`;
}