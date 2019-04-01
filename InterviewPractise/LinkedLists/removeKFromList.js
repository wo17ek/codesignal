/* Easy
	Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in the list, since this is what you'll be asked to do during an interview.
	Given a singly linked list of integers l and an integer k, remove all elements from list l that have a value equal to k.
*/

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
    let head = l;
    let prev = l;
    if(l === null) return null;
    while(l.value === k) {
        if(l.next === null) return null;
        l = l.next;
        head = l;         
    }
    while(l !== null) {                
        while(l.value === k) {
            if(l.next === null) {
                prev.next = null;
                return head;
            }
            l = l.next;
            if(l.value !== k) prev.next = l;
        }   
        if(l.value !== k) prev = l;
        l = l.next;    
    }
    return head;
}
