
const products = [
    {
        id: '1',
        name: 'Poco x5',
        price: 10000,
        category: 'celular',
        img: 'https://xiaomioficial.pe/media/catalog/product/cache/2b88132ea045bae0fc2b44a4f558f9b1/c/e/ce004xia18-poco-x5-5g-lanzamiento-smartphone-celular-nuevo-xiaomi-peru.png',
        stock: 7,
        description: 'Descripcion de Poco X5'
    },
    { id: '2', name: 'poco x6', price: '10000', category: 'celular', img: 'https://xiaomioficial.pe/media/catalog/product/cache/2b88132ea045bae0fc2b44a4f558f9b1/c/e/ce004xia18-poco-x5-5g-lanzamiento-smartphone-celular-nuevo-xiaomi-peru.png', stock: 7,description: 'Descripcion de Poco X6'},
    { id: '3', name: 'poco x6', price: '10000', category: 'celular', img: 'https://xiaomioficial.pe/media/catalog/product/cache/2b88132ea045bae0fc2b44a4f558f9b1/c/e/ce004xia18-poco-x5-5g-lanzamiento-smartphone-celular-nuevo-xiaomi-peru.png', stock: 7,description: 'Descripcion de Poco X6'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProducById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() =>{
            resolve(products.find(prod.id === productId))
        }, 500)
    })
}