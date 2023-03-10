var x = prompt("Choose a number from 1-6");
if(x < 1 || x > 6){
	document.writeln("<h1>Error: No input or incorrect input</h1>");
}else{
	document.writeln("You have chosen " + x + ".");
	if(x == 3){
		document.writeln("<h4>Your chosen number is equal to 3</h4>");
	}else if(x > 3){
		document.writeln("<h4>Your chosen number is greater than 3</h4>");
	}else{
		document.writeln("<h4>Your chosen number is less than 3</h4>");
	}
}
var months = 9;
switch(months){
	case 1:
		months = "January";
		break;
	case 2:
		months = "February";
		break;
	case 3:
		months = "March";
		break;
	case 4:
		months = "April";
		break;
	case 5:
		months = "May";
		break;
	case 6:
		months = "June";
		break;
	case 7:
		months = "July";
		break;
	case 8:
		months = "August";
		break;
	case 9:
		months = "September";
		break;
	case 10:
		months = "October";
		break;
	case 11:
		months = "November";
		break;
	case 12:
		months = "December";
		break;
	default:
		months = "Invalid Value"
		break;
}
document.writeln(months);