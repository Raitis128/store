// sign-up-form.component.tsx
import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../form-input/form-input.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { SignUpContainer } from "./sign-up-form.styles";
import { signUpStart } from "../../store/user/user.action";
import { RootState } from "../../store/store";

const SignUpForm = () => {
  const [formFields, setFormFields] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const { displayName, email, password, confirmPassword } = formFields;
  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
    setErrorMessage("");
  };

  const signUpError = useSelector((state: RootState) => state.user.error);

  useEffect(() => {
    if (signUpError) {
      if (signUpError.message.includes("auth/email-already-in-use")) {
        setErrorMessage("Email already exists!");
      } else {
        setErrorMessage("An unexpected error occurred!"); // Generic error message
      }
    }
  }, [signUpError]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Password does not match!");
      return;
    }

    // Check for password strength (example: minimum 6 characters)
    if (password.length < 6) {
      setErrorMessage("Password is too weak!");
      return;
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        {errorMessage && <span>{errorMessage}</span>}
        <Button buttonType={BUTTON_TYPE_CLASSES.base}>Sign up</Button>
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
