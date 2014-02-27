var expect = require("chai").expect;
var tags = require("../lib/test.js");

// Passing Tests 
describe("Test", function(){
	describe("#equals()", function(){
		it("should equal", function(){
			var answer = 43;
			expect(answer).to.equal(43); 
    });
  });
  
	describe("#checkLength()", function(){
		it("should equal", function(){
			var assert = require('chai').assert
			  , foo = 'bar'
			  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
			
			assert.typeOf(foo, 'string', 'foo is a string');
			assert.equal(foo, 'bar', 'foo equal `bar`');
			assert.lengthOf(foo, 3, 'foo`s value has a length of 3');
			assert.lengthOf(beverages.tea, 3, 'beverages has 3 types of tea');
	  });
	});

	describe("#shouldAssert()", function(){
		var should = require('chai').should() //actually call the the function
		  , foo = 'bar'
		  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };
		
		foo.should.be.a('string');
		foo.should.equal('bar');
		foo.should.have.length(3);
		beverages.should.have.property('tea').with.length(3);
  });
  
	describe("#shouldAssert()", function(){
		var square = require('chai').should() //actually call the the function
		  , length = 5
		  , width = 5
		  , area = (length * width)
		
		length.should.be.a('number');
		width.should.be.a('number');
		length.should.equal(5);
		width.should.equal(5);
		area.should.be.above(length);
 });
	
	describe("#credit()", function() {
		it("answer is not close enough", function(){
			answer = 3.5654;
			expect(answer).to.be.closeTo(3.56, 3.57);
		});
	})
	
	it("Are you Asian?", function (){
		var asian = true
			, notAsian = false;
		var assert = require('chai').assert;
		assert.isBoolean(asian, 'You are Asian!');
		assert.isBoolean(notAsian, 'You are not Asian :(');
	})

		it("Dancing in the rain", function (){
			var assert = require('chai').assert;
			assert.match('RADANCINGIN', /DANCING/, 'regexp matches');
		})
	
// Failing tests
	describe("#login()", function() {
		it("missing fields", function(){
			username = null;
			password = 'password';
			// expect(username).to.be.a('string');
			expect(password).to.be.a('string');
			expect(username).not.to.be.null;
    });
    
		it("username too short/long", function(){
			username = "12345";
			expect(username).to.have.length.within(6,12);
    });
	})
	
	describe("#ageValidation()", function() {
		it("not old enough", function() {
			age = "string";
			expect(age).to.be.within(18,120);
		})
		it("age must be a nummber", function() {
			var assert = require('chai').assert;
			assert.isNumber(age, 'you are old enough?');
		})
	})
	
	
});







