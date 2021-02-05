import React from "react";

const selectYears = (yearValue) => {
  if (2021 === yearValue) {
    return true;
  } else {
    return false;
  }
};

const Footer = () => {
  let isYears = true;
  const now = new Date().getFullYear();
  isYears = selectYears(now);
  return (
    <div style={{ margin: "80px 50px 20px 50px" }}>
      <hr />
      <span style={{ fontSize: "13px", fontWeight: "bold", color: "gray" }}>
        © {isYears ? "2021" : `2021 - ${now}`} 박백김하. All rights reserved.
      </span>
    </div>
  );
};

export default Footer;
