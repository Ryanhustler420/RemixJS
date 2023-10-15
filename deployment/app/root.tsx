import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  Link,
  Meta,
  Outlet,
  Scripts,
  useMatches,
  LiveReload,
  useRouteError,
  ScrollRestoration,
  isRouteErrorResponse,
} from "@remix-run/react";

import Error from "~/components/util/Error";
import sharedStyles from "~/styles/shared.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: sharedStyles },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

function Document({ title, children }) {
  const matches = useMatches();
  const doNotUseJS = matches.some((match) => match.handle?.disableJS);

  return (
    <html lang="en">
      <head>
        {/* {title && <title>{title}</title>} */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        {!doNotUseJS && <Scripts />}
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    // Catch boundary
    return (
      <Document title={error.statusText}>
        <main>
          <Error title={error.statusText}>
            <p>{error.data?.message || "Something went wrong"}</p>
            <p>
              Back to <Link to="/">safety</Link>
            </p>
          </Error>
        </main>
      </Document>
    );
  } else {
    return (
      <Document title={"Unknown Error"}>
        <main>
          <Error title={"Unknow Error"}>
            <p>{"Something went wrong"}</p>
            <p>
              Back to <Link to="/">safety</Link>
            </p>
          </Error>
        </main>
      </Document>
    );
  }
}

export default function App() {
  return (
    <Document title={"App"}>
      <Outlet />
    </Document>
  );
}

export const meta: MetaFunction = ({ location, params, data }) => {
  return [
    { title: "Remix Expenses - The complete app" },
    {
      property: "og:title",
      content: "Remix Expenses - The complete app",
    },
    {
      name: "description",
      content: "Manage your expenses with ease",
    },
  ];
};
