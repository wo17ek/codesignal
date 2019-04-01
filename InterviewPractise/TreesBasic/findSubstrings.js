/* Hard
	You have two arrays of strings, words and parts. Return an array that contains the strings from words, modified so that any occurrences of the substrings from parts are surrounded by square brackets [], following these guidelines:
	If several parts substrings occur in one string in words, choose the longest one. If there is still more than one such part, then choose the one that appears first in the string.
*/

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(value) {
        let current = this.root;
        for(let levelOfNode = 0; levelOfNode < value.length; levelOfNode++) {
            if(!current.isChild(value[levelOfNode])) 
                current.addChild(value[levelOfNode]);      
            current = current.getChild(value[levelOfNode]);
        }
        current.setLeafNode(true);
    }
    
    surroundMaxSubstringWithBracket(word) {
        const substring = this.searchForMaxSubstring(word);
        return substring.length === 0 ? word : word.replace(substring, '[' + substring + ']');
    }
                          
    searchForMaxSubstring(word) {
        let current, substring = "", currentSubstring = "", lengthOfMaxSubstring = 0, lengthOfCurrentMaxSubstring = 0;
        for(let i = 0, j; i < word.length; i++) {
            current = this.root;
            lengthOfCurrentMaxSubstring = 0;
            currentSubstring = "";
            for(let j = i; current.isChild(word[j]); j++) {
                currentSubstring += current.getValueOfChild(word[j]);
                lengthOfCurrentMaxSubstring++;
                current = current.getChild(word[j]);
                if(current.isLeafNode(word[j])) {
                    if(lengthOfMaxSubstring < lengthOfCurrentMaxSubstring) {
                        lengthOfMaxSubstring = lengthOfCurrentMaxSubstring;
                        substring = currentSubstring;
                    }
                }
            }
        }
        return substring;        
    }
}
  
class TrieNode {
    constructor() {
        this.children = [];
        this.leafNode = false;
        this.value = null;
    }
    
    getChild(key) {
        return this.children[key];
    }
    
    getValueOfChild(key) {
        return this.children[key].value;
    }
    
    setLeafNode(value) {
        this.leafNode = value; 
    }
    
    addChild(value) {
        this.children[value] = new TrieNode();
        this.children[value].value = value;
    }
    
    isChild(key) {
        return this.children[key] instanceof TrieNode;
    }
    
    isLeafNode() {
        return this.leafNode;
    }
}

function findSubstrings(words, parts) {
    const trie = new Trie();
    for(let i = 0; i < parts.length; i++) 
        trie.insert(parts[i]);   
    for(let i = 0; i < words.length; i++) 
        words[i] = trie.surroundMaxSubstringWithBracket(words[i]);
    return words;
}