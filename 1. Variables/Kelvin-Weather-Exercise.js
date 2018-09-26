// Forecast today in kelvin.
const kelvin = 293;

// Celsius value.
const celsius = kelvin - 273;

// Fahrenheit value.
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);

// Log the temperature in Fahrenheit.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

// -------------

// Convert to Newton
let newton = celsius * (33/100);

// Round down
newton = Math.floor(newton);

// Log temperature in Newtons
console.log(`The temperature is ${newton} degrees Newton.`)