const app = {
    title: 'Shopping Cart',
    subtitle: 'Add items into your shopping cart',
    items: ["kdkd"]
}

const list = app.items.map(item => <li key={item}>{item}</li>)
const size = app.items.length;

const onFormSubmit = (e) => {
    
    e.preventDefault();
    const newEntry = e.target.item.value

    if (newEntry) {
        app.items.push(newEntry);
        e.target.item.value = '';
    }
    console.log(app.items.length)    
}
const onRemoveAll = () => {
    app.items = [];
}

const userName = 'Moussa Camara'
const age = 34
const userLocation = 'New York City'

const user = {
    name: 'John Doe',
    age: 23,
    userLocation: 'Philly'
}

const getLocation = loc => {
    if(loc){
        return <p>Location: {loc}</p>
    }
}


const render =() =>{
    const myTemplate = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>Subtitle: {app.subtitle}</p>}
            {size > 0 ? <p>You have {size} items in your cart: {list}</p>: <p>Your cart is empty</p>}
            <button></button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.items.map(item => <li key={item}>{item}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <label>Item:</label>
                <input type="text" name="item"/>
                <button>Add Item</button>
            </form>
        </div>
    )    
    ReactDOM.render(myTemplate, document.getElementById('root'))

}

const template = (
    <div>
        {user.name?<h1>{user.name}</h1>:<h1>No User!</h1>}
        {user.age <= 17 && <p>Unauthenticated</p>}
        {user.userLocation?<p>Location: {user.userLocation}</p>:<p>No location found!</p>}
        {getLocation(user.userLocation)}
    </div>
)


let count = 0

const addOne = () => {
    console.log('add 1')
}
const minusOne = () =>{
    console.log('minus 1')
}

const reset = () => {
    console.log('reset 0')
}

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <p>Add or remove items into your cart</p>

        <p>Here are your items:</p>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>reset</button>
        <ol>
            <li>Banana</li>
            <li>Apple</li>
            <li>Orange</li>
        </ol>
    </div>
)

//var appRoot = document.getElementById('root');
render();