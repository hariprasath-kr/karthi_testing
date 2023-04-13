import logo from "./allar.png"
const Header = () => {
    let url="";
    return ( 
        <div className="heaader">
           <div className="logo">
                <img src={logo} alt={"logo"}/>
           </div>
            <div className="buttons">
                <ul>
                    <li><a href={url}>{"How it Works"}</a></li>
                    <li><a href={url}>{"Contact Us"}</a></li>
                    <li><a href={url}>{"About Us"}</a></li>
                    <li><a href={url}>{"Team"}</a></li>
                    <li><a href={url}>{"White Papper"}</a></li>
                    
                </ul>
            </div>
        </div>
    );
}
 
export default Header;