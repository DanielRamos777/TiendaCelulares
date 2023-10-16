import { CartContext } from '../../context/CartContext';

const CartItem = ({ id, nombre, cantidad, precio }) => {
return (
    <div>
        <h4>{nombre}</h4>
        <p>Cantidad: {cantidad}</p>
        <p>Precio: S/{precio}</p>
    </div>
);
};

export default CartItem