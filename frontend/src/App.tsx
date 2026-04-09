import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login.tsx';
import Register from './pages/Register.tsx';
import Courses from './pages/Courses.tsx';
import MyCourses from './pages/MyCourses.tsx';
import Layout from './components/Layout.tsx';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = localStorage.getItem('token');
  return token ? <>{children}</> : <Navigate to="/login" replace />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route element={<Layout />}>
          <Route path="/" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
          <Route path="/courses" element={<ProtectedRoute><Courses /></ProtectedRoute>} />
          <Route path="/my-courses" element={<ProtectedRoute><MyCourses /></ProtectedRoute>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;