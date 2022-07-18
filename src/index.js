import React from "react";
import reactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";

import Counter from "./components/counter";

const App = () => <Counter />

const root = reactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);