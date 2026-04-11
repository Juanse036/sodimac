import { Link, useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const navigate = useNavigate();

  const cartCount = 0;

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer} onClick={() => navigate('/')}>
        <h2 style={{ color: '#f00', margin: 0, fontWeight: 900 }}>SODIMAC</h2>
      </div>

      <div className={styles.navLinks}>
        <Link to="/" className={styles.link}>INICIO</Link>
        
        <div className={styles.cartContainer} onClick={() => navigate('/cart')}>
          <span className={styles.cartIcon}>🛒</span>
          <span className={styles.link}>MI CARRO</span>
          {cartCount > 0 && (
            <div className={styles.cartBadge}>{cartCount}</div>
          )}
        </div>
      </div>
    </nav>
  );
};