import React from 'react';
import './App.css';
import Header from './components/Header';
import Meme from './components/meme';

function App() {
 let result =React.useState();
 console.log(result);
  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  );

}







// function App(){
/**
 * challenge: Replace the if/else below with a ternary operator
 * to determine the text that should display on the page
 */
// const isGoingOut = false;
// let answer // use ternary here
// if(isGoingOut===true){
//   answer = "YES";
// }else{
//   answer= "NO"
// }

// isGoingOut ? answer = "YES" : answer = "NO";
// answer = isGoingOut  ? "YES" : "NO";

// return (
//   <div className='state'>
//     <h1 className='state--title'>DO I FEEL LIKE GOING OUT TONIGHT?</h1>
//     <div className='state--value'>
//       <h1>{isGoingOut  ? "YES" : "NO"}</h1>
//     </div>
//   </div>

// )

/**
 * CHALLENGE
 * -initialize state for `isGoingOut` as a boolean
 * -Make it so clicking the div.state--value flips that
 *  boolean value (true -> false, false ->true) 
 * - display "yes" if `isGoingOut` is `true`, "NO" otherwise
 */
// const [isGoingOut, setIsGoingOut] = React.useState(true);
// function changeMind(){
//   setIsGoingOut((prevState)=>{
//   return !prevState
// });
// }

// return (
//   <div className='state'>
//     <h1 className='state--title'>DO I FEEL LIKE GOING OUT TONIGHT?</h1>
//     <div onClick={changeMind} className='state--value'>
//       <h1>{isGoingOut ? "YES": "NO"}</h1>
//     </div>
//   </div>
// )
// END OF CHALLENG






// CHALLENGE
/**
 * challenge: convert the code below to use an array
 * held in state instead of a local variable. Initialize
 * the state array with the same 2 items below
 * 
 * DON'T worry about fixing `addItem` quite yet
 */
// const [thingsArray, setThingsArray] = React.useState(["thing 1","thing 2"]);

// const thingsElements = thingsArray.map((things)=>{
//   return(
//     <p>{things}</p>
//   )
// });

// function addItem(){
//   setThingsArray((prevState)=>{
//     return (
//       [...prevState,`thing ${prevState.length +1}`]
//     )
//   });
// }
/**END OF CHALLENGE */



// COMPLEX STATE: OBJECT

// const [contact,setContact] = React.useState({
//   firstName: "Lauran",
//   lastName : "Angila",
//   phone:   "+923030106788",
//   email : "salikhan8458@gmail.com",
//   isFavorite: false
// })
// // CHALLENGE
// /**
//  * challenge: fill in the values in the markup
//  * using the properties of our state object above
//  * (Ignore `isFavorite` for now)
// */

// function toggleFavorite(){
//   setContact((prevContact)=>{
//     return {
//       ...prevContact,
//       /**
//        * yahan ...prevContact ka matlb ye hai k hum ne sara ka
//        *  sara Object yahan paste kar diya ho is tarha
//        *  firstName: "Lauran",
//           lastName : "Angila",
//           phone:   "+923030106788",
//           email : "salikhan8458@gmail.com",
//           isFavorite: false

//       * isFavorite property k sath
//       *ab nechy hum jo bhi property change karna chahy to kar skte hain or wo
//       property upar useState me bhi usi tarha change ho jaye gi
//        */

//       isFavorite: !prevContact.isFavorite
//     }
//   })
// }

// /**
//  * challenge: Use a ternary to determine which star image fileName
//  * should be used based on the `contact.isFavorite` property
//  */
// let starIcon = contact.isFavorite  ? "filled--star.png" : "empty--Star.png"


// return(
//   <main>
//     <article className='card'>
//       <img alt='profile' src="./images/profile-pic.jpg" className='card--image' />
//       <div className='card--info'>
//         <img className='card--favorite'
//         alt='startIcon'
//         src={`./images/${starIcon}`}
//         onClick = {toggleFavorite}
//         />
//       {/* <i class="fa-solid fa-star" onClick ={toggleFavorite}></i> */}
//         <h2 className='card--name'>{contact.firstName} {contact.lastName}</h2>
//         <p className='card--contact'>{contact.phone}</p>
//         <p className='card--contact'>{contact.email}</p>
//       </div>
//     </article>
//   </main>
// )

// END OF CHALLENGE








// return(
//   <div className='thingsArray--div'>
//     <button onClick={addItem}>Add Item</button>
//     {thingsElements}
//   </div>
// )




 // USE STATE 
//   const [isImportan, setIsImportant] = React.useState("OFF COURSE");

//   function handleClick(){
// setIsImportant("NO");
// // const [count,setCount]=React.useState(0)
// //   }
//   return (
//     <div className='state'>
//       <h1 className='state--title'>Is State important to know</h1>
//       <div className='state--value' onClick={handleClick}>
//         <h1>{isImportan}</h1>
//       </div>
//     </div>


// /**
//  * NOTE: if you ever need the old value of state
//  * to help you determine the new value of state,
//  * you should pass a callback function to your
//  * state setter function instead of using state directly.
//  * this callback function will receive the old value of state as its 
//  * parameter, which you can then use to determine your new value of state
//  */

//   )

//   setCount((prevCount) =>{
//     prevCount + 1;
//   })
// }
// function subtract(){
//   setCount((prevCount) =>{
//     prevCount - 1;
//   })
// }
// //   function add(){
// // setCount(count + 1 );
// //   }
//   // function subtract(){
//   //   setCount(count - 1);
//   // }
//   return(
//     <div className='counter'>
//       <button className='counter-minus' onClick={subtract}>-</button>
//       <div className='counter-count'>
//         <h1>{count}</h1>
//       </div>
//       <button className='counter-plues' onClick={add}>+</button>
//     </div>

//   )
  // }

export default App
