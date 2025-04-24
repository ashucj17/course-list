import React, { useState, useEffect } from 'react';
import './EnquiryList.css';

function EnquiryList() {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const response = await fetch('http://localhost:3001/enquiries');
      if (!response.ok) {
        throw new Error('Failed to fetch enquiries');
      }
      const data = await response.json();
      setEnquiries(data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching enquiries. Please try again later.');
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  if (loading) return <div>Loading enquiries...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="enquiry-list-container">
      <h1>Course Enquiries</h1>
      {enquiries.length === 0 ? (
        <p>No enquiries yet.</p>
      ) : (
        <div className="enquiry-list">
          {enquiries.map(enquiry => (
            <div key={enquiry.id} className="enquiry-card">
              <h3>Enquiry for: {enquiry.courseTitle}</h3>
              <div className="enquiry-details">
                <p><strong>Name:</strong> {enquiry.name}</p>
                <p><strong>Email:</strong> {enquiry.email}</p>
                <p><strong>Phone:</strong> {enquiry.phone}</p>
                {enquiry.message && (
                  <p><strong>Message:</strong> {enquiry.message}</p>
                )}
                <p className="enquiry-date">
                  <strong>Submitted:</strong> {formatDate(enquiry.createdAt)}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EnquiryList;