var myarray =["nigga1", "nigga2","nigga3","nigga4","nigga5"]
var key = window.prompt("enter the nigga u wanna find");
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
	"name" :"nigga",
	"age"	:"nigga1",
	"height":66,
	"description": "im a mofo nigga"
}
for(x in myobject)
{
	alert("dont be a nigga " +(myobject[x]))
}