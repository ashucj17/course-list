import React, { useState } from 'react';
import EnquiryForm from './EnquiryForm';

const CourseItem = ({ course }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">{course.title}</h5>
        <p className="card-text">{course.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p className="mb-0"><strong>Price:</strong> ${course.price}</p>
            <p className="mb-0"><strong>Duration:</strong> {course.duration}</p>
          </div>
          <button 
            className="btn btn-primary" 
            onClick={() => setShowForm(!showForm)}
          >
            Enquire
          </button>
        </div>
        
        {showForm && (
          <div className="mt-4">
            <EnquiryForm courseId={course.id} courseName={course.title} closeForm={() => setShowForm(false)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseItem;