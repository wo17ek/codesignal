/* Easy
	Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, 
	each statue having an non-negative integer size. Since he likes to make things perfect, 
	he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. 
	He may need some additional statues to be able to accomplish that. 
	Help him figure out the minimum number of additional statues needed.
*/

function makeArrayConsecutive2(statues) {
    let sumOfAdditionalStatues = 0;
    for(let i = 1; i < statues.length; i++)
        for(let j = i; j > 0; j--)
            if(statues[j] < statues[j - 1]) {
                statues[j] = statues[j] ^ statues[j - 1];
                statues[j - 1] = statues[j] ^ statues[j - 1];
                statues[j] = statues[j - 1] ^ statues[j];
            }
    for(let i = 0; i < statues.length - 1; i++)
        if(statues[i + 1] - statues[i] !== 1) sumOfAdditionalStatues += statues[i + 1] - statues[i] - 1; 
    return sumOfAdditionalStatues;
}

