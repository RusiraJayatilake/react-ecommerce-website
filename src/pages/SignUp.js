import { useState } from "react";
import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "../assets/css/sign-up.css";
import SignUpForm from "../components/SignUpForm";

// services
import {
  signWithEmailService,
  signWithGoogleService,
} from "../services/SignupService";

const SignUp = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Email signup
  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { email, password } = signUpData;
    try {
      setSignUpData({ name: "", email: "", password: "" });
      await signWithEmailService(email, password);
      setSuccess("User Created Successfully");

      history.push("/");
    } catch (err) {
      console.error(err);
    }
  };

  // Google Signup
  const handleGooglePopUp = async () => {
    try {
      await signWithGoogleService();

      history.push("/");
    } catch (err) {
      console.error("Error: ", err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="mt-4">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card text-dark" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-2">
                  <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                  <p className="text-dark-50 mb-5">
                    Please enter your details!
                  </p>

                  <SignUpForm
                    handleSignUp={handleSignUp}
                    handleInputChange={handleInputChange}
                    signUpData={signUpData}
                    showPassword={showPassword}
                    setShowPassword={setShowPassword}
                    handleGooglePopUp={handleGooglePopUp}
                  />
                </div>
                <div>
                  <p className="mb-0">
                    Already have an account?
                    <a href="/login" className="text-dark-50 fw-bold">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
