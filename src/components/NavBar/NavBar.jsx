import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

function NavBar (){
    return ( 
        <nav className='NavBar'>
            <Link to='/'>
                <h3 className='Logo'>Streaming</h3>
            </Link >
            <div className='Categories'>
                <NavLink to={`/category/streaming1`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Ofertas</NavLink>
                <NavLink to={`/category/streaming2`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Ofertas</NavLink>
                <NavLink to={`/category/streaming3`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>Ofertas</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar