import { sampleServices } from "./data";

import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const serviceId = searchParams.get("serviceId");

  let filteredServices = sampleServices;

  if (serviceId) {
    filteredServices = sampleServices.filter(
      (service) => service.serviceId === serviceId,
    );
  }

  return NextResponse.json(filteredServices);
}
