const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  mrn: { type: String, required: true, unique: true },
  cnic: { type: String },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
  bloodGroup: { type: String },
  phone: { type: String, required: true },
  emergencyContact: { type: String },
  status: {
    type: String,
    enum: ['Admitted', 'Outpatient', 'Discharged', 'Critical', 'Observation'],
    default: 'Admitted'
  },
  bedNumber: { type: String },
  admissionDate: { type: Date, default: Date.now },
  medicalHistory: [{ type: String }]
}, { timestamps: true });

module.exports = mongoose.model('Patient', patientSchema);
