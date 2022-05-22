import { BrowserRouter, Route, Routes } from "react-router-dom";
import './app.scss';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
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
