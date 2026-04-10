
import styles from './ProductDetail.module.css'

export const ProductDetail = () => {

    return (
        <main className={styles.container}>
            <button className={styles.backButton}>
                ← Volver atrás
            </button>

            <section className={styles.content}>
                <h1>Product</h1>
            </section>
        </main>
    );
}