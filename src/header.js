import logo from "./allar.png"
const Header = () => {
    let url="";
    return ( 
        <div>
            <ul className="nav justify-content-end ">
                <li className="nav-item">
                    <a className="nav-link active text-black" aria-current="page" href="#">Active</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link text-black" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-black" href="#">Link</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-black">Disabled</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-black">Disabled</a>
                </li>
            </ul>
        </div>
    );
}
 
export default Header;