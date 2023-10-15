import authStyles from "~/styles/auth.css";
import { signup } from "~/data/auth.server";
import AuthForm from "~/components/auth/AuthForm";
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
      // login logic
    } else {
      await signup({ email: credential.email, password: credential.password });
      return redirect("/expenses");
    }
  } catch(error) {
    return {
      credentials: error?.message
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
