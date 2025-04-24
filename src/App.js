import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CourseList from './components/CourseList';
import EnquiryList from './components/EnquiryList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Courses</Link>
            </li>
            <li>
              <Link to="/enquiries">Enquiries</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/enquiries" element={<EnquiryList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
