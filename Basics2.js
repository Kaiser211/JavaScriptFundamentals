//Test 1

function magic_multiply(x,y){
	return x*y;
}
let test1 = magic_multiply(5,2);
console.log(test1);
// => 10

''''''''''''''''''''''''''''''''
//Test 2
function magic_multiply(x,y){
	return x * y;
}
let test2 = magic_multiply(0,0);
console.log(test2);
// => "All inputs 0"

''''''''''''''''''''''''''''''''
// Test 3
function magic_multiply(arr, num){
	for(let i=0; i<arr.length; i++){
		console.log(arr[i]*num);
	}
}
let test3 = magic_multiply([1,2,3],2);
console.log(test3);
// => [2,4,6]
''''''''''''''''''''''''''''''''''''''
// Test 4
function magic_multiply(x, y){
	if(parseInt(x,y)){
		console.log('Can not multiply a string')
	}else{
	return x *y;

}
}

let test4 = magic_multiply(7,"three");
console.log(test4);

''''''''''''''''''''''''''''''''''''
// Test 5
function magic_multiply(str,x){
		let String = str.repeat(x);
		return String;
}

let test5 = magic_multiply("Brendo", 4);
console.log(test5);

''''''''''''''''''''''''''''''''
How could we check if an array is an array?
We would use .isArray(); to check if an array is an array. We would get a true or false





