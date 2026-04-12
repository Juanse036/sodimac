import { useState, useEffect } from "react"
import type { Product } from "../../types/product"
import { getProducts } from "../../api/products"
import { ProductCard } from "../../components/ProductCard"
import { Loader } from "../../components/Loader"

import styles from './Home.module.css'

export const Home = () => {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true)
                const response = await getProducts()

                const result = response?.data?.result || []
                setProducts(result)
            } catch (err) {
                console.error('Error cargando productos', err)
                setError('No se pudieron cargar los productos')
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()
    }, [])

    if (loading) return <Loader />

    return (
        <main>
            <h1 className={styles.title}>Lista de productos</h1>
            {error && <p>{error}</p>}

            {!loading && !error && products.length === 0 && (
                <p>No hay productos disponibles</p>
            )}

            <section className={styles.productGrid}>
                {products.map((product) => (
                    <ProductCard 
                        key={product.productId} 
                        product={product} 
                    />
                ))}
            </section>
        </main>
    )
}