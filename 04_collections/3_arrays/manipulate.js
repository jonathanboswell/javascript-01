var cities = ['New York','Miami','Hong Kong','London','Sydney'];

// Add an item to the end of an array
cities.push('Seattle');

// Remove the first item
cities.shift();

// Add an item to the beginning of an array
cities.unshift('Los Angeles');

// Remove an item from the end of an array
cities.pop();

// Remove multiple items
cities.splice(2,3);

// Sort an array
cities.sort();

// for/in
for(index in cities) {
    var city = cities[index];
    console.log(city);
}

// More info here
// https://www.w3schools.com/js/js_array_methods.asp