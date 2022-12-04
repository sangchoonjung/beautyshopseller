import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayer from "./components/layout/BaseLayer";
import Main from "./components/mainhome/main";

// import "./App.css";

function App() {
  return (
    <div className="App">
      <BaseLayer>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </BaseLayer>
    </div>
  );
}

export default App;
