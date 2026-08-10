import React from 'react';
import {
  Settings as SettingsIcon,
  Shield,
  Database,
  Bell,
} from 'lucide-react';

export default function Settings() {
  return (
    <div className="p-8 space-y-6 max-w-4xl mx-auto font-sans">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
          <SettingsIcon className="w-6 h-6 text-slate-700" />
          <span>System Settings & Governance</span>
        </h2>

        <p className="text-xs text-slate-500">
          Manage security protocols and system defaults.
        </p>
      </div>

      {/* Settings Card */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-6 shadow-xs">

        {/* HIPAA Compliance */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">

          <div>
            <h3 className="font-bold text-slate-900 text-sm">
              HIPAA Compliance & Immutable Audit Logging
            </h3>

            <p className="text-xs text-slate-500">
              Prevents deletion of medical entries; enforces strikethrough correction.
            </p>
          </div>

          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-extrabold text-xs rounded-full">
            ACTIVE
          </span>

        </div>

        {/* Patient Portal API */}
        <div className="flex items-center justify-between">

          <div>
            <h3 className="font-bold text-slate-900 text-sm">
              Public Patient Portal API Access
            </h3>

            <p className="text-xs text-slate-500">
              Allows read-only access via Patient ID & CNIC authentication.
            </p>
          </div>

          <span className="px-3 py-1 bg-blue-100 text-medBlue font-extrabold text-xs rounded-full">
            ENABLED
          </span>

        </div>

      </div>
    </div>
  );
}
