import MainHeader from "~/components/navigation/MainHeader";
import pricingStyles from "~/styles/marketing.css";
import { Outlet } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { getUserFromSession } from "~/data/auth.server";

export default function MarketingLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export const loader: LoaderFunction = async ({ params, request }) => {
  return getUserFromSession(request);
};

export function links() {
  return [
    {
      rel: "stylesheet",
      href: pricingStyles,
    },
  ];
}
