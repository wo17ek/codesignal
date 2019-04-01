/* Hard
	Note: Your solution should have O(n) time complexity, where n is the number of elements in l, and O(1) additional space complexity, since this is what you would be asked to accomplish in an interview.
	Given a linked list l, reverse its nodes k at a time and return the modified list. k is a positive integer that is less than or equal to the length of l. If the number of nodes in the linked list is not a multiple of k, 
	then the nodes that are left out at the end should remain as-is.
	You may not alter the values in the nodes - only the nodes themselves can be changed.
*/

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function reverseNodesInKGroups(l, k) {
    let numberOfElements = 0, counter = 0, localCounter = 1,
        element = l, currentElement = l,
        head = l, currentHead = l, currentTail = l;
        isHeadSet = false;
    while(element !== null) {
        numberOfElements++;        
        element = element.next;
        if(element === null) break;
    } 
    if(numberOfElements < k || k === 1) return l;
    element = l;
    while(counter + k <= numberOfElements) {
        while(localCounter++ < k) {
            currentElement = element.next;
            element.next = currentElement.next;
            currentElement.next = currentHead;
            currentHead = currentElement;
        }
        !isHeadSet ? (isHeadSet = true, head = currentElement, currentTail = element) : (currentTail.next = currentElement, currentTail = element); 
        element = element.next;
        currentHead = element;
        counter += k;  
        localCounter = 1;
    }
    return head;
}
