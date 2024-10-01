import { FaGoogle, FaFacebook, FaMicrosoft } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-md-10">
          <h1>Sign Up</h1>
          <form>
            <div className="text-center">
              <p>
                Already a member? <a href="#!">Login</a>
              </p>
              <p>or Sign up with:</p>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <FaGoogle />
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <FaMicrosoft />
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <FaFacebook />
              </button>
            </div>
            <div className="form-outline mb-4">
              <input type="email" className="form-control" />
              <label className="form-label">Email address</label>
            </div>

            <div className="form-outline mb-4">
              <input type="password" className="form-control" />
              <label className="form-label">Password</label>
            </div>

            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                  />
                  <label className="form-check-label">
                    I have read and agree to the terms
                  </label>
                </div>
              </div>

              <div className="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <button type="button" className="btn btn-primary btn-block mb-4">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
