/* Easy
	Given a rectangular matrix of characters, add a border of asterisks(*) to it.
*/

function addBorder(picture) {
    let numberOfElements = picture[0].length + 2,
        numberOfRows = picture.length,
        previousRow = "",
        currentRow = "";
    for(let i = 0; i < numberOfRows; i++) {        
        currentRow = picture[i];
        if(i === 0) picture[0] = "*".repeat(numberOfElements);            
        else picture[i] = "*" + previousRow + "*";   
        previousRow = currentRow;
    }
    picture[picture.length] = "*" + previousRow + "*";
    picture[picture.length] = "*".repeat(numberOfElements);
    return picture;
}
