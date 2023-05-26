"use client";

import { signOut } from "next-auth/react";

function SignOut() {
  return (
    <button onClick={() => signOut()} type="button">
      Sign Out
    </button>
  );
}

export default SignOut;
