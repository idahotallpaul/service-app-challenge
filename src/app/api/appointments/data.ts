export type Appointment = {
  appointmentId: string;
  serviceId: string;
  serviceName: string;
  appointmentDateTime: string;
  appointmentDuration: number;
};

export const sampleAppointments: Appointment[] = [
  {
    appointmentId: "147",
    serviceId: "3",
    serviceName: "Express Auto Detailing",
    appointmentDateTime: "2024-08-05T08:00:00",
    appointmentDuration: 5400,
  },
  {
    appointmentId: "150",
    serviceId: "3",
    serviceName: "Express Auto Detailing",
    appointmentDateTime: "2024-08-06T09:00:00",
    appointmentDuration: 5400,
  },
  {
    appointmentId: "153",
    serviceId: "3",
    serviceName: "Express Auto Detailing",
    appointmentDateTime: "2024-08-06T10:00:00",
    appointmentDuration: 5400,
  },
  {
    appointmentId: "171",
    serviceId: "3",
    serviceName: "Express Auto Detailing",
    appointmentDateTime: "2024-08-07T08:00:00",
    appointmentDuration: 5400,
  },
  {
    appointmentId: "148",
    serviceId: "1",
    serviceName: "Synthetic Oil Change",
    appointmentDateTime: "2024-08-05T09:00:00",
    appointmentDuration: 1800,
  },
  {
    appointmentId: "151",
    serviceId: "1",
    serviceName: "Synthetic Oil Change",
    appointmentDateTime: "2024-08-05T10:00:00",
    appointmentDuration: 1800,
  },
  {
    appointmentId: "154",
    serviceId: "1",
    serviceName: "Synthetic Oil Change",
    appointmentDateTime: "2024-08-06T11:00:00",
    appointmentDuration: 1800,
  },
  {
    appointmentId: "169",
    serviceId: "1",
    serviceName: "Synthetic Oil Change",
    appointmentDateTime: "2024-08-07T08:00:00",
    appointmentDuration: 1800,
  },
  {
    appointmentId: "149",
    serviceId: "2",
    serviceName: "Tire Rotation & Inspection",
    appointmentDateTime: "2024-08-06T09:00:00",
    appointmentDuration: 3600,
  },
  {
    appointmentId: "152",
    serviceId: "2",
    serviceName: "Tire Rotation & Inspection",
    appointmentDateTime: "2024-08-07T10:00:00",
    appointmentDuration: 3600,
  },
  {
    appointmentId: "155",
    serviceId: "2",
    serviceName: "Tire Rotation & Inspection",
    appointmentDateTime: "2024-08-08T11:00:00",
    appointmentDuration: 3600,
  },
  {
    appointmentId: "170",
    serviceId: "2",
    serviceName: "Tire Rotation & Inspection",
    appointmentDateTime: "2024-08-09T08:00:00",
    appointmentDuration: 3600,
  },
];
