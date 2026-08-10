import React from 'react';
import { FlaskConical, Upload, CheckCircle } from 'lucide-react';

export default function Laboratory() {
  return (
    <div className="p-8 space-y-6 max-w-5xl mx-auto font-sans">

      <div>
        <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
          <FlaskConical className="w-6 h-6 text-purple-600" />
          <span>Pathology Diagnostic Laboratory</span>
        </h2>

        <p className="text-xs text-slate-500">
          Upload and verify clinical laboratory results.
        </p>
      </div>

      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs space-y-5">

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
            Select Patient ID
          </label>

          <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold">
            <option value="#1042">
              John Doe (#1042)
            </option>

            <option value="#1043">
              Emma Watson (#1043)
            </option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
            Test Category
          </label>

          <input
            type="text"
            placeholder="e.g. Complete Blood Count (CBC) / Lipid Profile"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold"
          />
        </div>

        <div className="border-2 border-dashed border-slate-200 p-8 rounded-2xl text-center space-y-2 bg-slate-50/50">

          <Upload className="w-8 h-8 text-slate-400 mx-auto" />

          <span className="text-xs font-bold text-slate-700 block">
            Drag & Drop PDF Report or Click to Upload
          </span>

          <span className="text-[10px] text-slate-400">
            Supported formats: PDF, PNG, JPG (Max 10MB)
          </span>

        </div>

        <button
          onClick={() =>
            alert('Lab report uploaded & attached to patient file!')
          }
          className="w-full py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2"
        >
          <CheckCircle className="w-4 h-4" />
          Upload Certified Lab Report
        </button>

      </div>
    </div>
  );
}
