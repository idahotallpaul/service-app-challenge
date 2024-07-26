import { sampleAppointments } from "./data";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const serviceId = searchParams.get("serviceId");

  let filteredAppointments = sampleAppointments;

  if (serviceId) {
    filteredAppointments = sampleAppointments.filter(
      (appointment) => appointment.serviceId === serviceId,
    );
  }

  return NextResponse.json(filteredAppointments);
}
