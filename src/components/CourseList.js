import React, { useState, useEffect } from 'react';
import EnquiryForm from './EnquiryForm';
import './CourseList.css';

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await fetch('http://localhost:3001/courses');
      if (!response.ok) {
        throw new Error('Failed to fetch courses');
      }
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching courses. Please try again later.');
      setLoading(false);
    }
  };

  const handleEnquireClick = (course) => {
    setSelectedCourse(course);
  };

  const handleFormClose = () => {
    setSelectedCourse(null);
  };

  if (loading) return <div>Loading courses...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="course-list-container">
      <h1>Available Courses</h1>
      <div className="course-list">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <div className="course-details">
              <p><strong>Instructor:</strong> {course.instructor}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Price:</strong> ${course.price}</p>
            </div>
            <button 
              className="enquire-button" 
              onClick={() => handleEnquireClick(course)}
            >
              Enquire Now
            </button>
          </div>
        ))}
      </div>

      {selectedCourse && (
        <EnquiryForm 
          course={selectedCourse} 
          onClose={handleFormClose} 
        />
      )}
    </div>
  );
}

export default CourseList;