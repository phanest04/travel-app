import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactImg from "../photos/contact.jpeg";
function Contact (){
    return(
        <>
        <Navbar/>
        <Hero className="hero-mid"
        heroImg={ContactImg}
        title="Contact"
        buttonClass="hide"
    />
    
       </>
    );
}

export default Contact;