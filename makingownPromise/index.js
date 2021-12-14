// function divide (a,b) {
//     return a/ b;
// }

// console.log(divide(10,5));

// lets change this function into promise
function divide (a,b) {
   return new Promise((resolve, reject) => {

    if(b===0){
        reject("Zero division");
        return;  // for early exit
    }

     resolve(a/b);   

    })
}

divide(10,-2).then((result) => {
    console.log(`Division success: ${result}`);
}).catch((error) => {
    console.log(`there was error: ${error}`);
})