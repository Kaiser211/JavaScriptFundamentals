
//Part I
function starString(num) {
        string = "";
        for(let i=0; i<num; i++){
          string+='*';
        }
        return string;
      };
      
      let stars = starString(8);
      console.log(stars);
      //console.log(starString(8));
''''''''''''''''''''''''''''''''''''''''''

//Part II
function drawStars(arr){
    for(let i=0; i<arr.length; i++){
    	console.log(starString(arr[i]));
    }
    return arr;
}
let x = [4, 6, 1, 3, 5, 7, 25];
drawStars(x);
//console.log(draw_stars([4, 6, 1, 3, 5, 7, 25]));
''''''''''''''''''''''''''''''''''''''''''

//part III
function starString(num) {
        string = "";
        for(let i=0; i<num; i++){
          string+='*';
        }
        return string;
      };
      
      let stars = starString(8);
      console.log(stars);

function newDrawStars(arr){
	 let numArr = [];
     
	for(let i=0; i<arr.length; i++){
		if(typeof arr[i]==='number'){
			numArr.push(starString(arr[i]))

			} else if (typeof arr[i] ==='string'){
                let strArr = [];
				for( let j=0; j<arr[i].length;j++){
					strArr += arr[i][0].toLowerCase();
				}
				numArr.push(strArr);
            }
			}
			return numArr;
		}
		let x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]
        console.log(newDrawStars(x));
	














