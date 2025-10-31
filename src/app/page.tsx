import { Button } from "@/components/ui/button";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignOutButton,
  SignUpButton,
} from "@clerk/nextjs";
import React from "react";

const Home = () => {
  return (
    <>
      <div>Home</div>

      <SignedOut>
        <SignUpButton mode="modal">
          <Button>Login</Button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton>
          <Button>Logout</Button>
        </SignOutButton>
      </SignedIn>
    </>
  );
};

export default Home;
