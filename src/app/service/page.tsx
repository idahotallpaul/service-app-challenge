"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Appointment } from "../api/appointments/data";
import { Service } from "../api/services/data";
import { AppointmentList } from "./_components/appointments-list";
import { AppointmentsHeader } from "./_components/appointments-header";

export default function Page() {
  const [services, setServices] = useState<Service[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // fetch appointments and services
  useEffect(() => {
    fetch("/api/appointments")
      .then((response) => response.json())
      .then((data) => setAppointments(data));
  }, []);

  useEffect(() => {
    fetch("/api/services")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <>
      <h1 className="mb-8 text-3xl font-bold text-primary">Select a Service</h1>
      <div className="w-full max-w-xl">
        <Accordion type="single" collapsible className="w-full">
          {/* 
            Loop through the services. For each service, 
            use the serviceId to filter the appointments. 
           */}
          {services.map((service) => {
            const { serviceId } = service;
            const filteredAppointments = appointments.filter(
              (item) => item.serviceId === serviceId,
            );

            return (
              <AccordionItem
                key={serviceId}
                value={`service-${serviceId}`}
                className="shadow-lg"
              >
                <AccordionTrigger>
                  <AppointmentsHeader service={service} />
                </AccordionTrigger>
                <AccordionContent className="px-8">
                  <AppointmentList appointments={filteredAppointments} />
                  <Button size="sm" className="px-7 py-2">
                    Book Now
                  </Button>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </>
  );
}
