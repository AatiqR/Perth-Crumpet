"use client";
import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

const Counter = ({ end = 100, decimals = 0, extraClass = "" }) => {
  const [start, setStart] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <span className={extraClass} ref={counterRef}>
      <CountUp start={start ? 0 : null} end={end} duration={3} decimals={decimals} />
    </span>
  );
};

export default Counter;




// import CountUp from "react-countup";
// import VisibilitySensor from "react-visibility-sensor";

// const Counter = ({ end = 100, decimals = 0, extraClass = "" }) => {
//   return (
//     <CountUp end={end} duration={3} decimals={decimals}>
//       {({ countUpRef, start }) => (
//         <VisibilitySensor onChange={(isVisible) => isVisible && start()} delayedCall>
//           <span className={extraClass} ref={countUpRef} />
//         </VisibilitySensor>
//       )}
//     </CountUp>
//   );
// };

// export default Counter;
