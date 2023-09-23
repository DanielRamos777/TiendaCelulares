import './ItemDetail'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({id, name, img, category, descripcion, price, stock}) => {
    return(
        <article className='CarItem'>
            <header className='Header'>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>
            <section>
                <p className='info'>
                    Categoria: {category}
                </p>
                <p className='info'>
                    Descripcion: {descripcion}
                </p>
                <p className='info'>
                    Precio: ${price}
                </p>
            </section>
            <footer className='ItemFooter'>
                <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada',quantity)}/>
            </footer>
        </article>
    )
}



export default ItemDetail