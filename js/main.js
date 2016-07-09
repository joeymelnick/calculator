var values = ' '
var result = ' '

var display = document.getElementById('calculator-display');
function calldisplay(x){
display.innerHTML += x
values += x
}

function callclear(){
	display.innerHTML = " "
	console.log(display)
	values = 0
}

var add = function(x,y){
 return x+y;
}

var subtract = function(x,y){
 return x-y;
}

var multiply = function(x,y){
 return x*y;
}

var divide = function(x,y){
 return x/y;
}

function callequals(calcvalues){
	
	inputArray = values.split(/\+|-|\*|\//);
    var1 = parseInt(inputArray[0]);
    var2 = parseInt(inputArray[1]);
    operationsArray = values.match(/\+|-|\*|\//)
    console.log(var1)
    console.log(var2)

    if(operationsArray[0] == "+"){
    	result = add(var1,var2);
    	display.innerHTML = result;
    }
    else if(operationsArray[0] == "-"){
    	result = subtract(var1,var2);
    	display.innerHTML = result;
    }
    else if(operationsArray[0] == "*"){
    	result = multiply(var1,var2);
    	display.innerHTML = result;
    }
     else{
    	result = divide(var1,var2);
    	display.innerHTML = result;
    }
    var1 = 0
    var2 = 0
    values = 0
}