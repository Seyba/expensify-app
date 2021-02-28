const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('System is down');
    },9000)
})
console.log('before');
promise.then((data) => {
    console.log(data)
}).catch((error) =>{console.log(error, 'something went wrong')})
console.log('after');
