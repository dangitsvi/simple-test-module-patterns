var hello = require('../greet').hello;
var expect = require('chai').expect;
var consoleArgs = process.argv;

describe('greet.js', function() {
  it('should pass hello Vi when passed Vi', function(){
    expect(hello('Vi')).to.eql('hello Vi');
  });
  //bonus question 2
  it('consoleArgs should have arguements when mocha is called', function(){
    expect(consoleArgs).to.be.not.null;
  });
});

