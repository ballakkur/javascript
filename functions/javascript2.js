var mystring = "I just wanna tell u that im a nigga with a whore. Hey have u listened to the song nigga nigga nigga nigga nigga nigga, im a hundred percent nigga"
//lenght of the string
var stringsize = mystring.length
alert(stringsize)
//index of a word or a letter
var indexofaletter = mystring.indexOf("nigga")
alert(indexofaletter)
//extract a part of the string
var extractapartofthestring = mystring.slice(indexofaletter,indexofaletter+6)
alert(extractapartofthestring)
alert( mystring.replace("nigga","snowflake"))
//toUppercase and tolowerCase
alert(mystring.toUpperCase())
var anstring ="are u ready?"
var mymerge = mystring.concat(anstring);
alert(mymerge)
//split :converting string into an array
var newstring ="this string is going to be converted into an array"
var convertedString= newstring.split()
alert(convertedString)
alert(Array.isArray(convertedString))
//note: to check if a given variable is array use Array.isArray(//variable here) and for the rest of the datatype use
// typeof(//enter variable here)
