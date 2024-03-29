import React from "react";
import Navigation from "../Components/Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default Layout;
