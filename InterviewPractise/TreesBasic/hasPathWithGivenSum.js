/* Easy
	Given a binary tree t and an integer s, determine whether there is a root to leaf path in t such that the sum of vertex values equals s.
*/

//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
let hasPath = false;
function hasPathWithGivenSum(t, s) {
    if(t === null) return false;
    if(t.left === null && t.right === null && s - t.value === 0) hasPath = true;
    if(t.left !== null) hasPathWithGivenSum(t.left, s - t.value);
    if(t.right !== null) hasPathWithGivenSum(t.right, s - t.value);    
    
    return hasPath;
}
