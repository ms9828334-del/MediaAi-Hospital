import React, { useState } from 'react';
import {
  User,
  Pill,
  FlaskConical,
  DollarSign,
  Download,
  ArrowLeft,
  ShieldCheck,
} from 'lucide-react';

export default function PatientPortal({ patientData, onBackToLogin }) {
  const [activeTab, setActiveTab] = useState('overview');

  const patient = {
    id: patientData?.id || '#1042',
    name: 'John Doe',
    age: 45,
    gender: 'Male',
    cnic: patientData?.cnic || '42101-9988221-1',
    phone: '+92 300 1234567',
    dept: 'Cardiology',
    doctor: 'Dr. Sarah Jenkins',
    admissionDate: 'August 1, 2026',
    status: 'Admitted (Ward 3, Bed 12)',
    billing: {
      roomCharges: 'PKR 15,000',
      labCharges: 'PKR 8,500',
      pharmacyCharges: 'PKR 6,200',
      doctorFee: 'PKR 10,000',
      totalAmount: 'PKR 39,700',
      paidAmount: 'PKR 25,000',
      remainingBalance: 'PKR 14,700',
      status: 'Partial Payment',
    },
    medicines: [
      {
        id: 1,
        name: 'Amlodipine 5mg',
        schedule: 'Once daily (Morning)',
        status: 'Active',
      },
      {
        id: 2,
        name: 'Insulin Regular 10 IU',
        schedule: 'Before meals (TID)',
        status: 'Active',
      },
      {
        id: 3,
        name: 'Aspirin 75mg',
        schedule: 'Nightly',
        status: 'Discontinued',
        reason: 'Replaced due to mild gastric irritation on Aug 3',
      },
    ],
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-6">

        {/* Header Bar */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToLogin}
              className="p-3 bg-slate-100 hover:bg-slate-200 rounded-2xl transition-all text-slate-700 font-bold flex items-center gap-1 text-xs"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Exit Portal</span>
            </button>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black text-slate-900">
                  {patient.name}
                </h1>

                <span className="px-3 py-0.5 bg-blue-100 text-medBlue font-mono font-bold text-xs rounded-full">
                  {patient.id}
                </span>
              </div>

              <p className="text-xs text-slate-500 mt-1">
                {patient.age} Yrs, {patient.gender} • CNIC: {patient.cnic} •
                Admitted: {patient.admissionDate}
              </p>
            </div>
          </div>

          <div>
            <span className="px-4 py-2 bg-emerald-100 text-emerald-800 font-bold text-xs rounded-xl flex items-center gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Certified Patient Online Portal
            </span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2">
          {[
            { id: 'overview', label: 'Summary & Location', icon: User },
            { id: 'medicines', label: 'Prescriptions & History', icon: Pill },
            { id: 'reports', label: 'Lab Diagnostics', icon: FlaskConical },
            { id: 'billing', label: 'Billing Statement', icon: DollarSign },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-medBlue text-white shadow-md shadow-blue-500/20'
                    : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Contents */}
        <div
          id="printable-area"
          className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-sm"
        >

          {/* Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 pb-2 border-b border-slate-100">
                Hospital Admission Record
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-xs font-bold text-slate-400 uppercase block">
                    Attending Doctor
                  </span>
                  <span className="text-base font-black text-slate-900">
                    {patient.doctor}
                  </span>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-xs font-bold text-slate-400 uppercase block">
                    Current Location
                  </span>
                  <span className="text-base font-black text-medBlue">
                    {patient.status}
                  </span>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-xs font-bold text-slate-400 uppercase block">
                    Specialty Unit
                  </span>
                  <span className="text-base font-black text-slate-900">
                    {patient.dept}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Medicines */}
          {activeTab === 'medicines' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="font-bold text-slate-900">
                  Medication Log (Audit Compliant)
                </h3>

                <span className="text-xs text-slate-500">
                  Includes Active & Discontinued Medications
                </span>
              </div>

              <div className="space-y-3">
                {patient.medicines.map((med) => (
                  <div
                    key={med.id}
                    className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-3"
                  >
                    <div>
                      {med.status === 'Discontinued' ? (
                        <div>
                          <h4 className="font-black text-slate-400 line-through text-base decoration-red-500 decoration-2">
                            {med.name}
                          </h4>

                          <span className="inline-block mt-1 px-2.5 py-0.5 bg-red-100 text-red-700 text-[10px] font-bold rounded-md uppercase">
                            Discontinued Medication
                          </span>

                          <p className="text-xs text-red-600 font-semibold mt-1">
                            Reason: {med.reason}
                          </p>
                        </div>
                      ) : (
                        <div>
                          <h4 className="font-black text-slate-900 text-base">
                            {med.name}
                          </h4>

                          <p className="text-xs text-slate-500">
                            {med.schedule}
                          </p>
                        </div>
                      )}
                    </div>

                    <span
                      className={`px-3 py-1 rounded-xl text-xs font-extrabold w-fit ${
                        med.status === 'Active'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {med.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reports */}
          {activeTab === 'reports' && (
            <div className="space-y-6">
              <h3 className="font-bold text-slate-900 pb-2 border-b border-slate-100">
                Lab Reports & Diagnostics
              </h3>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    Lipid Profile & HbA1c Panel
                  </h4>

                  <p className="text-xs text-slate-500">
                    Aug 3, 2026 • MediAI Pathology Diagnostic Lab
                  </p>
                </div>

                <button
                  onClick={() =>
                    alert('Downloading official Lab Diagnostic PDF...')
                  }
                  className="px-4 py-2 bg-medBlue text-white font-bold text-xs rounded-xl flex items-center gap-1 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </button>
              </div>
            </div>
          )}

          {/* Billing */}
          {activeTab === 'billing' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <h3 className="font-bold text-slate-900">
                  Hospital Billing & Expense Breakdown
                </h3>

                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-slate-800 text-white font-bold text-xs rounded-xl flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  Print Receipt
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-xs font-bold text-slate-400 block mb-1">
                    Room / Bed Fee
                  </span>

                  <span className="font-black text-slate-800">
                    {patient.billing.roomCharges}
                  </span>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-xs font-bold text-slate-400 block mb-1">
                    Lab Tests
                  </span>

                  <span className="font-black text-slate-800">
                    {patient.billing.labCharges}
                  </span>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-xs font-bold text-slate-400 block mb-1">
                    Pharmacy
                  </span>

                  <span className="font-black text-slate-800">
                    {patient.billing.pharmacyCharges}
                  </span>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <span className="text-xs font-bold text-slate-400 block mb-1">
                    Doctor Consultation
                  </span>

                  <span className="font-black text-slate-800">
                    {patient.billing.doctorFee}
                  </span>
                </div>
              </div>

              <div className="p-6 bg-slate-900 text-white rounded-3xl space-y-4">
                <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-3">
                  <span className="text-slate-400">
                    Total Invoice Amount:
                  </span>

                  <span className="font-black text-xl">
                    {patient.billing.totalAmount}
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm border-b border-slate-800 pb-3">
                  <span className="text-slate-400">
                    Amount Paid:
                  </span>

                  <span className="font-black text-emerald-400 text-xl">
                    {patient.billing.paidAmount}
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm pt-1">
                  <span className="text-slate-300 font-bold">
                    Outstanding Balance:
                  </span>

                  <span className="font-black text-red-400 text-2xl">
                    {patient.billing.remainingBalance}
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
