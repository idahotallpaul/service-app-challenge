export type Service = {
  serviceId: string;
  serviceName: string;
  serviceDuration: number; // duration in seconds
};

export const sampleServices: Service[] = [
  {
    serviceId: "1",
    serviceName: "Synthetic Oil Change",
    serviceDuration: 1800, // duration in seconds (30 minutes)
  },
  {
    serviceId: "2",
    serviceName: "Tire Rotation & Inspection",
    serviceDuration: 3600, // duration in seconds (1 hour)
  },
  {
    serviceId: "3",
    serviceName: "Express Auto Detailing",
    serviceDuration: 5400, // duration in seconds (1.5 hours)
  },
];
