import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN, 
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE.MEASUREMENT_ID
};
// Initialize Firebase
firebase.initializeApp(config);
//firebase.analytics();

const database = firebase.database();

export { firebase, database as default};

//const expenses = database.ref('expenses');
//const notes = database.ref('notes');

// database.ref('expenses').push({
//     description: 'Apple watch',
//     note: 'gift',
//     amount: 340000,
//     createdAt: 348848483
// })

// trigger when data change
// expenses.on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

//trigger when new entry detected 
// expenses.on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })


// trigger when data is removed
// expenses.on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })



// 
//
// creating data in firebase
//

// database.ref('expenses').push({
//     description: 'Apple watch',
//     note: 'gift',
//     amount: 340000,
//     createdAt: 348848483
// })

// database.ref('expenses').push({
//     description: 'Lapto',
//     note: '',
//     amount: 49500,
//     createdAt: 348822483
// })

//
// reading data from firebase
//

// expenses.on('value', (snapshot) => {
//     const expensesArray = [];
//     snapshot.forEach((childSnap) => {
//         expensesArray.push({
//             id: childSnap.key,
//             ...childSnap.val()
//         })
//     })
//     console.log(expensesArray)
// }, (e) => {
//     console.log('data fetching failed!!!')
// })


// expenses.once('value').then((snapshot) => {
//     const expensesArray = [];
//     snapshot.forEach((childSnap) => {
//         expensesArray.push({
//             id: childSnap.key,
//             ...childSnap.val()
//         })
//     })
//     console.log(expensesArray)
// })

// database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(val)
// }, (e) => {
//     console.log('unable to fetch data', e)
// })

// const onValueChange = database.ref().on('value',(snapshot) => {
//     console.log(snapshot.val())
// }, (e) => {
//     console.log('data fetching failed!!!')
// })

// setTimeout(() => {
//     database.ref('data/users/owner').set({age: 40})
// }, 3500)

// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 4000)

// setTimeout(() => {
//     database.ref('data/users/owner').set({age: 59})
// }, 10000)

// database.ref('data/users/owner').set({
//     name: 'Mahamadou Tirera',
//     age: 37,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Lyft'
//     },
//     location: {
//         city: 'New York City',
//         country: 'USA'
//     }
// }).then(() => {
//     console.log('data save in owner field')
// }).catch((e) =>{
//     console.log('data saving failed', e)
// })

// //
// // updating data
// //

// const ownerfield = database.ref('data/users/owner');

// ownerfield.update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seatle',
//     'location/weather': 'hot'

// }).then(() => {
//     console.log('change successfully made into this field')
// }).catch((e) => {
//     console.log('unable to make update', e)
// })

// users.set({
//     email: 'moussa@gmail.com',
//     password: 'diekej3440f0333r'
// }).then(()=> {
//     console.log('user saved')
// }).catch((e) => {
//     console.log('failed')
// })
// email.set(null).then(() => {
//     console.log('data successfully removed')
// }).catch((e) => {
//     console.log('data not found', e)
// })