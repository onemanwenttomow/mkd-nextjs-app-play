"use client";

import { signIn } from "next-auth/react";

function SignIn() {
  return (
    <button onClick={() => signIn("github")} type="button">
      Sign in with Github
    </button>
  );
}

export default SignIn;
