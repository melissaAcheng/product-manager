import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import DisplayProduct from "./components/DisplayProduct";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/home" default />
          <Route element={<DisplayProduct />} path="/product/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
