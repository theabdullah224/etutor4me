'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const ParentDashboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const { data: session, status } = useSession();

  useEffect(() => {
    const fetchStudents = async () => {
        if (!session?.user?.id) return;
  
        try {
          const response = await axios.get('/api/parent-Student-Relationship/parent-side-api/Fetch-Students', {
            params: { userId: session.user.id }, // Send userId to the backend
          });
          setStudents(response.data.students);
        } catch (error) {
          console.error('Error fetching students:', error);
        } finally {
          setLoading(false);
        }
      };
    fetchStudents();
  }, [session]);

  const sendRequest = async (studentId: string) => {
    const userId = session?.user?.id;
    try {
      const response = await axios.post('/api/parent-Student-Relationship/parent-side-api/Send-Request-to-Student', {
        userId, // Send the userId to the backend
        studentId,
      });
      alert('Request sent!');
      // Update local state to reflect the request sent status
      setStudents((prevStudents:any) =>
        prevStudents.map((student:any) =>
          student._id === studentId ? { ...student, requestSent: true } : student
        )
      );
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };

  if (loading) return <p>Loading students...</p>;

  // Filter students based on the search term and exclude those who have already received a request
  const filteredStudents = students.filter(
    (student:any) => !student.requestSent && `${student.firstName} ${student.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">
        All Students
      </h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg mb-4"
      />

      {/* Display student list */}
      <ul className="divide-y divide-gray-200">
        {filteredStudents.map((student: any) => (
          <li
            key={student._id}
            className="flex items-center justify-between py-3 hover:bg-gray-50 transition-colors duration-200"
          >
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold">
                {student.firstName[0]}{student.lastName[0]}
              </div>
              <span className="text-gray-700">
                {student.firstName} {student.lastName}
              </span>
            </div>
            <button
              onClick={() => sendRequest(student._id)}
              disabled={student.requestSent} // Disable button if request is already sent
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-darkBlue transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              {student.requestSent ? 'Request Sent' : 'Send Request'}
            </button>
          </li>
        ))}
      </ul>

      {/* Display message when no students match the search */}
      {filteredStudents.length === 0 && (
        <p className="text-center text-gray-500 italic">No students found</p>
      )}
    </div>
  );
};

export default ParentDashboard;
