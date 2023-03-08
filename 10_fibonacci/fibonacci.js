const fibonacci = function(num) {
    if(num < 0){
        return "OOPS"
    }
    
    let x = 1;
    let y = 1;
    let temp = 0;
    for(let i = 0; i < num - 2; i++){
        temp = y;
        y = x + temp;
        x = temp;
    }
    return y;
};

// Do not edit below this line
module.exports = fibonacci;
