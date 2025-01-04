import React from 'react';

const Education = () => {
  return (
    <div className="w-11/12 border-2 mx-auto p-6 shadow-lg rounded-xl mt-12">
      <h2 className="text-5xl  font-bold text-center text-orange-500 mb-8">Education</h2>
      
      <div className=" p-6  transition-shadow duration-300">
        <h3 className="text-4xl text-center font-semibold text-white mb-2 hover:text-blue-600 transition-colors duration-300">
          Bangladesh Army University of Science and Technology (BAUST)
        </h3>
        <p className="text-3xl text-white text-center py-5">Department of Computer Science and Engineering (CSE)</p>
        <p className="text-2xl text-center py-5 text-orange-500 mb-4">Admitted: <span className="font-medium text-indigo-600">2020</span> | Graduated: <span className="font-medium text-indigo-600">2024</span></p>
        <p className="text-2xl text-orange-500 text-center">CGPA: <span className="font-bold text-blue-600 text-2xl">3.50</span></p>
      </div>
    </div>
  );
};

export default Education;
