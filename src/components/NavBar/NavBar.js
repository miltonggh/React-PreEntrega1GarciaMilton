import CartWidget from "../CartWidget/CartWidget"
import './style.css';
import { Link, NavLink } from "react-router-dom";

function NavBar() {

  return (
    <>
    <nav className="NavBar">
      
      <div className="NavBarIcon">
        <img src="/img/icon.jpg" alt="Logo"/>
        <span>SINCE 1937</span>
      </div>

      <div className="NavBarList">
          <h2>GENERO</h2>
          <ul>
            <li><NavLink className={({ isActive}) => (isActive ? 'active' : 'inactive')} to="/">Todos los productos</NavLink></li>
            <li><NavLink className={({ isActive}) => (isActive ? 'active' : 'inactive')} to="/category/mujer">Mujer</NavLink></li>
            <li><NavLink className={({ isActive}) => (isActive ? 'active' : 'inactive')} to="/category/hombre">Hombre</NavLink></li>
            <li><NavLink className={({ isActive}) => (isActive ? 'active' : 'inactive')} to="/category/unisex">Unisex</NavLink></li>            
          </ul>
      </div>  

      <CartWidget/>

    </nav>
    </>
  );
}

export default NavBar;