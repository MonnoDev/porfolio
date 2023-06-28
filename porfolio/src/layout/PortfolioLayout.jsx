import React from "react";
import Navigation from "../components/nav/Navigation";

const PortfolioLayout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div>{children}</div>
    </>
  );
};

export default PortfolioLayout;
