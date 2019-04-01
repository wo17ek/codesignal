/* Easy
	Call two arms equally strong if the heaviest weights they each are able to lift are equal.
	Call two people equally strong if their strongest arms are equally strong 
	(the strongest arm can be both the right and the left), and so are their weakest arms.
	Given your and your friend's arms' lifting capabilities find out if you two are equally strong.
*/

function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    return yourLeft > yourRight ? (yourLeft === friendsLeft || yourLeft === friendsRight) && 
	(yourRight === friendsLeft || yourRight === friendsRight) ? true : false : 
	(yourRight === friendsLeft || yourRight === friendsRight) && (yourLeft === friendsLeft || yourLeft === friendsRight) ? true : false;
}