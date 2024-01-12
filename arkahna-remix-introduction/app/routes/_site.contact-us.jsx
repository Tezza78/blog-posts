import { redirect, Form } from "@remix-run/react";

export const action = async ({ request }) => {
  const formData = await request.formData();

  // Validate form data

  const name = formData.get("name");
  const email = formData.get("email");

  // Persist data

  return redirect("/");
};

export default function ContactUsPage() {
  return (
    <>
      <h2>Contact us</h2>
      <Form method="post">
        <p>Name</p>
        <p>
          <input id="name" name="name" placeholder="Name" type="text" />
        </p>
        <p>Email</p>
        <p>
          <input id="email" name="email" placeholder="Email" type="email" />
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </Form>
    </>
  );
}
