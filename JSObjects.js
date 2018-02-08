
// Challenge 1
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
]
for( let student of students){
	console.log('Name: ' + student.name+ " , Cohort: " + student.cohort);
}

'''''''''''''''''''''''''''''''''''''''''''
//Challenge 2
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 }
  for( position in users){
        console.log(position.toUpperCase());
         
        for(let i=0; i<users[position].length; i++){
          let user = users[position][i];
          let len = user.first_name.length + user.last_name.length;
          console.log(i+1+" - "+user.last_name.toUpperCase()+", "+user.first_name.toUpperCase()+" - "+len); 
        }
    }























