document.getElementById('palindrome-true').style.display = 'none';
document.getElementById('palindrome-false').style.display = 'none'; /* lines 1-2 sets the results to display: none on default*/

document.getElementById('word-input-form-text').addEventListener('keyup', inputEvent); /* binds an event onkeyup when typing on the textbox 
																						  keyup vs press vs down in docs */

function inputEvent(event) {
	var keyCode = event.keyCode; /* takes the keycode of the pressed button, and sets it to the keyCode variable */
	let inputString = document.getElementById('word-input-form-text').value; /* takes the input values on the textbox as inputString */

	if(keyCode !== 13){
		document.getElementById('palindrome-true').style.display = 'none';
		document.getElementById('palindrome-false').style.display = 'none';
		/* lines 11-15 states that when any button that isn't Enter is pressed on the keyboard, the results will be cleared from the
		   user interface */
		/* the reason Enter is excluded is because it also acts as a submit button, an alternative to the button shown on the UI */
	};
};

var palindromeForm = document.getElementById('word-input-form');
palindromeForm.addEventListener('submit', palindromeCheck); /* lines 20-21 takes the entire form element that includes both the textbox
															   and the submit button, and then sets a submit event to it. reason behind 
															   taking the entire form element in docs */

function palindromeCheck(event) {
	event.preventDefault();

	let inputString = document.getElementById('word-input-form-text').value; /* takes the input values on the textbox as inputString */
	var inputRegex = /[a-z0-9]+/gi; /* sets the following regex to the variable inputRegex
									   the regex means:
									   - [a-z0-9] -> any character that falls under a to z and 0 to 9 will be matched
									   - + -> matches 1 or more of the preceding condition and matches it as one match
									   without the +, while the regex will still match the characters, it will match each character
									   individually, whereas with the + it will match the entire word as one
									   normally, a + sign will only match if the two or more of the same characters are adjacent to
									   each other, but since the + sign is placed after a character group, it will match any character
									   even if it's different from the character adjacent to it as long as it's inside the character
									   group
									   example:
									   /a+/ would only match 'aa' and not 'ab'
									   /az+/ would match 'az' and 'azzz' as one character, but not 'ab' 
									   /[a-z]+/ would match 'aa', 'ab', and 'azzz' 
									   - gi -> these are flags
									   - g means global which means it will match everything that fits the
									   regex criteria. without this it will only match the first character/s that fit the criteria 
									   in the string
									   - i means case-insensitive, which means it will match any case. example, while only a-z is defined
									   in the regex, it will still match both 'A' and 'a" */
	var regexString = inputString.match(inputRegex); /* takes the value returned by the regex, and then sets it to the variable regexString
													    essentially what this does is return a version of the input without whitespaces and
													    special symbols. */
	var newString = regexString.reduce((a, b) => a + b); /* reduces the value of the array into one value 
															using 'a' and 'b' as parameters, it adds the initialValue ('a') to the second
															value ('b') from left to right until only one value remains
															so for example, in the array ['Never', 'odd', 'or', 'even'], it will take the
															initialValue 'Never' and add that to the value on its right (odd). Now the
															string 'Neverodd' will be formed, which will now be the initialValue and then
															also added to the value to its right until it finishes and forms the string
															'Neveroddoreven' */
	var newLowerString = newString.toLowerCase(); /* sets all the letters of the string to lowercase. Using the previous example,
												     'Neveroddoreven' will now become 'neveroddoreven' */

	//CONVERT WORD TO ITS REVERSE FORM
	var newStringSplit = newString.split(''); /* splits the string into an array, each character is one value in the string */
	var newStringReverse = newStringSplit.reverse(); /* reverses the order of the array */
	var newStringJoin = newStringReverse.join(); /* joins the array into one as a string */
	var palindromeRegex = /[a-z0-9]+/gi;
	var palindromeString = newStringJoin.match(palindromeRegex);
	var newPalindromeString = palindromeString.reduce((a, b) => a + b);
	var newPalindromeLowerString = newPalindromeString.toLowerCase(); /* lines 67-70 is the same as 28-60 */

	//CHECK IF REVERSE FORM IS = THE INITIAL WORD
	if(newLowerString == newPalindromeLowerString) {
		document.getElementById('palindrome-true').style.display = "inline";
		document.getElementById('palindrome-false').style.display = "none";
		/* if the input string is equal to the reversed string, display true */
	}
	else {
		document.getElementById('palindrome-true').style.display = "none";
		document.getElementById('palindrome-false').style.display = "inline";
		/* if the input string is not equal to the reversed string, display false */
	};
}

	





