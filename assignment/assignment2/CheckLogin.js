//checkLogin
let checkLogin = (email,password,allUsers)=>
{
	let isUserFound = false
	let passwordCorrect = false
	// assuming allUsers is an array of objects
	for (currentUser in allUsers)
	{
		console.log(currentUser)
		if(allUsers[currentUser]['email'] == email)
		{
			if(allUsers[currentUser]['password'] == password)
			{
				isUserFound = true
				passwordCorrect = true
				break
			}
			else
			{
				isUserFound = true
				passwordCorrect = false
			}
		}
		else
		{
			isUserFound = false
		}
	}
	if(isUserFound == true && passwordCorrect == true)
	{
		alert(`you are logged in`)
	}
	else if (isUserFound == true && passwordCorrect == false) 
	{
		alert(`you have provided incorrect password`)
	}
	else
	{
		alert(`no user with this email found`)
	}
}
/*let obj = [{
	email : "g@gmail.com",
	password :"123"

},
	{
		email: "j@gmail.com",
		password :"132"
	}
]
checkLogin("g@gmail.com","123",obj)*/