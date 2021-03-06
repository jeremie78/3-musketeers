var expect = require('chai').expect;
var is = require('../lib/is/index');

describe('is micro-checking library', function() {

  describe('is.array', function () {

    it('should return true if passed parameter type is array', function () {
      expect(is.array(['value1','value2'])).to.be.true;
    });
    it("should return false if passed parameter type is not Array", function () {
      var notArray = 'test';
      expect(is.array(notArray)).to.be.false;
    });

  });

  //////

  describe('is.boolean', function () {


    it('should return true if passed parameter type is boolean', function () {
      expect(is.boolean(true)).to.be.true;
    });
    it('should return true if passed parameter type is boolean', function () {
      expect(is.boolean(false)).to.be.true;
    });
    it("should return false if passed parameter type is not boolean", function () {
    var a = 'a';
      expect(is.boolean(a)).to.be.false;
    });

  });

//////

describe('is.date', function () {


  it('should return true if passed parameter type is date', function () {
    expect(is.date(new Date('1999-05-06'))).to.be.true;
  });
  it("should return false if passed parameter type is not date", function () {
  var a = 'a';
    expect(is.date(a)).to.be.false;
  });

});

//////

describe('is.error', function () {


  it('should return true if passed parameter type is error', function () {
    expect(is.error(new Error)).to.be.true;
  });
  it("should return false if passed parameter type is not error", function () {
  var a = 'a';
    expect(is.error(a)).to.be.false;
  });

});

///////

describe('is.function', function () {


  it('should return true if passed parameter type is function', function () {

    expect(is.function(new Function() )).to.be.true;
  });
  it("should return false if passed parameter type is not error", function () {
  var a = 'a';
    expect(is.function(a)).to.be.false;
  });

});

//////

describe('is.nan', function () {


  it('should return true if passed parameter type is nan', function () {

    expect(is.nan(0/0)).to.be.true;
  });
  it("should return false if passed parameter type is not nan", function () {
  var a = 'a';
    expect(is.nan(a)).to.be.false;
  });

});


///////


describe('is.null',function(){
		it('should return true if passed parameter type is null',function(){
			var argumdents = null;
			expect(is.null(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not null", function () {
			var notArguments = 'test';
		expect(is.null(notArguments)).to.be.false;
		});
	});

	describe('is.number',function(){
		it('should return true if passed parameter type is number',function(){
			var argumdents = 1;
			expect(is.number(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not number", function () {
			var notArguments = 'test';
		expect(is.number(notArguments)).to.be.false;
		});
	});

	describe('is.object',function(){
		it('should return true if passed parameter type is object',function(){
			var argumdents = {nom:"a"};
			expect(is.object(argumdents)).to.be.true;
		});
		it("should return false if passed parameter type is not object", function () {
			var notArguments = 'test';
		expect(is.object(notArguments)).to.be.false;
		});
	});
});
