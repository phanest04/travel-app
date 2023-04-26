import "./HeroStyle.css";
function Hero(props){
    return(
        <>
        <div className = {props.className}>
            <img alt="HeroImg" src={props.heroImg}/>
            

            <div className = "hero-text">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <a href={props.url} className={props.buttonClass}>
                {props.buttonClassName}
                </a>
            </div>
        </div>
        </>
    );
    
}

export default Hero;