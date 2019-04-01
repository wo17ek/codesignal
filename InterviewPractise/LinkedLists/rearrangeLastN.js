/* Hard
	Note: Try to solve this task in O(list size) time using O(1) additional space, since this is what you'll be asked during an interview.
	Given a singly linked list of integers l and a non-negative integer n, move the last n list nodes to the beginning of the linked list.
*/

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function rearrangeLastN(l, n) {
    let counter = 0, currentIdx = 0,
        head = l, element = l,
        currentTail = l, tail = l;
    while(l !== null) {
        counter++;
        tail = l;
        l = l.next;
    }
    l = element;
    if(counter <= n || n === 0) return head;
    while(l !== null) {
        currentIdx++;
        currentTail = l;
        l = l.next;
        if(currentIdx + n === counter) {
            tail.next = head;
            currentTail.next = null;
            head = l;
        }
    }
    return head;
}
