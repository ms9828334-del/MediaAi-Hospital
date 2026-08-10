require('dotenv').config(); // MUST BE AT THE TOP

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const User = require('./models/User');
const Patient = require('./models/Patient');

const app = express();

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/patients', require('./routes/patients'));
app.use('/api/doctor', require('./routes/doctor'));
app.use('/api/nurse', require('./routes/nurse'));
app.use('/api/labs', require('./routes/labs'));
app.use('/api/reports', require('./routes/reports'));
app.use('/api/dashboard', require('./routes/dashboard'));
app.use('/api/ai', require('./routes/ai'));

// Database Seeder
const seedDatabase = async () => {
  try {
    const userCount = await User.countDocuments();

    if (userCount === 0) {
      console.log('Seeding initial system users...');

      const samplePatient = await Patient.create({
        mrn: '#1042',
        cnic: '42101-9988221-1',
        name: 'John Doe',
        age: 42,
        gender: 'Male',
        bloodGroup: 'O+',
        phone: '+1234567890',
        status: 'Critical',
        bedNumber: 'ICU-04'
      });

      const hashedPassword = await bcrypt.hash('password123', 10);

      await User.create([
        {
          name: 'Dr. Sarah Connor',
          email: 'doctor@mediai.com',
          password: hashedPassword,
          role: 'doctor'
        },
        {
          name: 'Nurse Emily Watson',
          email: 'nurse@mediai.com',
          password: hashedPassword,
          role: 'nurse'
        },
        {
          name: 'John Doe (Patient)',
          email: 'patient@mediai.com',
          password: hashedPassword,
          role: 'patient',
          patientProfileId: samplePatient._id
        },
        {
          name: 'System Admin',
          email: 'admin@mediai.com',
          password: hashedPassword,
          role: 'admin'
        }
      ]);

      console.log(
        'Database Seeding Complete! Default credentials created.'
      );
    }
  } catch (err) {
    console.error('Seeding Error:', err);
  }
};

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB Connected Successfully.');

    seedDatabase();

    app.listen(PORT, () => {
      console.log(`Backend Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB Connection Failed:', err);
  });
