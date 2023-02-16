import React from 'react';
import styles from './RatingButtons.module.css';

function RatingButtons() {
  return (
    <div className={styles.rating}>
      <button className={styles.ratingButton}>1</button>
      <button className={styles.ratingButton}>2</button>
      <button className={styles.ratingButton}>3</button>
      <button className={styles.ratingButton}>4</button>
      <button className={styles.ratingButton}>5</button>
    </div>
  );
}

export default RatingButtons;
