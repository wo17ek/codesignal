/* Easy
	Implement the missing code, denoted by ellipses. You may not modify the pre-existing code.
	A sentence is considered correct if:
	it starts with a capital letter;
	it ends with a full stop, question mark or exclamation point ('.', '?' or '!');
	full stops, question marks and exclamation points don't appear anywhere else in the sentence.
	Given a sentence, return true if it is correct and false otherwise.
*/

function isSentenceCorrect(sentence) {
  var re = /^[A-Z]{1}([\?\.\!]{1}$|.[^\?\.\!]*[\?|\.|!]{1}$)/ ;
  return re.test(sentence);
}