import MainHeader from "~/components/navigation/MainHeader";
import pricingStyles from "~/styles/marketing.css";
import { Outlet } from "@remix-run/react";

export default function MarketingLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: pricingStyles,
    },
  ];
}
