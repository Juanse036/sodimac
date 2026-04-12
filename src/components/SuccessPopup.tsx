import { useNavigate } from 'react-router-dom';
import styles from './SuccessPopup.module.css';

interface SuccessPopupProps {
  productName: string;
  onClose: () => void;
}

export const SuccessPopup = ({ productName, onClose }: SuccessPopupProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.popupOverlay}>
      <div className={styles.popupContent}>
        <div className={styles.icon}>✓</div>
        <div className={styles.message}>
          <p><strong>¡Producto agregado!</strong></p>
          <p>{productName}</p>
          <button 
            className={styles.viewCartBtn} 
            onClick={() => {
              navigate('/cart');
              onClose();
            }}
          >
            Ver mi carro
          </button>
        </div>
        <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>✕</button>
      </div>
    </div>
  );
};