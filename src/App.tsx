import './assets/css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';

import Contact from './pages/ContactUs';
import Duolim from './pages/Duolim';
import WorkWithUs from './pages/WorkWithUs';
import Duoman from './pages/Duoman';
import Duoseg from './pages/Duoseg';
// Otras páginas...

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/duolim" element={<Duolim />} />
                <Route path="/duoman" element={<Duoman />} />
                <Route path="/duoseg" element={<Duoseg />} />
                <Route path="/WorkWithUs" element={<WorkWithUs />} />
                <Route path="/ContactUs" element={<Contact />} />
                {/* Ruta para landing, si es por fuera, no va acá */}
            </Routes>
        </Router>
    );
}
export default App;