import { Outlet, Link, useNavigate } from 'react-router-dom';
import { LogOut, BookOpen, User } from 'lucide-react';

const Layout = () => {
  const navigate = useNavigate();
  const name = localStorage.getItem('name') || 'Student';

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-72 bg-white border-r shadow-sm flex flex-col">
        <div className="p-8 border-b">
          <h1 className="text-3xl font-bold text-blue-600">EduEnroll</h1>
          <p className="text-sm text-gray-500 mt-1">Course Enrollment Portal</p>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          <Link 
            to="/courses" 
            className="flex items-center gap-3 px-6 py-4 rounded-2xl hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium transition"
          >
            <BookOpen size={22} /> Browse Courses
          </Link>
          <Link 
            to="/my-courses" 
            className="flex items-center gap-3 px-6 py-4 rounded-2xl hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-medium transition"
          >
            <User size={22} /> My Enrollments
          </Link>
        </nav>

        <div className="p-6 border-t mt-auto">
          <button
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-3 px-6 py-4 text-red-600 hover:bg-red-50 rounded-2xl font-medium transition"
          >
            <LogOut size={20} /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b px-10 py-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800">
            Welcome back, {name.split(' ')[0]}!
          </h2>
        </header>
        <main className="flex-1 overflow-auto p-10 bg-gray-50">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;