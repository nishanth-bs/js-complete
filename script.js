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

