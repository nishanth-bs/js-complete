/////////////////////////////////////
// Lecture: Hoisting
/***********************************/
// functions

//WORKS
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

// retirement(1956);	--> DOESNT WORK
//hoisting only works for function declaration
// not for function expressions
var retirement = function(year) {
    console.log(65 - (2016 - year));
}


/***********************************/
// variables 

console.log(age);	//UNDEFINED -- hoisting  
console.log(notdefinedvariablename); //ERROR
var age = 23;

function foo() {
    console.log(age);
    var age = 65;
    console.log(age);		//prints 65
	//because function exec context object
}
foo();	
console.log(age); 	//prints23 globalexecution context object



/////////////////////////////////////
// Scoping


// First scoping example
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);  //prints hello! hi! hey!
    }
}


// Example to show the differece between execution stack and scope chain
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()	//has access to third function because of scope chain [global scope]
    }
}

function third() {
    var d = 'John';
    //console.log(c);	//error can't access c because different scope 
    console.log(a+d);
}


/////////////////////////////////////
// The this keyword


//console.log(this);	//window object
// coz default object

calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);	//global object =>window object
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);		//john object
        console.log(2016 - this.yearOfBirth);	//2016- 1990
        
        function innerFunction() {
            console.log(this);	//window object!!!!!
								//because a regular function
        }
        innerFunction();
    }
}

john.calculateAge(); //john object


var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

//METHOD BORROWING
mike.calculateAge = john.calculateAge; //no parenthesis coz here we treat functions as variables
mike.calculateAge();		// 2016 - 1984!! and not 2016-1990
//HENCE THIS KEYWORD IS ONLY ASSIGNED VALUE 
//WHEN THE OBJECT CALLS THE METHOD
