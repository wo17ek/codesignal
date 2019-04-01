/* Medium
	In the popular Minesweeper game you have a board with some mines and those cells that don't contain 
	a mine have a number in it that indicates the total number of mines in the neighboring cells. 
	Starting off with some arrangement of mines we want to create a Minesweeper game setup.
*/

function minesweeper(matrix) {
    let rows = matrix.length, columns = matrix[0].length, arr = [];  
    for(let i = 0; i < rows; i++) {
        arr[i] = [];
        for(let j = 0; j < columns; j++) {
            if(i % (rows - 1) === 0) {
                if(j % (columns - 1) === 0)
                    arr[i][j] = ~~matrix[i][Math.abs(1 - j % columns)] + ~~matrix[Math.abs(1 - i % rows)][j] + 
                        ~~matrix[Math.abs(1 - i % rows)][Math.abs(1 - j % columns)];
                else
                    arr[i][j] = ~~matrix[i][j - 1] + ~~matrix[i][j + 1] + ~~matrix[Math.abs(1 - i % rows)][j - 1] + 
                        ~~matrix[Math.abs(1 - i % rows)][j] + ~~matrix[Math.abs(1 - i % rows)][j + 1];  
            } else {
                if(j % (columns - 1) === 0)
                    arr[i][j] = ~~matrix[i - 1][j] + ~~matrix[i + 1][j] + ~~matrix[i - 1][Math.abs(1 - j % columns)] +
                        ~~matrix[i][Math.abs(1 - j % columns)] + ~~matrix[i + 1][Math.abs(1 - j % columns)];
                else
                    arr[i][j] = ~~matrix[i - 1][j - 1] + ~~matrix[i - 1][j] + ~~matrix[i - 1][j + 1] + ~~matrix[i][j - 1] + 
                        ~~matrix[i][j + 1] + ~~matrix[i + 1][j - 1] + ~~matrix[i + 1][j] + ~~matrix[i + 1][j + 1];
            }            
        }
    }
    return arr;
}
