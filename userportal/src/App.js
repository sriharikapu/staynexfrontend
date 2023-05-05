import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import SearchResults from "./screens/SearchResults";
import SingleHotel from "./screens/SingleHotel";
import StaynexPass from "./screens/StaynexPass";
import StaynexClub from "./screens/StaynexClub";
import StaynexGlobal from "./screens/StaynexGlobal";
import StaynexProperty from "./screens/StaynexProperty";
import Profile from "./screens/Profile";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search_result" element={<SearchResults />} />
        <Route path="/single_hotel/:id" element={<SingleHotel />} />
        <Route path="/staynexpass" element={<StaynexPass />} />
        <Route path="/staynexclub" element={<StaynexClub />} />
        <Route path="/staynexglobal" element={<StaynexGlobal />} />
        <Route path="/staynexproperty" element={<StaynexProperty />} />
        <Route path="/user_profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
