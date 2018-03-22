//program to check if you toped the exam or not
var myMarks = window.prompt('enter your score')
	
 if ( myMarks <0 || myMarks > 100 || myMarks == null || myMarks == undefined || myMarks == '')
{
	alert("please enter a valid input");
}
 else if  (myMarks >= 90 ) 
 		alert("topper")
		else if(myMarks>=0)
			alert("u r not a topper");
	