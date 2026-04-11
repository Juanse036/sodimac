import { useState, useEffect } from "react"
import type { Product } from "../../types/product"
import { getProducts } from "../../api/products"
import { ProductCard } from "../../components/ProductCard"

import styles from './Home.module.css'

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
            <section className={styles.productGrid}>
                {
                    products.map((product) => (
                        <ProductCard key={product.productId} product={product} />
                    ))
                }
            </section>
        </main>
    )
    
}