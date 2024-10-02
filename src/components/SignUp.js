import { FaGoogle, FaFacebook, FaMicrosoft } from "react-icons/fa";

const SignUp = () => {
  const handleSignUp = () => {
    alert("Sign up button clicked");
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

                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Name"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      placeholder="Email"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      className="form-control form-control-sm"
                      placeholder="Password"
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      className="form-control form-control-sm"
                      placeholder="Repeat Password"
                    />
                  </div>

                  <button
                    className="btn btn-outline-dark btn-sm px-5"
                    type="submit"
                    onClick={handleSignUp}
                  >
                    Sign Up
                  </button>

                  <div
                    className="d-flex justify-content-center text-center mt-4 pt-1"
                    style={{ gap: "2rem", fontSize: "15px" }}
                  >
                    <a href="#" className="text-dark">
                      <FaGoogle />
                    </a>
                    <a href="#" className="text-dark">
                      <FaMicrosoft />
                    </a>
                    <a href="#" className="text-dark">
                      <FaFacebook />
                    </a>
                  </div>
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
