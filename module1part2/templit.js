/*let generateString = (name,str) =>
{
	console.log(`${name +1} is my name and , this is what I would like to say to u \n  ${str} bitch`)
}
generateString("karthik","wtf")*/
/*for of loop and for in loop
for of loop is mostly used for arrays and for in loop is mostly used for object*/
let myarr = [{name:"kart",age:23},{name:"ka",age:20}]
for(x of myarr) // here x is object inside array
{
	console.log(x)
}
for(x in myarr) // here x is index of object inside array
{
	console.log(x)
}
let myObj ={key:"jaja",bool:true,num:1}
for(x in myObj)
{
	console.log(x) //here x is element of object
}
