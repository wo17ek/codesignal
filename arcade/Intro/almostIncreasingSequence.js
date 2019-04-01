/* Easy
	Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing 
	sequence by removing no more than one element from the array.
	Note: sequence a0, a1, ..., an is considered to be a strictly increasing 
	if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.
*/

function almostIncreasingSequence(sequence) { 
    let summary = 0;
    for(let i = 0; i < sequence.length - 1; i++)
        if(sequence[i] >= sequence[i + 1]) {
            summary++;  
            if(sequence[i] >= sequence[i + 2]) {                
                if(sequence[i + 1] <= sequence[i - 1]) summary++;
            }
        }        
        if(summary > 1) return false;  
    return true; 
}
