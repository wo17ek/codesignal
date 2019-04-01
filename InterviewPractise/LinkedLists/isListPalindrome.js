/* Easy
	Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in l, since this is what you'll be asked to do during an interview.
	Given a singly linked list of integers, determine whether or not it's a palindrome.
*/

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
function isListPalindrome(l) {   
    let length = 0, isPalindrome = true;
    const checkList = function(element, idx) {
        if(element !== null) {
            checkList(element.next, ++length);        
            length > 0 ? element.value === l.value ? (l = l.next, length -=2) : isPalindrome = false : '';                                
        }
    }
    checkList(l, 0);
    return isPalindrome ? true : false;
}