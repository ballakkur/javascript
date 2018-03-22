// let and const and arrow function, default parameter,
/*let changeToUpperCase = (str ="U r supposedto enter a string -_-") =>
{
	return str.toUpperCase();
}
alert(changeToUpperCase());*/
// rest and spread
let adressesAndId = [];
let userAdress = (id, ...address) =>
{
/*console.log(id)
console.log(address)*/
	let temp = {
					id:id,address:address
				}
	adressesAndId.push(temp);

}
userAdress("1", {
					"house no" :"1-310",
					"street name":"valla",
					"city":"valerian",
					"state":"kings landing"
},{
	"house no" :"2-310",
					"street name":"shivalli",
					"city":"satan city",
					"state":"dbz"
},"check if this is added to ... array")
console.log(adressesAndId);