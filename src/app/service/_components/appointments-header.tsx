"use client";

import Image from "next/image";
import { Service } from "../../api/services/data";

export const AppointmentsHeader = (props: { service: Service }) => {
  const { service } = props;
  const { serviceId, serviceDuration, serviceName } = service;

  return (
    <header className="flex w-full items-center gap-12 px-8 text-left">
      {/* use the serviceId to fetch the right image */}
      <Image
        src={`/service-${serviceId}.png`}
        alt="Logo"
        width={109}
        height={89}
      />
      <div className="w-full">
        <h2 className="text-xl font-bold">{serviceName}</h2>
        <p className="text-sm">{serviceDuration / 60} minutes</p>
      </div>
    </header>
  );
};
