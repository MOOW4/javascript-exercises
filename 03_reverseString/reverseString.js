const reverseString = function(str) {
   let result = "";
   let split_arr = str.split(' ');

   for(let i = split_arr.length-1; i >= 0; i--){
      let word = split_arr[i];
      for(let j = (word.length - 1); j >= 0; j--){

         result += word[j];
      }
      if (split_arr.length > 1 && i != 0){
         result += ' ';
      }
   } 
   return result;
};

// Do not edit below this line
module.exports = reverseString;
