import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>My awesome Remix app</h1>
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="items">Items</Link>
          </li>
          <li>
            <Link to="contact-us">Contact us</Link>
          </li>
        </ul>
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
