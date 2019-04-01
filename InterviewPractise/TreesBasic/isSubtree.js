/* Medium
	Given two binary trees t1 and t2, determine whether the second tree is a subtree of the first tree. A subtree for vertex v in a binary tree t is a tree consisting of v and all its descendants in t. 
	Determine whether or not there is a vertex v (possibly none) in tree t1 such that a subtree for vertex v (possibly empty) in t1 equals t2.
*/

//What we have to do is essentially go through first tree and find all vertex in such a way, 
//that they are equals to the main parent-node of 2nd tree. 
//Next step is to take each of this vertex we've found and check, 
//if all of their child-nodes are equals to the corresponding nodes of 2nd tree.
function isSubtree(t1, t2) {
    let top = 0;
    const arrOfFoundVertex = [],     
    findAllCorrespondingVertex = function(tree, valueOfNode) {
        if(tree && tree.value === valueOfNode) arrOfFoundVertex[top++] = tree;
        if(tree.left) findAllCorrespondingVertex(tree.left, valueOfNode);
        if(tree.right) findAllCorrespondingVertex(tree.right, valueOfNode);
    },      
    checkPossibleSubtree = function(tree, subtree) {   
        let isLeftSubtreeEqual = true, 
            isRightSubtreeEqual = true;
        if(!tree.left && subtree.left || !tree.right && subtree.right || tree.left && !subtree.left || tree.right && !subtree.right) return false;
        if(tree.left && subtree.left) {
            isLeftSubtreeEqual = checkPossibleSubtree(tree.left, subtree.left);
            isLeftSubtreeEqual = isLeftSubtreeEqual && tree.value === subtree.value;
        }
        if(tree.right && subtree.right) {
            isRightSubtreeEqual = checkPossibleSubtree(tree.right, subtree.right);
            isRightSubtreeEqual = isRightSubtreeEqual && tree.value === subtree.value;
        }
        if(!subtree.left && !subtree.right) {
            if(tree.value === subtree.value) return true;
            return false;
        }
        return isLeftSubtreeEqual && isRightSubtreeEqual;
    };    
    if(!t1 && t2) return false;
    if(!t1 && !t2 || t1 && !t2) return true;
    findAllCorrespondingVertex(t1, t2.value);
    while(--top >= 0) {   
        if(checkPossibleSubtree(arrOfFoundVertex[top], t2)) return true;
    }
    return false;
}
