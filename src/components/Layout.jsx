import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex items-center justify-center bg-[#082338]">
      {children}
    </div>
  );
};

export default Layout;
