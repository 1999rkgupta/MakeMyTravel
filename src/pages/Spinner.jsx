import React from "react";

const Spinner = () => {
  return (
    <section id="spinnerBlock">
      <svg viewBox="0 0 100 100" >
        <circle
          cx={50}
          cy={50}
          r={30}
          fill="transparent"
          strokeWidth="8px"
          strokeDasharray={160}
        />
      </svg>
    </section>
  );
};

export default Spinner;
