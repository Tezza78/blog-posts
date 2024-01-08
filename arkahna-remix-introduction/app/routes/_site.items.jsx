import { Link } from "@remix-run/react";
import { Outlet } from "@remix-run/react";

export default function ItemsPage() {
  return (
    <>
      <h2>Items</h2>
      <ul>
        <li>
          <Link to="1">Item 1</Link>
        </li>
        <li>
          <Link to="2">Item 2</Link>
        </li>
        <li>
          <Link to="3">Item 3</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
