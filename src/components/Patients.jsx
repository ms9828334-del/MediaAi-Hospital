import React from 'react';
import { Eye, Star } from 'lucide-react';

export default function Patients({ setActiveTab, setSelectedPatient }) {
  const patientList = [
    {
      id: '#1042',
      name: 'John Doe',
      age: 45,
      gender: 'Male',
      dept: 'Cardiology',
      doctor: 'Dr. Sarah Jenkins',
      status: 'Admitted',
      vip: 'Doctor Relative VIP',
    },
    {
      id: '#1043',
      name: 'Emma Watson',
      age: 32,
      gender: 'Female',
      dept: 'Neurology',
      doctor: 'Dr. Robert Chen',
      status: 'Admitted',
      vip: 'Standard',
    },
    {
      id: '#1044',
      name: 'Michael Vance',
      age: 60,
      gender: 'Male',
      dept: 'ICU Critical',
      doctor: 'Dr. Lisa Ray',
      status: 'Critical Priority',
      vip: 'High Priority',
    },
  ];

  const handleSelect = (patient) => {
    setSelectedPatient(patient);
    setActiveTab('patient-profile');
  };

  return (
    <div className="p-8 space-y-6 max-w-7xl mx-auto font-sans">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-black text-slate-900">
            Patients Directory
          </h2>

          <p className="text-xs text-slate-500">
            Active ward admissions and medical records.
          </p>
        </div>

        <button
          onClick={() => setActiveTab('add-patient')}
          className="px-5 py-2.5 bg-medBlue hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md"
        >
          + Admit Patient
        </button>
      </div>

      {/* Patients Table */}
      <div className="bg-white border border-slate-200 rounded-3xl shadow-sm overflow-hidden">

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">

            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Patient ID / Name
                </th>

                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Age / Gender
                </th>

                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Department & Doctor
                </th>

                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Priority Tag
                </th>

                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Status
                </th>

                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-wider text-slate-500 text-right">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {patientList.map((p) => (
                <tr
                  key={p.id}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                >

                  {/* Patient */}
                  <td className="px-6 py-5">
                    <div>
                      <div className="font-black text-sm text-slate-900">
                        {p.name}
                      </div>

                      <div className="text-xs text-medBlue font-mono font-bold mt-1">
                        {p.id}
                      </div>
                    </div>
                  </td>

                  {/* Age / Gender */}
                  <td className="px-6 py-5">
                    <span className="text-xs font-semibold text-slate-700">
                      {p.age} Yrs / {p.gender}
                    </span>
                  </td>

                  {/* Department / Doctor */}
                  <td className="px-6 py-5">
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        {p.dept}
                      </div>

                      <div className="text-[11px] text-slate-500 mt-1">
                        {p.doctor}
                      </div>
                    </div>
                  </td>

                  {/* Priority */}
                  <td className="px-6 py-5">
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold flex items-center gap-1 w-fit ${
                        p.vip.includes('VIP')
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {p.vip.includes('VIP') && (
                        <Star className="w-3 h-3 fill-current" />
                      )}

                      {p.vip}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">
                    <span
                      className={`px-3 py-1 rounded-xl text-[10px] font-bold ${
                        p.status === 'Critical Priority'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="px-6 py-5 text-right">
                    <button
                      onClick={() => handleSelect(p)}
                      className="p-2 bg-blue-50 text-medBlue hover:bg-blue-100 rounded-xl font-bold flex items-center gap-1 text-xs ml-auto"
                    >
                      <Eye className="w-4 h-4" />
                      Open Chart
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </div>
  );
}
