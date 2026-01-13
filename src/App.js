//importing necessary libraries and components
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LoginNoRegex from './LoginNoRegex';
import Getuserdata from './Getuserdata';
import Origins from './Origins';
import About from './About';
import Adduser from './Adduser';
import Edituser from './Edituser';
import Reachus from './Reachus';
import Traces from './Traces';
import ProtectedRoute from './ProtectedRoute';
import { Navigate } from 'react-router-dom';
import AdminRoute from './AdminRoute';

function App() {
  return (
    <div>
      <Router>
      <Header />
      <Routes>
       {/* Redirect root to login */}
          <Route path="/" element={<Navigate to="/login" replace />} />
          {/* Login */}
          <Route path="/login" element={<LoginNoRegex />} />
        {/* Define your routes here
        <Route path="/" element={<LoginNoRegex />} /> */}
        <Route path="/Origins" element={<ProtectedRoute><Origins /></ProtectedRoute>} />
        {/*<Route path="/login" element={<LoginNoRegex />} />*/}
        <Route path="/Adduser" element={<Adduser />}  />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>}  />
        <Route path="/Getuserdata" element={<AdminRoute><Getuserdata /></AdminRoute>}  />
        <Route path="/edit/:id" element={<ProtectedRoute><Edituser /></ProtectedRoute>} />
        <Route path="/Traces" element={<ProtectedRoute><Traces /></ProtectedRoute>} />
        <Route path="/Reachus" element={<ProtectedRoute><Reachus /></ProtectedRoute>} />
      </Routes>
      </Router>
      <Footer />
    </div>
  );
}
export default App;