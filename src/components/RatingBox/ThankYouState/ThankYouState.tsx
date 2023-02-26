import React from 'react';
import styles from './ThankYouState.module.css';

interface Props {
  index: number;
}

function ThankYouState({ index }: Props) {
  return (
    <div className={styles.thankYouStateBox}>
      <img
        className={styles.thankYouStateImage}
        src='/src/assets/illustration-thank-you.svg'
      />
      <p
        className={styles.thankYouStateRating}
      >{`You selected ${index} out of 5`}</p>
      <p className={styles.thankYouStateHeader}>Thank you!</p>
      <p className={styles.thankYouStateText}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankYouState;
