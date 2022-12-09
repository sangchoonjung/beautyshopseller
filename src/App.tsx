import React, { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayer from "./components/layout/BaseLayer";
import Main from "./components/mainhome/main";
import MessagePage from "./components/messagePage";
import "./App.css";
import InventoryPage from "./components/inventoryPage/InventoryPage";

export const Context = createContext(null);
function App() {
  return (
    <div className="App">
      <Context.Provider value={null}>
        <BrowserRouter>
          <BaseLayer>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/message" element={<MessagePage />} />


              <Route path="/inventory" element={<InventoryPage />} />

            </Routes>
          </BaseLayer>
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}

export default App;
