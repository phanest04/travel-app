import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../Footer/Footer";
import HomeImg from "../photos/home.jpg";

function Home (){
    return(
        <>
        <Navbar/>
        <Hero
        className="hero"
        heroImg={HomeImg}
        title="Take a Break from the Norm"
        text="Choose an Agent, Destination, Date, Type of Transportation. We will do the Rest for you."
        buttonText="Travel Plan"
        url="/" 
        buttonClass="show"
        />
    
       <Footer/>
        </>
    );
}

export default Home;