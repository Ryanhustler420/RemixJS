import { cssBundleHref } from "@remix-run/css-bundle";

import {
  Meta,
  Link,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useRouteError,
  ScrollRestoration,
  isRouteErrorResponse,
} from "@remix-run/react";

import MainNavigation from '~/components/MainNavigation';
import cssStylesHref from '~/styles/main.css';

export const links = () => [
  ...(cssBundleHref ? [
    { rel: "stylesheet", href: cssBundleHref },
  ] : [
    { rel: 'stylesheet', href: cssStylesHref }
  ]),
];

export function ErrorBoundary() {
  const error = useRouteError();

  // when true, this is what used to go to `CatchBoundary`
  if (isRouteErrorResponse(error)) {
    return (<html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <Meta />
      <Links />
      <title>{error?.data?.message}</title>
    </head>
    <body>
      <header>
        <MainNavigation />
      </header>
      <main className="error">
        <h1>{error?.statusText}</h1>
        <p>{error?.data?.message}</p>
        <p>Back to <Link to="/">safety</Link></p>
      </main>
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>)
  }

  return (<html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <Meta />
      <Links />
      <title>{error?.data?.message}</title>
    </head>
    <body>
      <header>
        <MainNavigation />
      </header>
      <main className="error">
        <h1>{error?.statusText}</h1>
        <p>{error?.data?.message}</p>
        <p>Back to <Link to="/">safety</Link></p>
      </main>
      <ScrollRestoration />
      <Scripts />
      <LiveReload />
    </body>
  </html>)
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <MainNavigation />
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
