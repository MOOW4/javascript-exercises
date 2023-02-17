const repeatString = function(word, repeat) {

   if(repeat < 0) {
      return 'ERROR';
   }
   
   let new_word = "";
   for (let i = 0; i < repeat; i++){
      new_word = new_word + word;
   }
   
   return new_word;
};

// Do not edit below this line
module.exports = repeatString;