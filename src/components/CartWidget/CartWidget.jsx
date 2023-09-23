import cart from './assets/cart.svg'
import './cartWidget.css'

const CartWidget =() => {
    return (
        <div>
            <img src={cart} className='cart' alt="cart-wdiget" />
            0
        </div>
    )
}

export default CartWidget