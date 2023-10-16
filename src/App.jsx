import 'react-router-dom'
import './App.css'
import LandingPage from './components/landing/LandingPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigateTo from './router/Navigate';

function App() {
 
  return (
    <>
     <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<NavigateTo />} />
        </Routes>
  </Router>
    </>
  )
}

export default App
