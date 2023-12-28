import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormProps {
  handleSignUp: (e: FormEvent<HTMLFormElement>) => void;
  email: string;
  handleEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  password: string;
  handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Form: React.FC<FormProps> = ({
  handleSignUp,
  email,
  handleEmailChange,
  password,
  handlePasswordChange,
}) => {
  return (
    <form onSubmit={handleSignUp} className="e10_490">
      <label className="address_txt">
        Email address
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter email address"
          className="ca-input1_0 ca-input1_1 ca-input_txt"
          required
        />
      </label>
      <label className="password_txt">
        Password
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter password"
          className="ca-input2_0 ca-input2_1 ca-input2_2 ca-input_txt"
          required
        />
      </label>
      <button className="ca-button">
        {/* onClick={() => handleSignUp()} */}
        <h6>
          <span className="ca-button_txt">Sign up now</span>
        </h6>
      </button>
    </form>
  );
};

export default Form;
