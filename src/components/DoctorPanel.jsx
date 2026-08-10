import React, { useState } from 'react';
import { Stethoscope, Sparkles, CheckCircle } from 'lucide-react';

export default function DoctorPanel() {
  const [docData, setDocData] = useState({
    patient: 'John Doe (#1042)',
    diagnosis: 'Hypertensive Urgency with Hyperglycemia',
    medicine: '',
    notes:
      'Patient advised strict low-sodium diet and daily blood sugar monitoring.',
  });

  const medicineDatabase = [
    {
      name: 'Amlodipine 5mg',
      formula: 'Amlodipine Besylate - Anti-hypertensive',
    },
    {
      name: 'Amlodipine 10mg',
      formula: 'Amlodipine Besylate - Anti-hypertensive',
    },
    {
      name: 'Paracetamol 500mg',
      formula: 'Acetaminophen - Antipyretic/Analgesic',
    },
    {
      name: 'Insulin Regular 10 IU',
      formula: 'Human Insulin - Anti-diabetic',
    },
    {
      name: 'Metformin 500mg',
      formula: 'Biguanide - Glucose Control',
    },
  ];

  const [medQuery, setMedQuery] = useState('');
  const [filteredMeds, setFilteredMeds] = useState([]);

  const quickSymptoms = [
    'Chest Pain (Seene mein dard)',
    'Shortness of Breath',
    'Edema / Sojan (Haleema)',
    'High BP Spike',
    'High Blood Sugar',
    'Severe Headache',
  ];

  const handleMedQueryChange = (e) => {
    const query = e.target.value;

    setMedQuery(query);

    if (query.trim().length > 0) {
      const matches = medicineDatabase.filter(
        (m) =>
          m.name.toLowerCase().includes(query.toLowerCase()) ||
          m.formula.toLowerCase().includes(query.toLowerCase())
      );

      setFilteredMeds(matches);
    } else {
      setFilteredMeds([]);
    }
  };

  const selectMedicine = (medName) => {
    const updated = docData.medicine
      ? `${docData.medicine}, ${medName}`
      : medName;

    setDocData({
      ...docData,
      medicine: updated,
    });

    setMedQuery('');
    setFilteredMeds([]);
  };

  const addSymptomToDiagnosis = (symptom) => {
    const updated = docData.diagnosis
      ? `${docData.diagnosis} | ${symptom}`
      : symptom;

    setDocData({
      ...docData,
      diagnosis: updated,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    alert('Clinical diagnosis and prescription saved successfully!');
  };

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-6 font-sans">

      {/* Header */}
      <div>
        <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
          <Stethoscope className="w-6 h-6 text-medBlue" />
          Doctor Examination & Smart Prescription
        </h2>

        <p className="text-xs text-slate-500">
          Fast 1-click symptoms tagging & medication formula search.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">

        {/* Patient Selection */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs">

          <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
            Select Patient
          </label>

          <select
            value={docData.patient}
            onChange={(e) =>
              setDocData({
                ...docData,
                patient: e.target.value,
              })
            }
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 focus:outline-none"
          >
            <option value="John Doe (#1042)">
              John Doe (#1042) - Ward 3, Bed 12
            </option>

            <option value="Emma Watson (#1043)">
              Emma Watson (#1043) - Ward 2, Bed 4
            </option>
          </select>

        </div>

        {/* Clinical Assessment */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-5">

          <h3 className="text-sm font-black text-slate-900">
            Clinical Assessment
          </h3>

          {/* Quick Symptoms */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              1-Click Quick Symptoms
            </label>

            <div className="flex flex-wrap gap-2">

              {quickSymptoms.map((sym, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => addSymptomToDiagnosis(sym)}
                  className="px-3 py-1.5 bg-blue-50 hover:bg-blue-100 text-medBlue font-bold text-xs rounded-xl border border-blue-200 transition-all"
                >
                  + {sym}
                </button>
              ))}

            </div>
          </div>

          {/* Diagnosis */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Diagnosis Remarks
            </label>

            <textarea
              rows="3"
              value={docData.diagnosis}
              onChange={(e) =>
                setDocData({
                  ...docData,
                  diagnosis: e.target.value,
                })
              }
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none"
            />
          </div>

        </div>

        {/* Medication */}
        <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-5">

          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-medBlue" />

            <h3 className="text-sm font-black text-slate-900">
              Prescribe Medication (Formula Search)
            </h3>
          </div>

          {/* Medicine Search */}
          <div className="relative">

            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Type Brand or Generic Formula
            </label>

            <input
              type="text"
              placeholder="Start typing medicine or formula..."
              value={medQuery}
              onChange={handleMedQueryChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none"
            />

            {/* Search Results */}
            {filteredMeds.length > 0 && (
              <div className="absolute z-10 left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden">

                {filteredMeds.map((med, idx) => (
                  <div
                    key={idx}
                    onClick={() => selectMedicine(med.name)}
                    className="p-3 hover:bg-blue-50 cursor-pointer border-b border-slate-100 flex items-center justify-between transition-colors"
                  >

                    <div>
                      <div className="text-sm font-bold text-slate-900">
                        {med.name}
                      </div>

                      <div className="text-[11px] text-slate-500">
                        {med.formula}
                      </div>
                    </div>

                    <span className="text-xs font-bold text-medBlue">
                      + Add
                    </span>

                  </div>
                ))}

              </div>
            )}

          </div>

          {/* Prescribed List */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Prescribed List
            </label>

            <textarea
              rows="3"
              value={docData.medicine}
              onChange={(e) =>
                setDocData({
                  ...docData,
                  medicine: e.target.value,
                })
              }
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none"
            />
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
              Clinical Notes
            </label>

            <textarea
              rows="3"
              value={docData.notes}
              onChange={(e) =>
                setDocData({
                  ...docData,
                  notes: e.target.value,
                })
              }
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none"
            />
          </div>

        </div>

        {/* Save */}
        <button
          type="submit"
          className="w-full py-3.5 bg-medBlue hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2"
        >
          <CheckCircle className="w-4 h-4" />
          Save Clinical Assessment
        </button>

      </form>
    </div>
  );
}
