import React from "react";
import { Button } from "./ui/button";
import { useSignIn } from "@clerk/clerk-react";

const SignedInOAuthButton = () => {
  const { signIn, isLoaded } = useSignIn();

  if (!isLoaded) return null;

  const signInWithGoogle = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/auth-callback",
    });
  };

  return (
    <Button
      variant={"secondary"}
      className="w-full text-white border-zinc-200 h-11"
      onClick={signInWithGoogle}
    >
      Contiune with Google
    </Button>
  );
};

export default SignedInOAuthButton;
