import { useState, ChangeEvent, FormEvent } from 'react';

interface Appointment {
  petName: string;
  age: string;
  gender: string;
  appointmentDate: string;
  ownerName: string;
}

const AppointmentForm: React.FC<{ addAppointment: (appointment: Appointment) => void }> = ({ addAppointment }) => {
  const [appointment, setAppointment] = useState<Appointment>({
    petName: '',
    age: '',
    gender: 'Male',
    appointmentDate: '',
    ownerName: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setAppointment({ ...appointment, [name]: value });
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!appointment.petName) {
      newErrors.petName = "The pet's name is required";
    }

    if (!appointment.age) {
      newErrors.age = "The pet's age is required";
    }

    if (!appointment.appointmentDate) {
      newErrors.appointmentDate = "The appointment date is required";
    }

    if (!appointment.ownerName) {
      newErrors.ownerName = "The owner's name is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      addAppointment(appointment);

      setAppointment({
        petName: '',
        age: '',
        gender: 'Male',
        appointmentDate: '',
        ownerName: '',
      });
      setErrors({});
    }
  };

  return (
    <main>
      <img src="./pet-logo.svg" alt="login-img" width="40%" height="auto" />
      <h2>Pet Appointment Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="petName">Pet Name</label>
          <input
            type="text"
            id="petName"
            name="petName"
            value={appointment.petName}
            onChange={handleInputChange}
          />
          {errors.petName && <p className="error">{errors.petName}</p>}
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={appointment.age}
            onChange={handleInputChange}
          />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>
        <div>
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender" value={appointment.gender} onChange={handleInputChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="appointmentDate">Appointment Date</label>
          <input
            type="date"
            id="appointmentDate"
            name="appointmentDate"
            value={appointment.appointmentDate}
            onChange={handleInputChange}
          />
          {errors.appointmentDate && <p className="error">{errors.appointmentDate}</p>}
        </div>
        <div>
          <label htmlFor="ownerName">Owner's Name</label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={appointment.ownerName}
            onChange={handleInputChange}
          />
          {errors.ownerName && <p className="error">{errors.ownerName}</p>}
        </div>
        <button type="submit">Schedule Appointment</button>
      </form>
    </main>
  );
};

export default AppointmentForm;
