import React from 'react';
import styles from './styles.module.css';

export const ContributionsList = ({ contributions }) => (
  <div className={styles.contributionsContainer}>
    {contributions.map((contrib, index) => (
      <div key={index} className={styles.contributionItem}>
        <h3 className={styles.contributionName}>{contrib.name}</h3>
        <p className={styles.contributionDescription}>{contrib.contribution}</p>
        <p className={styles.contributionTime}>{contrib.timeAgo}</p>
      </div>
    ))}
  </div>
);
