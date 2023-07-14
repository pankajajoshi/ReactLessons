import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import ProductList from './components/ProductsList';
import products from './data';
import Cart from './components/Cart';

function App() {

  const [cart, setCart] = useState([])

  return (
    <div className="App">
      <h1> Hi There! </h1>
      <div className="container">
        <ProductList products={products} setCart={setCart} cart={cart}/>

        <Cart cart={cart} />
      </div>
    </div>
  );
}

export default App;






// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react'


// function App() {
// //useState is a keyword []-> initial value of state
//   // const [cart,setCart] = useState(['apple','pear','banana','cherry'])//it takes one parameter and returns 2 variable in it state varaibale called cart 
//   const [cart,setCart] = useState([])
//   const[submission,setSubmission] = useState()

//   const handleSubmit = (event) =>{
//     event.preventDefault()

//     setCart([...cart,submission])
//   }

//   const handleChange =(event) => {
//     setSubmission(event.target.value)
//   }
  
//   console.log(cart)

//   return (
//     <div className="App">
//       <h1> Hi there !</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" />
//         <input type="submit" />
//       </form>
//       <ul>
//         {cart.map((item,index) => {
//           return(
//           <li key={index}>{item}</li>
//         )
//         })}

//       </ul>
//       {/* {cart[0]} */}
//       {/* <button onClick={() =>{ 
//         setCart(['pear']) */}
//       {/* }}>Click me!</button> */}
//     </div>
//   );
// }

// export default App;

//import logo from './logo.svg';
//import './App.css';
// import { useState } from 'react'
// import ProductList from './components/ProductsList';
// import products from './data';
// function App() {

//   const [cart, setCart] = useState([])
//   const [submission, setSubmission] = useState()

//   const handleSubmit = (event) => {
//     event.preventDefault()
//     setCart([...cart, submission])
//   }

//   const handleChange = (event) => {
//     setSubmission(event.target.value)
//   }

//   return (
//     <div className="App">
//       <h1> Hi There! </h1>

//       <ProductList product={products[0]}/>

//       <form onSubmit={handleSubmit}>
//         <input type="text" onChange={handleChange} />
//         <input type="submit" />
//       </form>

//       <ul>
//         {cart.map((item, index) => {
//           return (
//             <li key={index}>{item}</li>
//           )
//         })}
//       </ul>
//     </div>
//   );
// }

// export default App;