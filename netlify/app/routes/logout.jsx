import { json } from "@remix-run/node";
import { destroyUserSession } from "~/data/auth.server";

// GET
export const loader = async ({ params, request }) => {
  return null;
};

// POST and other method
export const action = async ({ request }) => {
  if (request.method !== "POST") {
    throw json({ message: "Invalid request method" }, { status: 400 });
  }

  return destroyUserSession(request);
};
