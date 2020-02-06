import React from "react";

const getDate = () => {
  let firstYear = 2020;
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  if (firstYear === currentYear) {
    return currentYear;
  } else {
    return `${firstYear}-${currentYear}`;
  }
};

const ContentFooter = () => {
  return (
    <footer className="container mt-5">
      <p>&copy; The Event Horse {getDate()}</p>
    </footer>
  );
};
export default ContentFooter;
