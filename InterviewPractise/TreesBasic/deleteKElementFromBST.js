/* Medium
	A tree is considered a binary search tree (BST) if for each of its nodes the following is true:
	The left subtree of a node contains only nodes with keys less than the node's key.
	The right subtree of a node contains only nodes with keys greater than the node's key.
	Both the left and the right subtrees must also be binary search trees.
	Removing a value x from a BST t is done in the following way:
	If there is no x in t, nothing happens;
	Otherwise, let t' be a subtree of t such that t'.value = x.
	If t' has a left subtree, remove the rightmost node from it and put it at the root of t';
	Otherwise, remove the root of t' and its right subtree becomes the new t's root.
*/

function deleteKElementFromBST(tree, k) {
    if(!tree) return tree;
    if(tree.value === k) {
        if(tree.left) {           
        } else {
            return tree.right;
        }
    } else {
        tree.left = deleteKElementFromBST(tree.left, k);
        tree.right = deleteKElementFromBST(tree.right, k);
    }
    return tree;
}

function deleteFromBST(t, queries) {
    for(let i = 0; i < queries.length; i++) {
        t = deleteKElementFromBST(t, queries[i]);
    }       
    return t;
}
