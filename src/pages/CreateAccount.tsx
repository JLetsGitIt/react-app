import React, { useState, ChangeEvent, FormEvent } from "react";
import "./CreateAccount.css";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./components/Form";

interface GlobalState {
  viewportWidth: number;
  setViewportWidth: React.Dispatch<React.SetStateAction<number>>;
  dynamicLength: number;
  setDynamicLength: React.Dispatch<React.SetStateAction<number>>;
}

interface CreateAccountProps {
  GlobalState: GlobalState;
}

function CreateAccount({ GlobalState }: CreateAccountProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { viewportWidth, setViewportWidth, dynamicLength, setDynamicLength } =
    GlobalState;

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    navigate("/financial-info");
  };

  return (
    <div className="e10_483">
      // header
      <div className="e10_484"></div>
      <div className="e10_485">
        <div className="e10_486"></div>
        <h2>
          <div className="e10_487">Compound</div>
        </h2>
      </div>
      // images
      <div className="ca_img1 bounce"></div>
      <div className="ca_img2 bounce"></div>
      <div className="ca_img3 bounce"></div>
      // sign up form
      <div className="e10_488">
        <h2>
          <span className="e10_489">Your start to financial literacy.</span>
        </h2>
        <SignUpForm
          email={email}
          password={password}
          handleEmailChange={handleEmailChange}
          handlePasswordChange={handlePasswordChange}
          handleSignUp={handleSignUp}
        />
      </div>
    </div>
  );
}

export default CreateAccount;
