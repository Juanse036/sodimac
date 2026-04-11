import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import styles from './Cart.module.css';

export const Cart = () => {
    const { cart, removeFromCart, updateQuantity } = useCart();
    const navigate = useNavigate();

    const calculateTotal = () => {
        return cart.reduce((acc, item) => {
            const cleanPrice = Number(item.prices[0].price.replace(/\./g, ''));
            return acc + (cleanPrice * item.quantity);
        }, 0);
    };

    if (cart.length === 0) {
        return (
            <div className={styles.emptyCart}>
                <h2>Tu carrito está vacío</h2>
                <p>¡Explora nuestros productos y encuentra lo que necesitas!</p>
                <button onClick={() => navigate('/')}>Ir a la tienda</button>
            </div>
        );
    }

    return (
        <main className={styles.container}>
            <h1 style={{ marginBottom: '30px' }}>Carro de Compras</h1>

            <div className={styles.layout}>
                {/* Lado Izquierdo: Items */}
                <section className={styles.cartList}>
                    {cart.map((product) => (
                        <article key={product.productId} className={styles.cartItem} onClick={() => navigate(`/product/${product.productId}`, { state: { product } })}>
                            <img
                                src={product.mediaUrls[0]}
                                alt={product.displayName}
                                className={styles.itemImage}
                            />
                            <div className={styles.itemInfo}>
                                <span>{product.brand}</span>
                                <h3>{product.displayName}</h3>
                                <div className={styles.quantityControls}>
                                    <span className={styles.label}>Cantidad:</span>
                                    <div className={styles.selector}>
                                        <button
                                            onClick={() => updateQuantity(product.productId, product.quantity - 1)}
                                            className={styles.qtyBtn}
                                        >
                                            −
                                        </button>
                                        <span className={styles.qtyValue}>{product.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(product.productId, product.quantity + 1)}
                                            className={styles.qtyBtn}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <p><strong>{product.prices[0].symbol}{product.prices[0].price}</strong></p>
                                <button
                                    className={styles.removeBtn}
                                    onClick={() => removeFromCart(product.productId)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </article>
                    ))}
                </section>

                {/* Lado Derecho: Resumen */}
                <aside className={styles.summaryCard}>
                    <h2>Resumen de la compra</h2>
                    <div className={styles.summaryRow}>
                        <span>Productos ({cart.length})</span>
                        <span>${calculateTotal().toLocaleString('es-CO')}</span>
                    </div>
                    <div className={styles.summaryRow}>
                        <span>Envío</span>
                        <span style={{ color: '#00a650', fontWeight: 'bold' }}>Gratis</span>
                    </div>
                    <div className={styles.totalRow}>
                        <span>Total</span>
                        <span>${calculateTotal().toLocaleString('es-CO')}</span>
                    </div>
                    <button className={styles.checkoutBtn}>
                        Ir a pagar
                    </button>
                </aside>
            </div>
        </main>
    );
};