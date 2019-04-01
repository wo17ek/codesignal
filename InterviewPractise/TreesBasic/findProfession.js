/* Easy
	Consider a special family of Engineers and Doctors. This family has the following rules:
	Everybody has two children.
	The first child of an Engineer is an Engineer and the second child is a Doctor.
	The first child of a Doctor is a Doctor and the second child is an Engineer.
	All generations of Doctors and Engineers start with an Engineer.
*/

function findProfession(level, pos) {
    let prof = 1;
    while(level > 0) {
        if(pos > Math.pow(2, level) / 2) {
            pos = pos - Math.pow(2, level) / 2;
            prof *= -1;
        }
        level--;
    }     
    return prof === 1 ? "Engineer" : "Doctor";
}
