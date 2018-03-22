var promocode = window.prompt("please enter the number of purchases");
if (promocode>3) {
	alert("you are eligible for a promo code");
}
else if(promocode<3)
	alert("you are not eligible for promocode");
else 
	alert("buy one more and u will be eligble for a promo code");