//object
var myfirstobject ={
"myname" : "karthik",
"myage" : "23 and counting",
"mypackage" : 50000,
"ocupation" : "unemplyed",
}
var displayobjectsdatamyname = myfirstobject.myname;
alert(displayobjectsdatamyname);
//array
var myfirstarray =["soccor",4,"cricket","dance"]
var acessarray = myfirstarray[1]+1;
var lengthofarray = myfirstarray.length;
alert(acessarray);
alert(lengthofarray);

//object inside an array
var arrayofobjects = [

{

	"one" : 1,
	"two" : 2,
	"three" : 3
},{
	"aik" : 1,
	"do" :2,
	"theen": 3
},{
	"myname" : "me",
	"hisname" : "he"
	
}

]
var finalvalue = arrayofobjects[1];
var ha =finalvalue.do;
alert(ha);