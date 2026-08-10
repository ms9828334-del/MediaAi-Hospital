const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ['doctor', 'nurse', 'patient', 'admin'],
    required: true
  },
  patientProfileId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient'
  }
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
