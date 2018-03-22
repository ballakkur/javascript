/*//using object with literal
let firstName = "karthik"
let middleName = "rao"
let lastName = "Ballakkur"
let myObj = {firstName,middleName,lastName} //here names are already a key value pair so object is defined by 
											//variables rather than redefining like this : firstName: firstName
console.log(myObj)*/
//intoduction to method
//when a function is declared inside an object it is called a method
/*let actualPrice = 100
let discount =10
let price = {
	actualPrice,
	discount,
toDisplay()
{

	console.log("after discount "+ " " + ((actualPrice) - (actualPrice*price.discount)/100))
}
}


console.log(price.actualPrice)
price.toDisplay()*/
let key = "some kry"
let value = "some value"
let myObj ={
	[key]:[value]  //elements inside an object should always be a key value pair if I use [] for 
					//key it will point to actual value of the key and if I use [] for value it
					// will put the value in an array
}
console.log(myObj);