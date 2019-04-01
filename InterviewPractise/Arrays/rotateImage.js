/* Easy
	Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.
	You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).
*/

function rotateImage(a) {	
	const arr = [];
	let leftIdx = 0, rightIdx = 0;
	for(let i = 0; i < a.length; i++)
		arr[i] = new Array(a.length);
	for(let i = 0; i < ~~((a.length + 1) / 2); i++) {
		leftIdx = i;
		rightIdx = a.length - i - 1;
		for(let j = 0; j <= rightIdx; j++) {
			arr[leftIdx][leftIdx + j] = a[rightIdx - j][leftIdx];
			arr[rightIdx - j][leftIdx] = a[rightIdx][rightIdx - j];
			arr[rightIdx][rightIdx - j] = a[leftIdx + j][rightIdx];
			arr[leftIdx + j][rightIdx] = a[leftIdx][leftIdx + j]; 		
		}							
	}
	return arr;
}
