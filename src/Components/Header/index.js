import { Link } from 'react-router-dom';
import './style.css'

function Header(){
    return(
        <header>
            <Link to={"/"} className="logo">App Filmes</Link>
            <Link to={"/favoritos"} className="fav">Favoritos</Link>
        </header>
    );
}

export default Header;