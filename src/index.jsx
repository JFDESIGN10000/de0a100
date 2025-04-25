import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>¡Hola, José Félix! 🚀</h1>
      <p>Tu app React ya está corriendo con Webpack y Babel.</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
