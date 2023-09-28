// Complete the following functions to make our program work! 

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */
function convertToCelsius(fahren) {
  return Math.round((fahren - 32) * (5 / 9));
}
console.log(convertToCelsius("30"));
// const fahren = "30"
// const celc = convertToCelsius(fahren)
/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} celc
 */
function createMessage(fahren, celc) {
  if (fahren < 32) {
    return (`${fahren} degrees Fahrenheit or ${celc} degrees Celsius is very cold`
    // return (celc + " The temperature of degree entered was less than 32 degrees giving you a very cold feeling");
  );
  }

  if (fahren > 32 && fahren < 64) {
    return ( `${fahren} degress Fahrenheit and ${celc} degress Celsius gives you a cold feeling`
      // celc +
      // " The temperature of degree entered was greater than 32 degrees and less than 64 degrees giving you a cold feeling"
    );
  }

  if (fahren > 64 && fahren < 86) {
    return ( `${fahren} degrees Fahrenheit and ${celc} degress Celsius gives you a warm feeling`
      // celc +
      // " The temperature of degree entered was greater than 64 degrees and less than 86 degrees giving you a warm feeling"
    );
  }
  if (fahren > 86 && fahren < 100) {
    return (`${fahren} degress Fahrenheit and ${celc} degress Celsius gives you a hot feeling`
      // celc +
      // " The temperature of degree entered was greater than 86 degrees and less than 100 degrees giving you a hot feeling"
    );
  }
}
// console.log(createMessage(fahren,celc));
/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */

function rand(limit) {
  return Math.floor(Math.random() * limit);
}

// -------------------- DONT NOT CHANGE THE CODE BELOW ---------------------- //
let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);

let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelsius(fahren);
output = createMessage(fahren, celc);
console.log(output);
