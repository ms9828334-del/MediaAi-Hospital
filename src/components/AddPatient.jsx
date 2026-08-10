import React, { useState } from 'react';
import { UserPlus, CheckCircle } from 'lucide-react';

export default function AddPatient({ setActiveTab }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'Male',
    cnic: '',
    phone: '',
    dept: 'Cardiology',
    doctor: 'Dr. Sarah Jenkins',
    vipTag: 'Standard Patient',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Patient admitted and registered into system!');

    setActiveTab('patients');
  };

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6 font-sans">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
          <UserPlus className="w-6 h-6 text-medBlue" />

          <span>New Patient Admission</span>
        </h2>

        <p className="text-xs text-slate-500">
          Register new hospital patient and assign priority status.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-5"
      >

        {/* Name + Age/Gender */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Full Name *
            </label>

            <input
              type="text"
              required
              placeholder="e.g. John Doe"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
            />
          </div>

          {/* Age + Gender */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Age & Gender *
            </label>

            <div className="flex gap-2">

              <input
                type="number"
                required
                placeholder="Age"
                value={formData.age}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    age: e.target.value,
                  })
                }
                className="w-1/2 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
              />

              <select
                value={formData.gender}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    gender: e.target.value,
                  })
                }
                className="w-1/2 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

            </div>
          </div>

        </div>

        {/* CNIC + Priority */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          {/* CNIC */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              CNIC / ID Number *
            </label>

            <input
              type="text"
              required
              placeholder="42101-XXXXXXX-X"
              value={formData.cnic}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  cnic: e.target.value,
                })
              }
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
            />
          </div>

          {/* Priority */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Priority Flag
            </label>

            <select
              value={formData.vipTag}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  vipTag: e.target.value,
                })
              }
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
            >
              <option value="Standard Patient">
                Standard Patient
              </option>

              <option value="Doctor Relative VIP">
                Doctor Relative / Staff VIP
              </option>

              <option value="Critical Priority">
                Critical Priority
              </option>
            </select>
          </div>

        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full py-3.5 bg-medBlue hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2"
        >
          <CheckCircle className="w-4 h-4" />
          Save & Complete Admission
        </button>

      </form>
    </div>
  );
}
