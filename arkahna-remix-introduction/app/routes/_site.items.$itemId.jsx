import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }) => {
  const itemId = params.itemId;

  // Get item from data layer
  const item = {
    id: itemId,
    name: `Item ${itemId}`,
  };

  return json({ item });
};

export default function ItemPage() {
  const { item } = useLoaderData();

  return (
    <>
      <h3>Item details</h3>
      <p>Item: {item.name}</p>
    </>
  );
}
