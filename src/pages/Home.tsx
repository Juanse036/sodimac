import { useState, useEffect } from "react"
import type { Product } from "../types/product"
import { getProducts } from "../api/products"

export const Home = () => {
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            console.log({data})
            setProducts(data.data.result)
        }
        fetchProducts();
    }, [])

    return (
        <main>
            <h1>Lista de productos</h1>
            <section>
                {
                    products.map((product) => (
                        <article key={product.productId}>
                            <img src={product.mediaUrls[0]} alt={product.displayName} />
                            <h2>{product.displayName}</h2>
                            <p>{product.prices[0]?.price}</p>
                            <button>Agregar al Carrito</button>
                        </article>
                    ))
                }
            </section>
        </main>
    )
    
}