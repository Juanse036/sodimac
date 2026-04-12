import { useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.icon}>🔍</span>
        <h1 className={styles.title}>¡Uy! No encontramos lo que buscabas</h1>
        <p className={styles.description}>
          Parece que la página que intentas visitar no existe o ha sido movida.
        </p>
        <button className={styles.homeBtn} onClick={() => navigate('/')}>
          Ir a la página de inicio
        </button>
      </div>
    </div>
  );
};