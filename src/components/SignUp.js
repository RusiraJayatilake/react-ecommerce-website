import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  FaGoogle,
  FaFacebook,
  FaMicrosoft,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";
import "../assets/css/sign-up.css";
import auth from "../config/firebase";

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
  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");

    const { email, password } = signUpData;

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setSuccess("User Created Successfully");
        setSignUpData({ name: "", email: "", password: "" });

        sendEmailVerification(result.user).then(() => {
          alert("Please check your email and verify your account");
        });

        history.push("/");
      })
      .catch((err) => setError(err.message));
  };

  // Google Signup
  const handleGooglePopUp = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);

      await sendEmailVerification(result.user).then(() => {
        alert("Please check your email and verify your account");
      });

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

                    <div
                      className="form-outline mb-4"
                      style={{ position: "relative" }}
                    >
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
                        {showPassword ? (
                          <FaEyeSlash></FaEyeSlash>
                        ) : (
                          <FaEye></FaEye>
                        )}
                      </span>
                    </div>

                    <button
                      className="btn btn-outline-dark btn-sm px-5"
                      type="submit"
                    >
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
