import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyLists from "./pages/MyLists";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mylist" element={<MyLists />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
