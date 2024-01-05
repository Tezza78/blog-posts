import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }) => {
  return json({ itemId: params.itemId });
};

export default function ItemPage() {
  const { itemId } = useLoaderData();

  return (
    <>
      <h3>Item details</h3>

      <p>This is item {itemId}</p>
    </>
  );
}
