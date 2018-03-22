/*let partyInvites =[];
let pushMorePeople = (...people) =>//... used as rest(comma seperated values are converted to array)
{	
	partyInvites = partyInvites.concat(people);
	alert(partyInvites);
}
let arr1 =["a","b","c"]
let arr2 =["d","e","f"]
pushMorePeople(arr1, arr2)
pushMorePeople("g","h","i")*/
//using ... while sending argument to a function
let disp = (x,y,z)=>
{
	alert(x +" "+ y +" " +z)
}
let x = [3,5,7]
disp(...x) // array x is converted into csv and passed as argument
