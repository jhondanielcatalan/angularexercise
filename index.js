"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveZeros = exports.checkISBN = exports.displayList = exports.addLocation = void 0;
var locations = [];
const addLocation = (city, country, population) => {
    var location = {
        city: city,
        country: country,
        population: +population
    };
    console.log(city + " | " + country + " | " + population);
    locations.push(location);
    (0, exports.displayList)();
};
exports.addLocation = addLocation;
const displayList = () => {
    let list = document.getElementById('cityList');
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    locations.forEach((item) => {
        if (list) {
            let li = document.createElement("li");
            li.innerText = item.city + " , " + item.country + " , " + item.population;
            list.appendChild(li);
        }
    });
};
exports.displayList = displayList;
const checkISBN = () => {
    let isbn = [[1, 1, 1, 2, 2, 2, 3, 3, 3, 9],
        [1, 1, 1, 2, 2, 2, 3, 3, 3, 3],
        [1, 1, 1, 2, 2, 2, 3, 3, 3, 9, 'X'],
        [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
        [1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
        [0, 4, 8, 6, 6, 5, 0, 8, 8, 'X'],
        ['X', 1, 2, 3, 4, 5, 6, 7, 8, 8]
    ];
    console.log("2. ISBN Validation");
    isbn.forEach((item) => {
        let isValid = true;
        let total = 0;
        for (let i = 0; i < 10; i = i + 1) {
            if (i !== 9 && (item[i] === "X" || item[i] === "x") || item.length > 10) {
                isValid = false;
                break;
            }
            else if (item[i] === "X" || item[i] === "x") {
                total = total + 10 * 10;
            }
            else {
                total = total + (item[i] * (1 + i));
            }
        }
        if (isValid) {
            total = total % 11;
            if (total === 0) {
                isValid = true;
            }
            else {
                isValid = false;
            }
        }
        console.log(item.join('') + "-> " + isValid);
        isValid = true;
    });
};
exports.checkISBN = checkISBN;
/** */
let param = "Cat30";
const morphString = (param) => {
    console.log("\n3. Change it up!");
    let changed = "";
    for (let i = 0; i < param.length; i++) {
        var charval = "";
        charval = param.charAt(i);
        if (charval.match(/[Z,z]/g))
            charval = "A";
        else {
            charval = charval.match(/[A-Z,a-z]/g) ? (String.fromCharCode(param.charCodeAt(i) + 1)) : param.charAt(i);
        }
        if (charval.match(/[aeiou]/g)) {
            changed = changed.concat(charval.toUpperCase());
        }
        else if (charval.match(/[B-D,F-H,J-N,P-T,V-Z]/g)) {
            changed = changed.concat(charval.toLowerCase());
        }
        else {
            changed = changed.concat(charval);
        }
    }
    console.log(param + " -> " + changed);
};
const moveZeros = () => {
    console.log("\n4. Moving Zeroes to end");
    let collections = [false, 1, 0, 1, 2, 0, 1, 3, "a"];
    let first = collections.toString();
    for (let d = collections.length - 1; d >= 0; d--) {
        if (collections[d] === 0 && collections.splice(d, 1)) {
            collections.push(0);
        }
    }
    console.log("From " + first + " -> " + collections);
};
exports.moveZeros = moveZeros;
(0, exports.checkISBN)();
morphString(param);
(0, exports.moveZeros)();