import CartWidget from "../CartWidget/CartWidget"
import iconn from './img/icon.jpg';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
    <nav>
      
      <div>
        <img src={iconn} width="30" height="30" alt="Logo"/>
        <h2>Genero</h2>
      </div>

      <div>
          <ul>
            <li>Mujer</li>
            <li>Hombre</li>
            <li>Unisex</li>
          </ul>
      </div>  

      <CartWidget/>

    </nav>
    </>
  );
}

export default NavBar;