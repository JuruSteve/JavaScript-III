/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Window binding: The 'this' keyword refers to the window object when in global scope
 * 2. Implicit binding: The 'this' keyword is the object that precedes the . in a function call
 * 3. Explicit binding: The 'this' keyword is explicitly defined by call .apply() and .call() methods
 * 4. New binding: The 'this' keyword refers to the object being constructed when using a constructor function
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding
function whatIsThis() {
  return this;
}
// console.log(whatIsThis());
// Principle 2
// code example for Implicit Binding
const hello = {
  world: "world",
  completeSentence: function() {
    return `Hello ${this.world}!`;
  }
};
// console.log(hello.completeSentence());
// Principle 3

// code example for New Binding
function Car(param) {
  (this.make = param.make), (this.model = param.model);
}
const honda = new Car({ make: "Honda", model: "Accord" });
const kia = new Car({ make: "Kia", model: "Soul" });

// console.log(honda, kia);
// Principle 4
// code example for Explicit Binding
const teams = {
  TeamA: "blue",
  TeamB: "green"
};

const countries = ["England", "Spain"];

function season(param) {
  return `The team in ${this.TeamA} will play the team in ${
    this.TeamB
  } in these countries: ${param}`;
}

console.log(season.call(teams, countries));
