import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayer from "./components/layout/BaseLayer";
import Main from "./components/mainhome/main";

// import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <BaseLayer>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BaseLayer>
      </BrowserRouter>
    </div>
  );
}

export default App;
