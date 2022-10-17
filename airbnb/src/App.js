import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './components/data';
import Contact from './components/Contact';
console.log(data);

function App() {

  const Cards = data.map((item)=>{
    return (
      <Card
      key = {item.id}
      item = {item}
      // spread operator it can apply on object as well as array but in an array it will apply on index wise
      // {...item}
      // img ={item.coverImage}
      // rating = {item.stats.rating}
      // reviewCount = {item.stats.reviewCount}
      // location = {item.location} 
      // title = {item.title}
      // price = {item.price}
      // openSpots = {item.openSpots}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='card-list'>{Cards}</section>
      <Contact />


      {/* <Card
      img = "/persian-cat.JPG"
      rating  = "5.0"
      reviewCount = {6}
      country = "pakistan"
      title = "life lessons with Sameer-Ali-Khan"
      price = "136"      
      /> */}
      {/* <Contact
      img = "/persian-cat1.JPG"
      name = "Mr. Sameer"
      phone = "(121)555-1234"
      email= "salikhan8458@gmail.com"      
      />
      <Contact
            img = "/persian-cat2.JPG"
            name = "Mr. SameerAli"
            phone = "(121)555-12345"
            email= "salikhan845889@gmail.com"
            />
      <Contact
            img = "/persian-cat3.JPG"
            name = "Mr. SameerAliKhan"
            phone = "(121)555-123456"
            email= "salikhan845876@gmail.com" 
            /> */}

    </div>
  );
}

export default App;
