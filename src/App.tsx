import { useState } from 'react';
import './App.css';
import AppointmentForm from './components/AppointmentForm';
import AppointmentList from './components/AppointmentList';
import { Appointment } from './types/types';

function App() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const addAppointment = (appointment: Appointment) => {
    setAppointments([...appointments, appointment]);
  };

  return (
    <div className="App">
      <AppointmentForm addAppointment={addAppointment} />
      <AppointmentList appointments={appointments} />
    </div>
  );
}

export default App;
