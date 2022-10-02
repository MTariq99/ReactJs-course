import React from "react";
// here we destructured the object props
// function Contact({img,name,phone,email}){
    function Contact(props){
    return (
<div className='contacts'>
    <div className='contact-card'>
        {/* <img src={props.img} className="persian-cat" alt='parsian-cat'  /> */}
        <h3>{props.name}</h3>
        <div className='info-group'>
        {/* <i className="fa-sharp fa-solid fa-phone"></i> */}
        <p>{props.phone}</p>
        <p>{props.email}</p>
        </div>
    </div>
</div>
    )
}
// const nums = [1,2,3,4,5]
// const squared = nums.map((item)=>{
// return item * item
// });
// console.log(squared);

// const names = ["alice","bob","charlie","danielle"]
// const capitalizedWord = names.map((item)=>{
//  return item.charAt(0).toUpperCase() +item.slice(1);
 
// })
// console.log(capitalizedWord);





export default Contact;

/*
1.   what do props help us accomplish?
ans- make a component more reusable. 

2.   how do you pass a prop into a component?
ans- <myAwesomeHeader title= "???" />

3.  Can I pass a custom prop (e.g. blahblahblah={true}) to a native
    DOM element? (e.g. <div blahblahblah ={true} />) why or why not?
ans- No because the JSX we use to describe native DOM elements will be turned
     into REAL DOM elements by React. And real DOM elements
     only have properties/attributes specified in the HTML specification.
     (Which doesn't include properties like 'blahblahblah')

4. how do I receive props in a component?
   function Navbar(props){
    return (
        <header>
        .....
        </header>
    )
   }

5.   what data type is 'props' when the component receives it?
ans- an object! 


*/