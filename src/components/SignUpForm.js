import React from "react";
import {
  FaGoogle,
  FaFacebook,
  FaMicrosoft,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const SignUpForm = ({
  handleSignUp,
  handleInputChange,
  signUpData,
  showPassword,
  setShowPassword,
  handleGooglePopUp,
}) => {
  return (
    <form onSubmit={handleSignUp}>
      <div className="form-outline mb-4">
        <input
          type="text"
          name="name"
          className="form-control form-control-sm"
          placeholder="Name"
          required
          onChange={handleInputChange}
          value={signUpData.name}
        />
      </div>

      <div className="form-outline mb-4">
        <input
          type="email"
          name="email"
          className="form-control form-control-sm"
          placeholder="Email"
          required
          onChange={handleInputChange}
          value={signUpData.email}
        />
      </div>

      <div className="form-outline mb-4" style={{ position: "relative" }}>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          className="form-control form-control-sm"
          placeholder="Password"
          required
          style={{ flexGrow: 1 }}
          onChange={handleInputChange}
          value={signUpData.password}
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="pw-show-icon"
        >
          {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
        </span>
      </div>

      <button className="btn btn-outline-dark btn-sm px-5" type="submit">
        Sign Up
      </button>

      <div
        className="d-flex justify-content-center text-center mt-4 pt-1"
        style={{ gap: "2rem", fontSize: "15px" }}
      >
        <a
          className="text-dark"
          onClick={handleGooglePopUp}
          style={{ cursor: "pointer" }}
        >
          <FaGoogle />
        </a>
        {/* <a href="#" className="text-dark">
          <FaMicrosoft />
        </a>
        <a href="#" className="text-dark">
          <FaFacebook />
        </a> */}
      </div>
    </form>
  );
};

export default SignUpForm;
