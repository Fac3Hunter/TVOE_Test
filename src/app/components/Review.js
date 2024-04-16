"use client";

import React, { useState } from "react";
import Rating from "./Rating";
import styles from "./styles/review.module.scss";

const Review = ({ comment }) => {
  const [slice, setSlice] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${styles.container} ${isExpanded ? styles.expanded : ""}`}>
      <div className={styles.rating}>
        <Rating value={9}></Rating>
      </div>
      <div className={styles.name}>
        <div>Николай</div>
        <div className={styles.date}>10 Мая 2023</div>
      </div>
      <div className={styles.comment}>
        {slice ? comment : `${comment.slice(0, 135)}...`}
      </div>
      <div
        onClick={() => {
          setSlice(!slice);
          toggleExpand();
        }}
        className={styles.read}
      >
        Читать дальше
      </div>
    </div>
  );
};

export default Review;
