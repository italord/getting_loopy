
var Presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];

for (var i = 0; i <Presidents.length; i++) {
console.log ("The value of:" + [i]);
console.log ("The value at index is:" + Presidents [i]);
}

// `The String of Numbers`

var stringOfNumbers = "";

for (var i = 10; i <= 20; i++){
	stringOfNumbers = stringOfNumbers + i;
} 
console.log (stringOfNumbers);

// `Add only even numbrs to an array`

var evenNumberArray = [];

for (var i = 0; i <= 50; i+= 2){
	evenNumberArray.push(i); 
}

console.log (evenNumberArray);

