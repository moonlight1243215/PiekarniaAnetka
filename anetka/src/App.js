import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./views/AboutUs";
import MainPage from "./views/MainPage";
import Shops from "./views/Shops";


function Root() {

return (
<>
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="shops" element={<Shops />} />
    </Routes>
  </BrowserRouter>
</>
);
}

export default Root;