import Navbar from "../components/Navbar";

function Signup(){
    return(
        <>
        <Navbar/>
        <section className = "show login">
            <div className = "overlay">
                <form className = "form">
                    <input type = "text" name = "username" id="username" placeholder="Username" required />
                     <input type="email" name="email" id="email" placeholder="Your email address" required />
                    <input type = "password" name="password" id = "password" placeholder="Password" required/>
                    <input type="password" name="confirmpassword" id="confirmpassword" placeholder='Confirm your password' required />
                    <button type = "submit">Create an Account</button>
             </form>
            </div>
        </section>
        </>
    );
}

export default Signup;