import { Appointment } from "@/app/api/appointments/data";

export const AppointmentList = (props: { appointments: Appointment[] }) => {
  const { appointments } = props;

  return (
    <div className="flex flex-col gap-2 border-t border-t-black py-2">
      <h4>Available Appointments</h4>
      <ul>
        {appointments.map((item) => {
          const formattedDateTime = formatDateTime(item.appointmentDateTime);

          return (
            <li key={item.appointmentId}>
              <label className="flex flex-row gap-1.5 text-xs leading-loose text-primary">
                <input
                  type="radio"
                  name="appointmentTime"
                  value={formattedDateTime}
                />
                {formattedDateTime}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// move to utils folder if reused later
const formatDateTime = (dateTime: string) => {
  return new Date(dateTime).toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};
