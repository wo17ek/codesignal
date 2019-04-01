/* Easy
	You're given 2 huge integers represented by linked lists. Each linked list element is a number from 0 to 9999 that represents a number with exactly 4 digits. 
	The represented number might have leading zeros. Your task is to add up these huge integers and return the result in the same format.
*/

// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function addTwoHugeNumbers(a, b) {
    let rest = 0, idx = 0, arrA = [], arrB = [], arrY = [];    
    const transformListToArray = function(list) {
        let arr = [], idx = 0;
        while(list !== null) {
            arr[idx++] = list.value;
            if(list.next === null) break;
            list = list.next;
        }       
        return arr;
    }                        
    arrA = transformListToArray(a); arrB = transformListToArray(b);      
    while(true) {
        if(isNaN(arrA[arrA.length - 1 - idx]) && isNaN(arrB[arrB.length - 1 - idx])) break;
        arrY[idx] = arrA[arrA.length - 1 - idx] + arrB[arrB.length - 1 - idx] + rest;
        arrY[idx] = isNaN(arrY[idx]) ? arrA.length > arrB.length ? arrA[arrA.length - 1 - idx] + rest : arrB[arrB.length - 1 - idx] + rest : arrY[idx]; 
        if(arrY[idx] >= 10000) {
            arrY[idx] = Math.abs(arrY[idx] - 10000);
            rest = 1;
        } 
        else rest = 0;       
        idx++;
    }  
    if(rest > 0) arrY[idx] = 1;
    return arrY.reverse();
}
