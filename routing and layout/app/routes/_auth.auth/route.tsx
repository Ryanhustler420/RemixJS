import authStyles from "~/styles/auth.css";

export default function AuthPage() {
  return (
    <main>
      <h2>Auth</h2>
    </main>
  );
}

export function links() {
  return [
    {
      rel: "stylesheet",
      href: authStyles,
    },
  ];
}

export function meta() {
  return [
    {
      title: "Login/Signup",
      description: "Register or login into the system",
    },
  ];
}
