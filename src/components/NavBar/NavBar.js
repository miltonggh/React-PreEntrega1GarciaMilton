import CartWidget from "../CartWidget/CartWidget"
import './style.css';

function NavBar() {
  return (
    <>
    <nav className="NavBar">
      
      <div className="NavBarIcon">
        <img src="./img/icon.jpg" alt="Logo"/>
        <span>SINCE 1937</span>
      </div>

      <div className="NavBarList">
          <h2>GENERO</h2>
          <ul>
            <li><a href="*">Mujer</a> </li>
            <li><a href="*">Hombre</a> </li>
            <li><a href="*">Unisex</a> </li>            
          </ul>
      </div>  

      <CartWidget/>

    </nav>
    </>
  );
}

export default NavBar;