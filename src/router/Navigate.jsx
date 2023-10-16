import LandingPage from "../components/landing/LandingPage";
import AddStudents from '../components/Adding/AddStudents'
import Registeration from "../components/Registeration/Registeration";
import { Route, Routes } from 'react-router-dom';
import Attending from "../components/Attending/Attending";
const NavigateTo = () => {
    return (
      <Routes>
        <Route path="/add" element={<AddStudents />} />
        <Route path="/edit" element={<Registeration />} />
        <Route path="/attend" element={<Attending />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    );
  };
  
  export default NavigateTo;