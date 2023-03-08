function reverse_string(old_str){
    let new_string = "";
    for(let i = old_str.length - 1; i >= 0; i--){
        new_string += old_str[i];
    }
    return new_string;
}
function charIsLetter(char){
    return (/[a-zA-Z]/).test(char);
}

const palindromes = function (string) {
    /*
    let reversed_string = reverse_string(string);
    console.log(reversed_string);
    if (reversed_string === string){
        return true;
    }
    return false;
    */
    string = string.toLowerCase();
    string = string.split(' ').join('');
    string = string.split(',').join('');
    
    let count = 0;
    console.log(string);
    for(let i = string.length - 1; i >= 0; i--){
        console.log(string[i]);
        if( charIsLetter(string[i]) ){
            console.log(string[i],string[string.length-1 - i - count] );
            if(string[i] != string[(string.length-1 - count) - i]){
                return false;
            }
        }
        else{
            count++;
        }
    
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
