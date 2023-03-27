import NavBarComponent from './common/NavBar/NavBar'
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { HomePage } from './components/HomePage/homepage';
import { HowItWorks } from './components/how-it-works';
import { ResortsAndProperties } from './components/resorts-and-properties';
import { LabsGroup } from './components/labs-group';
import FooterComponent from './common/Footer/footer';

function App() {
  return (
    <>
      <NavBarComponent></NavBarComponent>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/how-it-works" element={<HowItWorks />} />
          <Route path="/resorts-and-properties" element={<ResortsAndProperties />} />
          <Route path="/labs-club" element={<LabsGroup />} />
        </Routes></BrowserRouter>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
