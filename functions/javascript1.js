// login page
var users = [
	{
		"email":"kart@gmail.com",
		"password":"82ggr1114gmail",
		"nemesis" :"a",
		"name" :"b",
		"age" :22,
		"description":"jobless bitch"
	},
	{	"email":"edwisor@gmail.com",
		"password":"82gg111edwisor",
		"nemesis" :"b",
		"name":"c",
		"age":23,
		"description":"jobless mofo"
	},
	{	"email":"fake@gmail.com",
		"password":"82ggr111fake",
		"nemesis" :"c",
		"name" :"d",
		"age" :24,
		"description":"jobless bitching nigga"
	}
]
//defining a function that accepts email and password for cross check
var parse = function (users,email,password)
{	passcorrect=false;
	emcorrect =false
	for(eachuser in users)
	{	
		console.log(eachuser)
		if (users[eachuser].email == email)
		{
			if(users[eachuser].password == password)
			{
				passcorrect=true;
				emcorrect=true;
				break;
			}
			else
			{
				emcorrect=true;
				break;
			}
		}
		else
		{
			
		}
		
	}
	if(passcorrect==true && emcorrect==true)
	{
			alert("u r now logged in");
	}
	else if(emcorrect==false)
	{
		alert("please enter a valid email")
	}
	else{
		alert("incorrect password")
	}
}
var email =prompt("enter the email")
var password=prompt("enter the password")
parse(users,email,password)
