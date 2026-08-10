import React, { useState } from 'react';
import {
  Stethoscope,
  User,
  Lock,
  FileText,
  ArrowRight,
  ShieldCheck,
  Activity,
} from 'lucide-react';

export default function Login({ onLoginSuccess, onOpenPatientPortal }) {
  const [accessMode, setAccessMode] = useState('staff');

  // Staff State
  const [role, setRole] = useState('Doctor');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Patient State
  const [patientId, setPatientId] = useState('');
  const [patientCnic, setPatientCnic] = useState('');

  const handleStaffSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in all staff credentials.');
      return;
    }

    onLoginSuccess(role);
  };

  const handlePatientSubmit = (e) => {
    e.preventDefault();

    if (!patientId.trim()) {
      alert('Please enter a valid Patient ID (e.g. #1042)');
      return;
    }

    onOpenPatientPortal({
      id: patientId,
      cnic: patientCnic,
    });
  };

  return (
    <div className="min-h-screen bg-medWhite flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="bg-medDark px-8 py-8 text-center">
            <div className="mx-auto mb-4 w-14 h-14 rounded-2xl bg-medBlue flex items-center justify-center shadow-lg">
              <Stethoscope className="w-7 h-7 text-white" />
            </div>

            <h1 className="text-2xl font-black text-white">
              MediAI Smart Hospital
            </h1>

            <p className="text-sm text-slate-300 mt-2">
              Clinical EHR System & Public Patient Portal
            </p>
          </div>

          <div className="p-6 sm:p-8">
            {/* Toggle Access Switch */}
            <div className="grid grid-cols-2 gap-1 p-1 bg-slate-100 rounded-xl mb-7">
              <button
                type="button"
                onClick={() => setAccessMode('staff')}
                className={`py-2.5 text-xs font-bold rounded-lg transition-all ${
                  accessMode === 'staff'
                    ? 'bg-medBlue text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                Hospital Staff
              </button>

              <button
                type="button"
                onClick={() => setAccessMode('patient')}
                className={`py-2.5 text-xs font-bold rounded-lg transition-all ${
                  accessMode === 'patient'
                    ? 'bg-medBlue text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                Patient Portal
              </button>
            </div>

            {/* Staff Login */}
            {accessMode === 'staff' ? (
              <form onSubmit={handleStaffSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2">
                    Hospital Role
                  </label>

                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-medBlue/20"
                  >
                    <option value="Administrator">
                      Hospital Administrator
                    </option>
                    <option value="Doctor">Attending Doctor</option>
                    <option value="Nurse">Staff Nurse</option>
                    <option value="Lab Technician">Lab Technician</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2">
                    Staff Email / Employee ID
                  </label>

                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                    <input
                      type="email"
                      required
                      placeholder="doctor@mediai.org"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-medBlue/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2">
                    Password
                  </label>

                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                    <input
                      type="password"
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-medBlue/20"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-medBlue hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/30 transition-all flex items-center justify-center gap-2 mt-2"
                >
                  Access Hospital Console
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                  <ShieldCheck className="w-4 h-4 text-medSuccess" />
                  Secure hospital staff access
                </div>
              </form>
            ) : (
              /* Patient Portal */
              <form onSubmit={handlePatientSubmit} className="space-y-5">
                <div className="p-4 bg-medLightBlue border border-blue-100 rounded-2xl">
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-medBlue mt-0.5" />

                    <p className="text-xs leading-5 text-slate-600">
                      Enter your assigned Patient ID and CNIC/Phone for safe
                      online access to your medical timeline and billing
                      statements.
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2">
                    Patient ID *
                  </label>

                  <div className="relative">
                    <FileText className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                    <input
                      type="text"
                      required
                      placeholder="e.g. #1042"
                      value={patientId}
                      onChange={(e) => setPatientId(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-medBlue/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-2">
                    CNIC or Contact Number *
                  </label>

                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                    <input
                      type="text"
                      required
                      placeholder="42101-9988221-1 or +92 300 1234567"
                      value={patientCnic}
                      onChange={(e) => setPatientCnic(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-medBlue/20"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-medSuccess hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2 mt-2"
                >
                  View Reports & Invoice
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                  <ShieldCheck className="w-4 h-4 text-medSuccess" />
                  Your medical information is protected
                </div>
              </form>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-5">
          MediAI Smart Hospital Management System
        </p>
      </div>
    </div>
  );
}
