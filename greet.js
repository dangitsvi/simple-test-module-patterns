var greet = {};
var consoleArgs = process.argv;

greet.hello = function(name) {
  return 'hello ' + name;
}

if(consoleArgs[2])  {
  console.log(greet.hello(consoleArgs[2]));
}

exports.hello = greet.hello;
