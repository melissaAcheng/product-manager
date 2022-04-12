import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
import DisplayProduct from "./components/DisplayProduct";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Routes>
          <Route element={<Main />} path="/home" default />
          <Route element={<DisplayProduct />} path="/product/:id" />
          <Route element={<UpdateProduct />} path="/product/edit/:id"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
