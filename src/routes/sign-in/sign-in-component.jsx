import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

// Correct the import names here
import {
  auth,
  createUserDocumentFormAuth,
  signInWithGooglRedirect,
} from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.component";

const SignIn = () => {
  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const response = await getRedirectResult(auth);
        if (response) {
          const userDocRef = await createUserDocumentFormAuth(response.user);
        }
      } catch (error) {
        console.error("Error obtaining redirect result", error);
      }
    };

    handleRedirectResult();
  }, []);

  return (
    <div>
      <h1>Sign in page</h1>
      <Button buttonType="google" onClick={signInWithGooglRedirect}>
        Sign in with Google Redirect
      </Button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
