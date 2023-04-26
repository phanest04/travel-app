import Navbar from '../components/Navbar';
import Hero from "../components/Hero";

const Login = () => {
    return (
        <>
        <Navbar/>
        <Hero className="hero-mid"
        title="Log-In"
        text="login here"
        buttonClass="hide"
        />
        <section className = "show login">
            <div className = "overlay">
                <form className = "form">
                    <input type="email" name="email" id="email" placeholder="Your email address" required />
                    <input type = "password" name="password" id = "password" placeholder="Password" required/>
                    <button type = "submit">Log-In</button>
             </form>
            </div>
        </section>
        </>
    )
}

export default Login;