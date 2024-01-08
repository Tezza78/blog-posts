import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

export const loader = async () => {
  // Get items from data layer
  const items = [
    {
      id: 1,
      name: "Item 1",
    },
    {
      id: 2,
      name: "Item 2",
    },
    {
      id: 3,
      name: "Item 3",
    },
  ];

  return json({ items });
};

export default function ItemsDetailsPage() {
  const { items } = useLoaderData();

  return (
    <>
      <h2>Items</h2>
      <ul>
        {items.map((item) => (
          <li key={`${item.id}`}>
            <Link to={`${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
