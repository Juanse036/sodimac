import type { Product } from '../../types/product';
import { useNavigate } from 'react-router-dom';
import styles from './ProductDetail.module.css'
import { Carousel } from './components/Carousel';

import { useState } from "react"
import { useCart } from '../../context/CartContext';

interface ProductDetailViewProps {
    product: Product
}

export const ProductDetailView = ({ product }: ProductDetailViewProps) => {
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [quantity, setQuantity] = useState(1)

    const internetPrice = product.prices.find(p => p.type === 'INTERNET');
    const normalPrice = product.prices.find(p => p.type === 'NORMAL');
    const discountBadge = product.badges.find(b => b.type === 'DISCOUNT');

    const mainPrice = internetPrice || normalPrice || product.prices[0];
    const ratingValue = Number(product.rating) || 0;

    return (
        <main className={styles.pageContainer}>
            <button className={styles.backButton} onClick={() => navigate('/')} >
                ← Volver atrás
            </button>

            <div className={styles.productDetail}>
                <section>
                    <Carousel images={product.mediaUrls} />
                </section>

                <section className={styles.info}>
                    <div >
                        <span className={styles.brand}>{product.brand}</span>
                        <h1 className={styles.title}>{product.displayName}</h1>
                        <div className={styles.model} >
                            <span>Modelo: {product.model}</span>
                            <span> | </span>
                            <span>Código: {product.productId}</span>
                        </div>
                    </div>
                    {product.rating &&
                        <div className={styles.rating}>
                            <span >
                                {'★'.repeat(Math.round(ratingValue))}
                                {'☆'.repeat(5 - Math.round(ratingValue))}
                            </span>
                            <span >
                                {product.rating} ({product.totalReviews})
                            </span>
                        </div>
                    }

                    <div className={styles.priceContainer}>
                        {discountBadge && (
                            <span className={styles.discountBadge}>
                                {discountBadge.value}
                            </span>
                        )}

                        <div className={styles.price}>
                            <span className={styles.priceText}>{mainPrice.symbol} {mainPrice.price}</span>
                            <span className={styles.unit}>{mainPrice.unit}</span>
                        </div>

                        {internetPrice && normalPrice && (
                            <div className={styles.oldPrice}>
                                <span className={styles.oldLabel}>Antes:</span>
                                <span className={styles.oldValue}>
                                    {normalPrice.symbol}{normalPrice.price} {normalPrice.unit}
                                </span>
                            </div>
                        )}
                    </div>

                    <div className={styles.highlights}>
                        <h3>
                            Especificaciones principales
                        </h3>

                        <ul className={styles.highlightsList}>
                            {product.highlights?.map((item) => (
                                <li key={`${item.key}-${item.value}`} className={styles.highlightItem}>
                                    <span className={styles.highlightKey}>{item.key}</span>
                                    <span className={styles.highlightValue}>{item.value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.quantityContainer}>

                        <button className={styles.quantityButton} onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                        <span className={styles.quantityValue}>{quantity}</span>
                        <button className={styles.quantityButton} onClick={() => setQuantity(q => q + 1)}>+</button>

                        <button
                            className={styles.addToCart}
                            onClick={() => addToCart(product, quantity)}
                        >
                            Agregar al Carrito
                        </button>
                    </div>
                </section>
            </div>
        </main>
    );
}