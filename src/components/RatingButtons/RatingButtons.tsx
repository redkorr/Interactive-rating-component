import React from 'react';
import styles from './RatingButtons.module.css';

interface Props {
  onChange: (index: number) => void;
  selectedIndex: number;
}

function RatingButtons({
  onChange,
  selectedIndex,
}: Props): React.ReactElement<Props> {
  console.log('selectedIndex', selectedIndex);

  return (
    <div className={styles.rating}>
      {[...Array(5)].map((_, index) => (
        <button
          key={index}
          className={`${styles.ratingButton} ${
            selectedIndex === index + 1 ? styles.clicked : ''
          }`}
          onClick={() => {
            onChange(index + 1);
          }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default RatingButtons;
