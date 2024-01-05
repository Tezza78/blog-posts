import { Links, LiveReload, Meta, Outlet, Scripts } from "@remix-run/react";
import { Link } from "@remix-run/react";

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
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
            <Link to="about-us">About us</Link>
          </li>
          <li>
            <Link to="items">Items</Link>
          </li>
        </ul>

        <Outlet />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
