//Common js, every file is module (by default)
//Modules - Encapsulated Code (only share minimum)
const names = require("./4-names");

const say = require("./5-utils");
const data = require("./6-alternate-flavor");
require("./7-mind-grenade");
const { john, peter } = names;
// say(john);
// say(peter);

// console.log(data);
