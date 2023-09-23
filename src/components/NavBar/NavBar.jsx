import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'

function NavBar (){
    return ( 
        <nav>
            <h3>Logo</h3>
            <div>
                <button>Celulares1</button>
                <button>Celulares2</button>
                <button>Celulares3</button>
            </div>
            <CartWidget/>
            <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Acerca de</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Contacto</a></li>
            </ul>
        </nav>
    )
}

export default NavBar