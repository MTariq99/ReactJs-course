import React from "react";
import memesData from "./memesData";


function Meme(){
    const [memes,setMemes] = React.useState({
        topText: "",
        bottomText: "",
        randomImage:"./images/15.jpg"        
    })
    const [allMemeImages,setAllMemeImages] = React.useState(memesData)
  const [memeImage, setMemeImage] = React.useState("")

  function getMemeImage(e){
    e.preventDefault();
console.log("button is clicked");
const memesArray = allMemeImages.data.memes;
const randomNumber = Math.floor(Math.random() * memesArray.length);
const url = memesArray[randomNumber].url;
setMemes((prevMeme)=>{
    return {
        ...prevMeme,
        randomImage: url 
    }
})
}

// const thingsArray = ["thing 1","thing 2"];
// const array = thingsArray.map((item)=>{
//   return <p>{item}</p>;
// })

    return(
        <main>
        <div className="form">
            <input type="text" placeholder="top text" name= "meme-heading" className="form-inputs" ></input>
            <input type="text" placeholder="bottom text" name = "meme-content" className="form-inputs"></input>
            <button onClick={getMemeImage} className="form--button">Get a new meme image</button>
        </div>
        <div className="meme--Image">
        <img alt="meme Img" src={memes.randomImage}/>

        </div>
        </main>
    )
}
export default Meme;

// CHALLENGE
/**
 * challenge: convert the code below to use an array
 * held in state instead of a local variable. Initialize
 * the state array with the same 2 items below
 * 
 * DON'T worry about fixing `addItem` quite yet
 */
// const thingsArray = ["thing 1", "thing 2"];
// const [thingsArray, setThingsArray] = React.useState(["thing 1","thing 2"])
// function addItem(){
// setThingsArray((prevThingsArray)=>{
// return (
//   [...prevThingsArray,`thing ${prevThingsArray.length + 1}`]
// );
// });
// };
// const thingsElement = thingsArray.map((thing)=>{
//  return( <p>{thing}</p>)
// })
// return (

//   <div className='thingsArray--div'>
//     <button className='thingsArray-button'  onClick={addItem}>Add Item</button>
//   {thingsElement}
//   </div>
// )
// // END OF CHALLENGE.