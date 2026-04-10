import type { Product } from "../types/product";
import styles from './ProductCard.module.css'

interface ProductCardProps {
    product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <article className={styles.card}>
            <div className={styles.imageContainer}>
                <img src={product.mediaUrls[0]} alt={product.displayName} className={styles.image} />
            </div>
            <p className={styles.brand}>{product.brand}</p>
            <h2 className={styles.title}>{product.displayName}</h2>
            <p className={styles.priceValue}>{product.prices[0]?.price}</p>
            <button className={styles.button}>Agregar al Carrito</button>
        </article>
    )
}
