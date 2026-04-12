
import styles from "./NotFoundProduct.module.css"
import { useNavigate } from "react-router-dom"

export const NotFoundProduct = () => {

    const navigate = useNavigate()

    return (
        <div className={styles.notFoundContainer}>
            <h2>Lo sentimos, el producto no está disponible</h2>
            <p>Es posible que el enlace esté roto o el producto haya sido retirado.</p>
            <button onClick={() => navigate('/')} className={styles.backBtn}>
                Ver otros productos
            </button>
        </div>
    )
}
