const removeFromArray = function(arr, remove) {
   //array.splice(1,1)
   let args = Array.from(arguments);

   for(let j = 1; j < args.length; j++){
      for(let i = 0; i < arr.length; i++){
         if(arr[i] === args[j]){
            arr.splice(i,1);
         }
      }
   }
   return arr;

};

// Do not edit below this line
module.exports = removeFromArray;
