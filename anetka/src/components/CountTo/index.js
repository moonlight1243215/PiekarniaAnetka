import React, { useRef, useEffect, useState } from 'react';
import styles from './index.module.css'

const Counter = ({ maxNumber, duration }) => {
  const [count, setCount] = useState(0);
  const [isNumberDisplayed, setIsNumberDisplayed] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsNumberDisplayed(true);
        observer.unobserve(entry.target);
        startCounter();
      }
    }, options);

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const startCounter = () => {
    const incrementPerFrame = Math.ceil(maxNumber / (duration / 16)); // Calculate the increment per frame

    let currentCount = 0;
    const interval = setInterval(() => {
      currentCount += incrementPerFrame;
      if (currentCount >= maxNumber) {
        // Stop the counter at the maximum number
        clearInterval(interval);
        currentCount = maxNumber;
      }
      setCount(currentCount);
    }, 16); // Update the count every ~16ms for smooth scrolling
  };

  return (
    <div ref={counterRef}>
      {isNumberDisplayed && <p className={styles.number}>{count}</p>}
    </div>
  );
};

export default Counter;