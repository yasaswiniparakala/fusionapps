    describe("Inner Suite 1", function(){
      
        before(function(){
            
            // do something before test suite execution
            // no matter if there are failed cases
        
        });
     
        after(function(){
     
            // do something after test suite execution is finished
            // no matter if there are failed cases
     
        });
        
        beforeEach(function(){
            
            // do something before test case execution
            // no matter if there are failed cases
        
        });
     
        afterEach(function(){
     
            // do something after test case execution is finished
            // no matter if there are failed cases
     
        });
      
    //    it("Test-1", function(){
            
            // test Code
            // assertions
     
      //  });
	  
	      it("Test-1", function(done){
     
          
     
    });
     
        it("Test-2", function(){
     
   
var should = require('chai').should() //actually call the function
  , foo = 'bar'
  , beverages = { tea: [ 'chai', 'matcha', 'oolong' ] };

foo.should.be.a('string');
foo.should.equal('bar');
foo.should.have.lengthOf(3);
beverages.should.have.property('tea').with.lengthOf(10);

            

        });
     
        it("Test-3", function(){
     
            // test Code
            // assertions
     
        });
      
    });