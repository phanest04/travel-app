
import {Navbarlinks} from './Navbarlinks';
import './Navbar.css';
import {Component} from 'react';
import { Link } from "react-router-dom";



class Navbar extends Component{
    state = {clicked: false};
    handleClick =()=> {
        this.setState({clicked: !this.state.clicked})
    }
    render(){
        return(
           <nav className="Navbarlinks">
                <h1 className="navbar-logo">SpecTrip</h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
 
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu" }>
            {Navbarlinks.map((item, index) => {
                return (
                    <li key ={index}>
                        <Link className={item.className} to={item.url}>
                           <i className={item.icon}></i>
                           {item.title} 
                        </Link>
                    </li>
                );
            })}
            <button>Sign-Up</button>
            <button>Log In</button>
        </ul>
        </nav>
        );
    }
}
export default Navbar;