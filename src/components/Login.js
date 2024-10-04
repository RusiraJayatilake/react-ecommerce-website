import { FaGoogle, FaFacebook, FaMicrosoft } from "react-icons/fa";

const Login = () => {
  return (
    <section className="mt-4">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card text-dark" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-2">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-dark-50 mb-5">
                    Please enter your login and password!
                  </p>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      className="form-control form-control-sm"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <p className="small mb-5 pb-lg-2">
                    <a className="text-dark-50" href="/lostpassword">
                      Forgot password?
                    </a>
                  </p>

                  <button
                    className="btn btn-outline-dark btn-sm px-5"
                    type="submit"
                  >
                    Login
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
                    Don't have an account?
                    <a href="/sign-up" className="text-dark-50 fw-bold">
                      Sign Up
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

export default Login;
