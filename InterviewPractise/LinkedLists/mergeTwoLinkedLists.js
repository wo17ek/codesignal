/* Medium
	Note: Your solution should have O(l1.length + l2.length) time complexity, since this is what you will be asked to accomplish in an interview.
	Given two singly linked lists sorted in non-decreasing order, your task is to merge them. In other words, return a singly linked list, also sorted in non-decreasing order, that contains the elements from both original lists.
*/

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function mergeTwoLinkedLists(l1, l2) {
    let l3 = new ListNode(0), outputList = l3;
    if(l1 === null && l2 === null) return null;
    else if(l1 === null) return l2;
    else if(l2 === null) return l1;
    while(true) {
        if(l1.value === "end" || l1.value > l2.value) {
            l3.value = l2.value;
            if(l2.next !== null) {
                l2 = l2.next;
            } else l2.value = "end";
        } else if(l2.value === "end" || l1.value <= l2.value) {
            l3.value = l1.value;
            if(l1.next !== null) {
                l1 = l1.next;
            } else l1.value = "end";
        }  
        if(l1.value === "end" && l2.value === "end") break;
        l3.next = new ListNode(0);
        l3 = l3.next;
    }
    return outputList;
}
