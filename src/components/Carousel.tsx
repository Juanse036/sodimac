import { useState } from 'react';
import styles from './Carousel.module.css';

interface CarouselProps {
  images: string[];
}

export const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className={styles.carousel}>
      <button onClick={prevSlide} className={styles.button}>
        ◀
      </button>

      <div className={styles.container}>
        <div
          className={styles.track}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={img || `slide-${index}`}
              className={styles.image}
            />
          ))}
        </div>
      </div>

      <button onClick={nextSlide} className={styles.button}>
        ▶
      </button>

      {/* 🔥 THUMBNAILS */}
      <div className={styles.thumbnails}>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={img || `thumb-${index}`}
            className={`${styles.thumbnail} ${
              index === currentIndex ? styles.active : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};