import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const DefaultPage = ({ children }) => {



  return (
    <div>
      <Header />
      {children} {/* Este es el espacio para el contenido específico */}
      <Footer />
    </div>
  );
};

export default DefaultPage;