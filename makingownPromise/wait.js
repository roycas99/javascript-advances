const wait = (time) => {
return new Promise((resolve,reject) => { 
    if(time <= 0){
        reject(new Error("less time"));
        return;
    }

    setTimeout(() => {
        resolve();
    }, time);
} )
}

wait(000).then(() => {
    console.log(`we have waited  1s `);}).catch(function(error){
        console.log(`there was error: ${error.message}`);
    });