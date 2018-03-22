var myarray =["nig1", "nig2","nig3","nig4","nig5"]
var key = window.prompt("enter the nig u wanna find");
for(var i=0; i<myarray.length ; i++)
{
	if(myarray[i]==key)
	{
		alert("element found in position "+ (Number(i)+1));
		break;
	}
}
//for in loop for objects. Advantage is that u dont need to know the element 
var myobject ={
	"name" :"nig",
	"age"	:"nig1",
	"height":66,
	"description": "im a nig"
}
for(x in myobject)
{
	alert("dont be a nig " +(myobject[x]))
}