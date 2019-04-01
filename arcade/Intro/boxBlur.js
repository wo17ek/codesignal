/* Medium
	Last night you partied a little too hard. Now there's a black and white photo of you that's about to go viral! 
	You can't let this ruin your reputation, so you want to apply the box blur algorithm to the photo to hide its content.

	The pixels in the input image are represented as integers. 
	The algorithm distorts the input image in the following way: Every pixel x in the output image has a value 
	equal to the average value of the pixel values from the 3 × 3 square that has its center at x, 
	including x itself. All the pixels on the border of x are then removed.
	Return the blurred image as an integer, with the fractions rounded down.
*/

function boxBlur(image) {
    const arr = [];
    for(let i = 0; i < image.length - 3 + 1; i++) {
        arr[i] = new Array(image[0].length - 3 + 1);
        for(let j = 0; j < image[0].length - 3 + 1; j++) {
            arr[i][j] = ~~((image[i][j] + image[i][j + 1] + image[i][j + 2] + image[i + 1][j] + 
            image[i + 1][j + 1] + image[i + 1][j + 2] + image[i + 2][j] + image[i + 2][j + 1] + image[i + 2][j + 2]) / 9);        
        }
    }
    return arr;
}
