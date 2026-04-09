import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000';

const MyCourses = () => {
  const [enrollments, setEnrollments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;

    axios.get(`${API_URL}/enrollments/me`, {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => {
        setEnrollments(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="text-center py-20 text-xl text-gray-600">Loading your courses...</div>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-10 text-gray-900">My Enrolled Courses</h1>
      
      {enrollments.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl p-12 shadow-sm">
          <p className="text-2xl text-gray-400">You haven't enrolled in any course yet.</p>
          <p className="text-gray-500 mt-4">Browse courses and start learning today!</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {enrollments.map((en) => (
            <div key={en.id} className="bg-white rounded-3xl shadow-sm p-8 hover:shadow-md transition">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{en.course.title}</h3>
              <p className="text-gray-600 mb-6 line-clamp-3">{en.course.description}</p>
              
              <div className="space-y-2 text-sm text-gray-500">
                <p><strong>Instructor:</strong> {en.course.instructor}</p>
                <p><strong>Duration:</strong> {en.course.duration}</p>
                <p><strong>Enrolled on:</strong> {new Date(en.enrolled_at).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCourses;   // ← This line is very important