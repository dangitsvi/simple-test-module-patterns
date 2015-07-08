var greet = {};
var consoleArgs = process.argv;

greet.hello = function(name) {
  return 'hello ' + name;
};

//bonus question 1
if(consoleArgs[2])  {
  console.log(greet.hello(consoleArgs[2]));
}

exports.hello = greet.hello;
exports.consoleArgs = consoleArgs;
