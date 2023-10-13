import authStyles from "~/styles/auth.css";
import AuthForm from '~/components/auth/AuthForm';

export default function AuthPage() {
  return (
    <AuthForm />
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
