import { BrowserRouter, Route, Routes } from "react-router-dom";
import './app.scss';
import Home from "./pages/home/Home";
import Hostel from "./pages/hostel/Hostel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="hostels">
              <Route index element={<List />} />
              <Route path=":id" element={<Hostel />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
