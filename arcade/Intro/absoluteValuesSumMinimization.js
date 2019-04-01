/* Medium
	Given a sorted array of integers a, find an integer x from a such that the value of	
	abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
	is the smallest possible (here abs denotes the absolute value).
	If there are several possible answers, output the smallest one.
*/

function absoluteValuesSumMinimization(a) {
    return a.length % 2 === 0 ? a[a.length / 2 - 1] : a[~~(a.length / 2)];
}