/*
 There are there way to intitailize in javaScript

		var
		let
		const

*/

/*
		var availabe in all vesrions of javascript

		accessible at function level
*/
/******************************************************************************************************************/

function sayHello()
{
    for(var i = 0; i<5; i++)
  	{
  		// i is accessible in the loop
        console.log(i);
    }
    // i is accessible outside the loop using var, so its recommanded not to the var intialization 
    console.log(i);// 5
}

sayHello();

/******************************************************************************************************************/



/*
		let availabe in ECMAScript 6(ES6) or later versions
		accessible at block level
*/


/******************************************************************************************************************/

function sayHi()
{
    for(let i = 0; i<5; i++)
  	{
  		// i is accessible in the loop
        console.log(i);
    }
    // i is not accessible outside the loop using var, so its recommanded not to the var intialization 
    //console.log(i);// will throw an error i not defined 
}

sayHi();

/******************************************************************************************************************/

/*
		const availabe in ECMAScript 6(ES6) or later versions
		accessible at block level
		user for constants the values that do not change after declaring and initializing
*/


/******************************************************************************************************************/

const x = 1;
console.log("Print x value: "+x);

//x =2 //  SyntaxError: Identifier 'x' has already been declared

/******************************************************************************************************************/