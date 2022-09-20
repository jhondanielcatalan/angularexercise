

interface Location {
    city: string,
    country: string,
    population: number
}


var locations: Location[] = [];
export const addLocation = (city: string, country: string, population: string) => {

    var location: Location = {
        city: city,
        country: country,
        population: +population
    }
    console.log(city + " | " + country + " | " + population);
    locations.push(location);
    displayList(locations);
}

export const displayList = (locations:Location[]) => {
    let list = document.getElementById('cityList');
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild)
        }
    }
    locations.forEach((item) => {
        if (list) {
            let li = document.createElement("li");
            li.innerText = item.city + " , " + item.country + " , " + item.population;
            list.appendChild(li);
        }
    })

}

export const searchCity = (searchKey:string) =>{
    console.log("Searching..."+ searchKey);
    var searchCity = locations.filter(c => (c.city.indexOf(searchKey)>=0||c.country.indexOf(searchKey)>=0));
    displayList(searchCity);
}

















export const checkISBN = () => {
    let isbn: (string | number)[][] = [[1, 1, 1, 2, 2, 2, 3, 3, 3, 9]];
    console.log("2. ISBN Validation");
    isbn.forEach((item) => {
        let isValid: boolean = true;
        let total: number = 0;
        for (let i = 0; i < 10; i = i + 1) {
            if (i !== 9 && (item[i] === "X" || item[i] === "x") || item.length > 10) {
                isValid = false;
                break;
            }
            else if (item[i] === "X" || item[i] === "x") {
                total = total + 10 * 10;
            }
            else {
                total = total + (<number>item[i] * (1 + i));
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
    })
}

let param: string = "Cat30";
const morphString = (param: string) => {
    console.log("\n3. Change it up!");
    let changed: string = "";

    for (let i = 0; i < param.length; i++) {
        var charval = "";

        charval = param.charAt(i);
        if (charval.match(/[Z,z]/g)) charval = "A";
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

}


export const moveZeros = () => {
    console.log("\n4. Moving Zeroes to end");
    let collections = [false, 1, 0, 1, 2, 0, 1, 3, "a",];
    let first: string = collections.toString();
    for (let d = collections.length - 1; d >= 0; d--) {
        if (collections[d] === 0 && collections.splice(d, 1)) {
            collections.push(0);
        }
    }
    console.log("From " + first + " -> " + collections);
}




checkISBN();
morphString(param);
moveZeros();



