import { useEffect, useState } from 'react';
import axios from 'axios';
import { Clock, User, BookOpen } from 'lucide-react';

const API_URL = 'http://127.0.0.1:8000';

interface Course {
  id: number;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  image: string;
}

const sampleCourses: Course[] = [
  {
    id: 101,
    title: "Full Stack Web Development with React & Node.js",
    description: "Master modern web development with React, TypeScript, Node.js, and MongoDB.",
    instructor: "Priya Sharma",
    duration: "12 Weeks",
    image: "https://picsum.photos/id/1015/600/340"
  },
  {
    id: 102,
    title: "Machine Learning & Artificial Intelligence",
    description: "Learn Python, TensorFlow, and deep learning techniques for real-world applications.",
    instructor: "Dr. Arjun Rao",
    duration: "10 Weeks",
    image: "https://picsum.photos/id/201/600/340"
  },
  {
    id: 103,
    title: "UI/UX Design Masterclass with Figma",
    description: "Create stunning user interfaces and delightful user experiences.",
    instructor: "Neha Kapoor",
    duration: "8 Weeks",
    image: "https://picsum.photos/id/106/600/340"
  },
  {
    id: 104,
    title: "Data Science and Analytics Bootcamp",
    description: "Master data analysis, visualization, SQL, and Python.",
    instructor: "Vikram Singh",
    duration: "14 Weeks",
    image: "https://picsum.photos/id/133/600/340"
  },
  {
    id: 105,
    title: "Mobile App Development with Flutter",
    description: "Build beautiful cross-platform mobile apps for iOS and Android.",
    instructor: "Ananya Patel",
    duration: "11 Weeks",
    image: "https://picsum.photos/id/180/600/340"
  },
  {
    id: 106,
    title: "Digital Marketing & Social Media Strategy",
    description: "Learn SEO, content marketing, paid ads, and grow your online presence.",
    instructor: "Rohan Mehta",
    duration: "6 Weeks",
    image: "https://picsum.photos/id/201/600/340"
  }
];

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${API_URL}/courses`)
      .then(res => {
        setCourses(res.data.length > 0 ? res.data : sampleCourses);
        setLoading(false);
      })
      .catch(() => {
        setCourses(sampleCourses);
        setLoading(false);
      });
  }, []);

  const enroll = async (courseId: number) => {
    const token = localStorage.getItem('token');
    if (!token) return alert("Please login first!");

    try {
      await axios.post(`${API_URL}/enrollments/`, 
        { course_id: courseId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert('🎉 Successfully enrolled!');
    } catch (err: any) {
      alert(err.response?.data?.detail || "Enrollment failed");
    }
  };

  if (loading) return <div className="text-center py-20">Loading courses...</div>;

  return (
    <div>
      <div className="flex justify-between items-end mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Available Courses</h1>
        <p className="text-gray-500">Discover new skills and grow your career</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden group border border-gray-100"
          >
            {/* Compact Image */}
            <div className="relative h-40 overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3 bg-white text-xs font-medium px-3 py-1 rounded-full shadow text-gray-700">
                {course.duration}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-semibold text-base leading-tight line-clamp-2 mb-3 group-hover:text-blue-600 transition-colors">
                {course.title}
              </h3>

              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {course.description}
              </p>

              <div className="flex items-center gap-2 text-xs text-gray-500 mb-5">
                <User size={16} />
                <span className="truncate">{course.instructor}</span>
              </div>

              <button
                onClick={() => enroll(course.id)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-3 rounded-xl transition flex items-center justify-center gap-2"
              >
                <BookOpen size={17} />
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;