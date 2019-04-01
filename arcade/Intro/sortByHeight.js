/* Easy
	Some people are standing in a row in a park. There are trees between them which cannot be moved. 
	Your task is to rearrange the people by their heights in a non-descending order without moving the trees. 
	People can be very tall!
*/

function sortByHeight(a) {
    for(let i = 0; i < a.length; i++)
        if(a[i] !== -1)
            for(let j = i + 1; j < a.length; j++)
                if(a[j] !== -1)
                    if(a[i] > a[j]) {
                        a[i] ^= a[j];
                        a[j] ^= a[i];
                        a[i] ^= a[j];
                    } 
    return a;
}