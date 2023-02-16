import React from 'react';
import styles from './RatingBox.module.css';
import RatingButtons from '../RatingButtons/RatingButtons';
import SubmitButton from '../SubmitButton/SubmitButton';

function RatingBox() {
  return (
    <div className={styles.ratingBox}>
      <img className={styles.ratingIcon} src='/src/assets/icon-star.svg'></img>
      <p className={styles.header}>How did we do?</p>
      <p className={styles.text}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering
      </p>
      <RatingBox />
      <SubmitButton />
    </div>
  );
}

export default RatingBox;
