interface Appointment {
  petName: string;
  age: string;
  gender: string;
  appointmentDate: string;
  ownerName: string;
}

const AppointmentList: React.FC<{ appointments: Appointment[] }> = ({ appointments }) => {
  return (
    <div>
      <h2>Appointment List</h2>
      <ul>
        {appointments.map((appointment, index) => (
          <li key={index}>
            <div>
              <strong>Pet Name:</strong> {appointment.petName}
            </div>
            <div>
              <strong>Age:</strong> {appointment.age}
            </div>
            <div>
              <strong>Gender:</strong> {appointment.gender}
            </div>
            <div>
              <strong>Appointment Date:</strong> {appointment.appointmentDate}
            </div>
            <div>
              <strong>Owner's Name:</strong> {appointment.ownerName}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppointmentList;
