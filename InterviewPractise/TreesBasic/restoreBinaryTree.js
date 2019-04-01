/* Hard
	Note: Your solution should have O(inorder.length) time complexity, since this is what you will be asked to accomplish in an interview.
	Let's define inorder and preorder traversals of a binary tree as follows:
	Inorder traversal first visits the left subtree, then the root, then its right subtree;
	Preorder traversal first visits the root, then its left subtree, then its right subtree.
	For example, if tree looks like this:
*/

function restoreBinaryTree(inorder, preorder) {
    if(inorder.length === 0) return null;
    const node = new Tree(preorder[0]);
    let indexOfDivision = inorder.indexOf(preorder[0]);    
    node.left = restoreBinaryTree(inorder.slice(0, indexOfDivision), preorder.slice(1, indexOfDivision + 1));    
    node.right = restoreBinaryTree(inorder.slice(indexOfDivision + 1, inorder.length++), preorder.slice(indexOfDivision + 1, preorder.length++));
    return node;
}
