console.log('destructuring running');
// const person = {
//     userName: 'mamadou Tirera',
//     age: 34,
//     location: {
//         city: 'Bronx',
//         temp: 20
//     }
// }
// const user = {
//     email: 'mohmo@yahoo.com',
//     password: 'eiutudkjfhgjdlskd',
//     role: {
//         visitor: 'temporary',
//         authorized: 'false'
//     }
// }
// const {userName, location, age } = person 
// console.log(`${userName} is ${age}`);

// const {email: mail, password} = user
// const {visitor, authorized} = user.role


// const {city, temp} = person.location
// if(person.location.city && person.location.temp) {
//     console.log(`It's ${temp} in ${city}`)
// }
// console.log(`${mail} ${password}, you are ${visitor} and ${authorized}`)

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'penguin'
//     }
// }

// const { name : publisherName = 'self-published'} = book.publisher;

// console.log(`${publisherName}`)

//
// Array destructuring
//
// const address = ['1090 Hennessy Pl', 'Bronx', 'NY', '10453'];
// const [street, city, state, zip] = address;
// console.log(`You are in ${city} on ${street}`)

const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75']
const [coffee,,price] = item;
console.log(`A medium ${coffee} costs ${price}`);