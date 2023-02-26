import React, { useState } from 'react';

import styles from './RatingBox.module.css';
import RatingButtons from '../RatingButtons/RatingButtons';
import iconStar from '../../assets/icon-star.svg';
import ThankYouState from './ThankYouState/ThankYouState';

function RatingBox(): React.ReactElement {
  const [index, setIndex] = useState<number>(0);
  const [step, setStep] = useState<number>(0);

  const handleSubmit = () => {
    setStep((step) => step + 1);
  };
  return (
    <>
      {step === 0 && (
        <div className={styles.ratingBox}>
          <img className={styles.ratingIcon} src={iconStar}></img>
          <p className={styles.ratingBoxHeader}>How did we do?</p>
          <p className={styles.ratingBoxText}>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering
          </p>
          <RatingButtons onChange={setIndex} selectedIndex={index} />
          <button
            className={styles.submitButton}
            onClick={handleSubmit}
            disabled={index === 0}
          >
            SUBMIT
          </button>
        </div>
      )}
      {step === 1 && <ThankYouState index={index} />}
    </>
  );
}

export default RatingBox;
