// ##grade.js
// Output the following code from a variable with with a code 
// returns grade for the score, either "A", "B", "C", "D", or "F".
   
	function gradeToNum(num) {
		var gradeLetter = ""
		;

		switch(true)
		{
			case (num <= 0):
				gradeLetter = "What are you trying here?";
				break;

			case ((num >= 1) && (num <= 59)):
				gradeLetter = "A big fat F";
				break;

			case ((num >= 60) && (num <= 69)):
				gradeLetter = "Uhh..no way, dude..D?";
				break;

			case ((num >= 70) && (num <= 79)):
				gradeLetter = "You're doing okay, cool C";
				break;

			case ((num >= 80) && (num <= 89)):
				gradeLetter = "Not bad! Beautiful B";
				break;

			case ((num >= 90) && (num <= 100)):
			  gradeLetter = "wow! Awesome A!";
			  break;

			default:
				gradeLetter = "Umm..1-100 okay?"
				break;
		}

		return gradeLetter;
	}

	console.log(gradeToNum(90))