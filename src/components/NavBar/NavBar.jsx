import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'

function NavBar (){
    return ( 
        <nav className='NavBar'>
            <Link to='/'>
                <h3>Ecomerce</h3>
            </Link >
            <div className='Categories'>
                <NavLink to={`/category/celular1`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>celular1</NavLink>
                <NavLink to={`/category/celular2`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>celular2</NavLink>
                <NavLink to={`/category/celular3`} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}>celular3</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar