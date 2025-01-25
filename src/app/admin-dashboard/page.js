'use client';
import React, { useState } from 'react';

const AdminPanel = () => {
  const [applications, setApplications] = useState([]); // Fetch applications from DB
  const [loans, setLoans] = useState([]); // Fetch loan details from DB
  const [slots, setSlots] = useState([]); // Available slots
  const [appointments, setAppointments] = useState([]); // Appointments for users

  const [cityFilter, setCityFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [tokenNumber, setTokenNumber] = useState('');

  const handleTokenAdd = (applicationId) => {
    // Logic to add token number
  };

  const filteredApplications = applications.filter((app) => {
    return (
      (cityFilter ? app.city === cityFilter : true) &&
      (countryFilter ? app.country === countryFilter : true)
    );
  });

  const scheduleAppointment = (applicationId) => {
    // Logic to automatically assign a slot based on availability
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-3xl font-bold text-center mb-10">Admin Panel</h1>
      
      {/* Application Management Section */}
      <section className="mb-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-5">Application Management</h2>
        <div className="mb-5 flex gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">City Filter</label>
            <input
              type="text"
              value={cityFilter}
              onChange={(e) => setCityFilter(e.target.value)}
              className="mt-2 p-2 border border-gray-300 rounded-md w-40"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Country Filter</label>
            <input
              type="text"
              value={countryFilter}
              onChange={(e) => setCountryFilter(e.target.value)}
              className="mt-2 p-2 border border-gray-300 rounded-md w-40"
            />
          </div>
        </div>

        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="p-3 border border-gray-200">Application ID</th>
              <th className="p-3 border border-gray-200">Name</th>
              <th className="p-3 border border-gray-200">City</th>
              <th className="p-3 border border-gray-200">Country</th>
              <th className="p-3 border border-gray-200">Token Number</th>
              <th className="p-3 border border-gray-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredApplications.map((app) => (
              <tr key={app.id}>
                <td className="p-3 border border-gray-200">{app.id}</td>
                <td className="p-3 border border-gray-200">{app.name}</td>
                <td className="p-3 border border-gray-200">{app.city}</td>
                <td className="p-3 border border-gray-200">{app.country}</td>
                <td className="p-3 border border-gray-200">{app.tokenNumber}</td>
                <td className="p-3 border border-gray-200">
                  <button
                    onClick={() => handleTokenAdd(app.id)}
                    className="bg-blue-500 text-white p-2 rounded-md"
                  >
                    Add Token
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Loan Details Section */}
      <section className="mb-10 p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-5">Loan Details</h2>
        <table className="min-w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="p-3 border border-gray-200">Loan ID</th>
              <th className="p-3 border border-gray-200">Category</th>
              <th className="p-3 border border-gray-200">Subcategory</th>
              <th className="p-3 border border-gray-200">Amount</th>
              <th className="p-3 border border-gray-200">Guarantor</th>
              <th className="p-3 border border-gray-200">User Info</th>
            </tr>
          </thead>
          <tbody>
            {loans.map((loan) => (
              <tr key={loan.id}>
                <td className="p-3 border border-gray-200">{loan.id}</td>
                <td className="p-3 border border-gray-200">{loan.category}</td>
                <td className="p-3 border border-gray-200">{loan.subcategory}</td>
                <td className="p-3 border border-gray-200">{loan.amount}</td>
                <td className="p-3 border border-gray-200">{loan.guarantor}</td>
                <td className="p-3 border border-gray-200">{loan.userInfo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Appointment Scheduling Section */}
      <section className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-5">Appointment Scheduling</h2>
        <button
          onClick={() => scheduleAppointment()}
          className="bg-green-500 text-white p-3 rounded-md mb-5"
        >
          Auto Schedule Appointments
        </button>
        <h3 className="text-xl font-medium mb-3">Available Slots</h3>
        <ul className="list-disc pl-5 mb-5">
          {slots.map((slot, index) => (
            <li key={index} className="text-gray-700">{slot}</li>
          ))}
        </ul>
        <h3 className="text-xl font-medium mb-3">Scheduled Appointments</h3>
        <ul className="list-disc pl-5">
          {appointments.map((appointment, index) => (
            <li key={index} className="text-gray-700">
              {appointment.userName} - {appointment.slot}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminPanel;
