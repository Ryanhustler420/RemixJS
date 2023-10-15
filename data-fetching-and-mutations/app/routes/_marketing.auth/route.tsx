import authStyles from "~/styles/auth.css";
import AuthForm from '~/components/auth/AuthForm';
import { ActionFunction } from "@remix-run/node";

export default function AuthPage() {
  return (
    <AuthForm />
  );
}

export const action: ActionFunction = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get('mode') || 'login';

  const formData = await request.formData()
  const credential = Object.fromEntries(formData);
  
  // Validate user input

  if (authMode === 'login') {
    // login logic
  } else {
    // signup logic (create user)
  }

  return null;
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
