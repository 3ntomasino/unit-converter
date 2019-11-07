var cupToTablespoon = function(cup) {
	return cup*16;
};

var teaspoonToTablespoon = function(teaspoon) {
	return teaspoon/3;
}

var tablespoonToCup = function(tablespoon) {
	return tablespoon/16;
}

var gallonsToLiters = function(gallons) {
	return gallons/3.78541;
}

var cup = parseInt(prompt("how many cups does the recipe call for?"))
alert(cupToTablespoon(cup));
