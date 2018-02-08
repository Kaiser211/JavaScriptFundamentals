
//Math 1
function zero_negativity(arr){
   
   
    
	for(let i = 0; i<arr.length; i++){
		if(arr[i]<0){
			return 'false';
		}else {
			if(arr[i]>0){
				return 'true';
			}
        }  
    }
}
//var arr = [1,2,3,4,5];
var arr = [-7,-8,-9,-10];
console.log(zero_negativity(arr));
''''''''''''''''''''''''''''''''''''''
//Math 2
function is_even(num){
	if(num%2==0){
		return 'true';
	}else{
		return 'false';
	}
}
var even = 8;
var odd = 9;

console.log(is_even(even));
console.log(is_even(odd));

''''''''''''''''''''''''''''''''''''''''
//Math 3
function how_many_even(arr){
            let counter = 0;
            for(let i =0; i<arr.length; i++){
              if (is_even(arr[i])=='true' ){
                counter +=1;
              }
            }
            return counter;
          }
var arr = [1,2,3,5,8,9];
console.log(arr);
console.log(how_many_even(arr));
''''''''''''''''''''''''''''''''''''''''
//Math 4
function create_dummy_array(n){
	var arr = [];
	for(let i=0; i<=n; i++){
		arr[0] = Math.floor(Math.random()*10);
	}
       return arr;
}
var arr = create_dummy_array(0);
console.log(arr);

''''''''''''''''''''''''''''''''''''''''''
//Math 5
function random_choice(arr){
	let rNum = Math.floor(Math.random()*arr.length);
	return arr[rNum];

}
 console.log(random_choice([3,9,11,19]));









