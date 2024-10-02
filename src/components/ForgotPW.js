const ForgotPassword = () => {
  //   const handleFogotPW = (e) => {
  //     alert(e);
  //   };

  return (
    <section className="mt-4">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card text-dark" style={{ borderRadius: "1rem" }}>
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-1">
                  <h2 className="fw-bold mb-2 text-uppercase">
                    Reset Password
                  </h2>
                  <p className="text-dark-50 mb-5">
                    Enter the email to send the password
                  </p>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      placeholder="Enter Email"
                    />
                  </div>

                  <button
                    className="btn btn-outline-dark btn-sm px-5"
                    type="submit"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
