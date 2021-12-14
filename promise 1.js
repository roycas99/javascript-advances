 let p = new Promise((resolve,reject) => {
     setTimeout(() => {
         resolve(10);
    }, 100);
 });
// p.then((result) => {
//     console.log(result);  // 10
//     return result * 2;
// }).then((result) => {
//     console.log(result);  // 20
//     return result *3;
// })

// When you call the then() method multiple times on a promise, it is not promise chaining. 
const r = (result) => {
    console.log(result);
    return result * 2;
};
p.then(r);
p.then(r);
p.then(r).then(r);

//  Promise chaining syntax

const getUser = (userId) => {
    return new Promise((resolve,reject) => {
        console.log("getting the user from the database");
        setTimeout(() => {
            resolve({
                userId: userId,
                username: 'admin'
            });
        }, 1000);

    });

}

function getServices(user) {
    return new Promise((resolve, reject) => {
        console.log(`Get the services of ${user.username} from the API.`);
        setTimeout(() => {
            resolve(['Email', 'VPN', 'CDN']);
        }, 3 * 1000);
    });
}

function getServiceCost(services) {
    return new Promise((resolve, reject) => {
        console.log(`Calculate the service cost of ${services}.`);
        setTimeout(() => {
            resolve(services.length * 100);
        }, 2 * 1000);
    });
}

getUser(100)
    .then(getServices)
    .then(getServiceCost)
    .then(console.log);