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

export function meta() {
  return [{
    title: "Remix Expenses - The complete app",
    description: "Manage your expenses with ease",
  }]
}

// in production if this page was updated then it will reflact to user after 60 minutes
export function headers({ loaderHeaders, parentHeaders }) {
  return {
    'Cache-Control': 'max-age=300, s-maxage=3600', // 60 Minutes
  }
}

export const handle = { disableJS: true }; // {doNotUseJS: true}