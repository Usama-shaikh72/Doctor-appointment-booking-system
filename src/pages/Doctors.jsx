import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doctors } from '../assets/assets';
import { AppContext } from '../context/AppContext';

function Doctors() {

  const navigate = useNavigate();
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [speciality]);

  return (
    <div className="p-4">
      <p className="text-lg font-medium mb-4">Browse through the doctors specialist.</p>

      <div className="flex gap-8">
        
        {/* Left Sidebar */}
        <div className="flex flex-col gap-2 w-48">
          <p className="cursor-pointer hover:text-blue-600">General physician</p>
          <p className="cursor-pointer hover:text-blue-600">Gynecologist</p>
          <p className="cursor-pointer hover:text-blue-600">Dermatologist</p>
          <p className="cursor-pointer hover:text-blue-600">Pediatricians</p>
          <p className="cursor-pointer hover:text-blue-600">Neurologist</p>
          <p className="cursor-pointer hover:text-blue-600">Gastroenterologist</p>
        </div>

        {/* Doctors List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
          {filterDoc.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2.5 transition-all duration-500"
            >
              <img className="bg-blue-50 w-full" src={item.image} alt={item.name} />

              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Available</p>
                </div>

                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Doctors;
