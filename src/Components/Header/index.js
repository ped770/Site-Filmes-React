import { Link } from 'react-router-dom';
import './style.css'

function Header(){
    return(
        <header>
            <Link to={"/Site-Filmes-React"} className="logo">App Filmes</Link>
            <Link to={"/Site-Filmes-React/favoritos"} className="fav">Favoritos</Link>
        </header>
    );
}

export default Header;