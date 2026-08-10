import React, { useState } from 'react';
import {
  User,
  HeartPulse,
  Pill,
  ArrowLeft,
  Droplet,
  Star,
  DollarSign,
  ArrowRightLeft,
} from 'lucide-react';

export default function PatientProfile({ patient, setActiveTab }) {
  const [activeTabName, setActiveTabName] = useState('overview');
  const [showHandoverModal, setShowHandoverModal] = useState(false);
  const [patientVipTag, setPatientVipTag] = useState('Doctor Relative VIP');

  const [handoverData, setHandoverData] = useState({
    fromDoctor: 'Dr. Sarah Jenkins',
    toDoctor: 'Dr. Robert Chen (Neurology)',
    reason:
      'Critical BP spike accompanied by neurological symptoms requiring specialized ICU oversight.',
  });

  const [medicines, setMedicines] = useState([
    {
      id: 1,
      name: 'Amlodipine 5mg',
      schedule: 'Morning Dose',
      status: 'Active',
    },
    {
      id: 2,
      name: 'Insulin Regular 10 IU',
      schedule: 'Before meals',
      status: 'Active',
    },
    {
      id: 3,
      name: 'Aspirin 75mg',
      schedule: 'Nightly',
      status: 'Discontinued',
      reason: 'Stopped due to gastric irritation on Aug 3',
    },
  ]);

  const defaultPatient = patient || {
    id: '#1042',
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    cnic: '42101-9988221-1',
    phone: '+92 300 1234567',
    dept: 'Cardiology',
    doctor: handoverData.toDoctor,
    status: 'Admitted',
  };

  const handleDiscontinueMed = (medId) => {
    const reason = prompt(
      'State clinical reason for discontinuing this medicine:'
    );

    if (!reason) return;

    setMedicines(
      medicines.map((med) => {
        if (med.id === medId) {
          return {
            ...med,
            status: 'Discontinued',
            reason,
          };
        }

        return med;
      })
    );
  };

  return (
    <div className="p-8 space-y-6 bg-medWhite min-h-full font-sans max-w-6xl mx-auto">

      {/* Patient Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200">

        <div className="flex items-center gap-4">

          <button
            onClick={() => setActiveTab('patients')}
            className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-slate-600 shadow-xs"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          <div>
            <div className="flex items-center gap-2 flex-wrap">

              <h2 className="text-2xl font-black text-slate-900">
                {defaultPatient.name}
              </h2>

              <span className="text-xs font-mono text-medBlue bg-blue-50 px-3 py-1 rounded-full">
                {defaultPatient.id}
              </span>

              <span className="px-3 py-1 bg-amber-100 text-amber-800 font-extrabold text-xs rounded-full flex items-center gap-1 border border-amber-300">
                <Star className="w-3.5 h-3.5 fill-amber-500" />
                {patientVipTag}
              </span>

            </div>

            <p className="text-xs text-slate-500 mt-0.5">
              {defaultPatient.age} Yrs, {defaultPatient.gender} • CNIC:{' '}
              {defaultPatient.cnic} • Doctor: {defaultPatient.doctor}
            </p>
          </div>

        </div>

        <button
          onClick={() => setShowHandoverModal(true)}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-bold text-xs rounded-xl flex items-center gap-2 shadow-sm"
        >
          <ArrowRightLeft className="w-4 h-4 text-medBlue" />
          <span>Transfer Doctor</span>
        </button>

      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">

        {[
          { id: 'overview', label: 'Overview', icon: User },
          { id: 'vitals', label: 'Vitals', icon: HeartPulse },
          {
            id: 'medicines',
            label: 'Prescriptions (Audit Trail)',
            icon: Pill,
          },
          {
            id: 'transfusion',
            label: 'Blood Transfusion',
            icon: Droplet,
          },
          {
            id: 'billing',
            label: 'Billing Summary',
            icon: DollarSign,
          },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTabName === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTabName(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-medBlue text-white shadow-md shadow-blue-500/20'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}

      </div>

      {/* Content */}
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">

        {/* Overview */}
        {activeTabName === 'overview' && (
          <div className="space-y-6">

            <h3 className="font-bold text-slate-900 pb-2 border-b border-slate-100">
              Patient Overview & Doctor Handover History
            </h3>

            <div className="p-4 bg-blue-50/60 border border-blue-200 rounded-2xl space-y-2">

              <span className="text-xs font-black text-medBlue uppercase block">
                Recent Clinical Handover Record
              </span>

              <p className="text-xs text-slate-700">
                <strong>Transferred From:</strong>{' '}
                {handoverData.fromDoctor} →{' '}
                <strong>Transferred To:</strong>{' '}
                {handoverData.toDoctor}
              </p>

              <p className="text-xs text-slate-600">
                <strong>Reason:</strong> {handoverData.reason}
              </p>

            </div>

          </div>
        )}

        {/* Vitals */}
        {activeTabName === 'vitals' && (
          <div className="space-y-6">

            <h3 className="font-bold text-slate-900 pb-2 border-b border-slate-100">
              Patient Vital Signs
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
                <span className="text-xs font-bold text-red-700 uppercase block">
                  Blood Pressure
                </span>
                <span className="text-2xl font-black text-slate-900">
                  150/95 mmHg
                </span>
              </div>

              <div className="p-4 bg-blue-50 border border-blue-200 rounded-2xl">
                <span className="text-xs font-bold text-blue-700 uppercase block">
                  Heart Rate
                </span>
                <span className="text-2xl font-black text-slate-900">
                  88 BPM
                </span>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
                <span className="text-xs font-bold text-emerald-700 uppercase block">
                  Temperature
                </span>
                <span className="text-2xl font-black text-slate-900">
                  98.6 °F
                </span>
              </div>

            </div>

          </div>
        )}

        {/* Medicines */}
        {activeTabName === 'medicines' && (
          <div className="space-y-4">

            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h3 className="font-bold text-slate-900">
                Active & Discontinued Medications
              </h3>

              <span className="text-xs text-slate-400">
                Audit Compliant - Strikethrough Protection
              </span>
            </div>

            <div className="space-y-3">

              {medicines.map((med) => (
                <div
                  key={med.id}
                  className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-4"
                >

                  <div>

                    {med.status === 'Discontinued' ? (
                      <div>

                        <h4 className="font-bold text-slate-400 line-through text-base decoration-red-500 decoration-2">
                          {med.name}
                        </h4>

                        <span className="inline-block mt-1 px-2 py-0.5 bg-red-100 text-red-700 text-[10px] font-bold rounded uppercase">
                          DISCONTINUED - DO NOT ADMINISTER
                        </span>

                        <p className="text-xs text-red-600 mt-1">
                          Reason: {med.reason}
                        </p>

                      </div>
                    ) : (
                      <div>

                        <h4 className="font-bold text-slate-900 text-sm">
                          {med.name}
                        </h4>

                        <p className="text-xs text-slate-500">
                          {med.schedule}
                        </p>

                      </div>
                    )}

                  </div>

                  {med.status === 'Active' && (
                    <button
                      onClick={() => handleDiscontinueMed(med.id)}
                      className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 font-bold text-xs rounded-lg transition-all"
                    >
                      Discontinue / Mark Cut
                    </button>
                  )}

                </div>
              ))}

            </div>

          </div>
        )}

        {/* Blood Transfusion */}
        {activeTabName === 'transfusion' && (
          <div className="space-y-6">

            <h3 className="font-bold text-slate-900 pb-2 border-b border-slate-100 flex items-center gap-2">
              <Droplet className="w-5 h-5 text-red-600" />
              <span>Blood Transfusion Record</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
                <span className="text-xs font-bold text-red-700 uppercase block">
                  Blood Group
                </span>

                <span className="text-2xl font-black text-slate-900">
                  B Positive (B+)
                </span>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                <span className="text-xs font-bold text-slate-500 uppercase block">
                  Units Transfused
                </span>

                <span className="text-2xl font-black text-slate-900">
                  2 Units
                </span>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                <span className="text-xs font-bold text-slate-500 uppercase block">
                  Next Transfusion
                </span>

                <span className="text-2xl font-black text-medBlue">
                  Not Required
                </span>
              </div>

            </div>

          </div>
        )}

        {/* Billing */}
        {activeTabName === 'billing' && (
          <div className="space-y-6">

            <h3 className="font-bold text-slate-900 pb-2 border-b border-slate-100">
              Financial Billing Summary
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                <span className="text-xs font-bold text-slate-400 block">
                  Total Expenses
                </span>

                <span className="text-xl font-black text-slate-900">
                  PKR 39,700
                </span>
              </div>

              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
                <span className="text-xs font-bold text-emerald-700 block">
                  Paid Amount
                </span>

                <span className="text-xl font-black text-emerald-800">
                  PKR 25,000
                </span>
              </div>

              <div className="p-4 bg-red-50 border border-red-200 rounded-2xl">
                <span className="text-xs font-bold text-red-700 block">
                  Remaining Due
                </span>

                <span className="text-xl font-black text-red-700">
                  PKR 14,700
                </span>
              </div>

            </div>

          </div>
        )}

      </div>

      {/* Transfer Doctor Modal */}
      {showHandoverModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">

          <div className="bg-white p-6 rounded-3xl max-w-md w-full space-y-4 border border-slate-200 shadow-2xl">

            <h3 className="font-black text-lg text-slate-900">
              Transfer Patient to Another Doctor
            </h3>

            <div>

              <label className="block text-xs font-bold text-slate-700 mb-1">
                New Attending Doctor
              </label>

              <select
                value={handoverData.toDoctor}
                onChange={(e) =>
                  setHandoverData({
                    ...handoverData,
                    toDoctor: e.target.value,
                  })
                }
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold"
              >
                <option value="Dr. Robert Chen (Neurology)">
                  Dr. Robert Chen (Neurology)
                </option>

                <option value="Dr. Lisa Ray (Emergency)">
                  Dr. Lisa Ray (Emergency)
                </option>
              </select>

            </div>

            <div>

              <label className="block text-xs font-bold text-slate-700 mb-1">
                Handover Reason
              </label>

              <textarea
                rows="3"
                value={handoverData.reason}
                onChange={(e) =>
                  setHandoverData({
                    ...handoverData,
                    reason: e.target.value,
                  })
                }
                className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
              />

            </div>

            <div className="flex justify-end gap-2 pt-2">

              <button
                onClick={() => setShowHandoverModal(false)}
                className="px-4 py-2 bg-slate-100 font-bold text-xs rounded-xl"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setShowHandoverModal(false);
                  alert('Patient transferred successfully!');
                }}
                className="px-4 py-2 bg-medBlue text-white font-bold text-xs rounded-xl"
              >
                Confirm Transfer
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
