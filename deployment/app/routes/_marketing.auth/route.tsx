import authStyles from "~/styles/auth.css";
import AuthForm from "~/components/auth/AuthForm";
import { login, signup } from "~/data/auth.server";
import { ActionFunction, redirect } from "@remix-run/node";
import { validateCredentials } from "~/data/validation.server";

export default function AuthPage() {
  return <AuthForm />;
}

export const action: ActionFunction = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get("mode") || "login";

  const formData = await request.formData();
  const credential = Object.fromEntries(formData);

  try {
    validateCredentials(credential);
  } catch (error) {
    return error;
  }

  try {
    if (authMode === "login") {
      return await login({ email: credential.email, password: credential.password });
    } else {
      return await signup({ email: credential.email, password: credential.password });
    }
  } catch (error) {
    return {
      credentials: error?.message,
    };
  }

  return null;
};

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
