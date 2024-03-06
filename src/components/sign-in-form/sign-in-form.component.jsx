import { useState } from "react";

import { useEffect } from "react";
import { getRedirectResult, FacebookAuthProvider } from "firebase/auth";

import FormInput from "../form-input/form-input.component";

import Button from "../button/button.component";

import {
  signInWithGoogleRedirect,
  createUserDocumentFormAuth,
  auth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const provider = new FacebookAuthProvider();

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  useEffect(() => {
    const signInWithGoogle = async () => {
      try {
        const response = await getRedirectResult(auth);
        if (response) {
          const userDocRef = await createUserDocumentFormAuth(response.user);
        }
      } catch (error) {
        console.error("Error obtaining redirect result", error);
      }
    };

    signInWithGoogle();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      console.log(response);
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("Incorrect email or password!");
      }
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button buttonType="default">Sign in</Button>
          <Button
            type="button"
            buttonType="google"
            onClick={signInWithGoogleRedirect}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
