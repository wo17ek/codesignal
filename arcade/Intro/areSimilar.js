/* Medium
	Two arrays are called similar if one can be obtained from another 
	by swapping at most one pair of elements in one of the arrays.
	Given two arrays a and b, check whether they are similar.
*/

function areSimilar(a, b) {
    let isStillPossibleToBeSimilar = true, index = -1;
    for(let i = 0; i < a.length; i++)
        if(a[i] !== b[i]) {
            if(!isStillPossibleToBeSimilar) return false;
            if(index === -1) 
                index = i;            
            else
                if(a[index] === b[i] && a[i] === b[index]) 
                    isStillPossibleToBeSimilar = false;
                else return false
        }
    return true;
}
