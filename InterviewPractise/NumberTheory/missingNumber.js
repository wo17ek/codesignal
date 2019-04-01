/* Easy
	You are supposed to label a bunch of boxes with numbers from 0 to n, and all the labels are stored in the array arr. Unfortunately one of the labels is missing. Your task is to find it.
*/

function missingNumber(arr) {
    let sumOfN = arr.length * (arr.length + 1) / 2, sumOfArr = 0;
    for(let i = 0; i < arr.length; i++)
        sumOfArr += arr[i];
    return sumOfN - sumOfArr;
}
