import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/rooms/new" Component={NewRoom}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

