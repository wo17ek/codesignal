/* Easy
	Given a binary tree t, determine whether it is symmetric around its center, i.e. each side mirrors the other.
*/

//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function isTreeSymmetric(t) {
    let symetricOfTree = true;
    const throughTree = function(left, right) {
        if(!left && !right);
        else if((!left || !right) || (left.value !== right.value)) symetricOfTree = false;  
        if(!left.left && right.right || left.left && !right.right) symetricOfTree = false;
        if(left.left && right.right) throughTree(left.left, right.right);
        if(left.right && right.left) throughTree(left.right, right.left);
    }
           
    if(!t) return true;
    if(!t.left && t.right || !t.right && t.left) return false;
    else throughTree(t.left, t.right);
    
    return symetricOfTree;
}
