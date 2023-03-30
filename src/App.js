import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Share/Navbar";
import Home from "./Pages/Home";
import Error from "./Pages/Error";
import AddBook from "./Pages/AddBook";
import ShowBook from "./Pages/ShowBook";
import EditBook from "./Pages/EditBook";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/addbook" element={<AddBook></AddBook>}></Route>
        <Route path="/showbook" element={<ShowBook></ShowBook>}></Route>
        <Route path="/editbook" element={<EditBook></EditBook>}></Route>
        
        
        
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;
