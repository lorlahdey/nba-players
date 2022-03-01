import NavDefaultLayout from "../layouts/NavDefaultLayout.js";
import { Formik } from "formik";
import { Input } from "../components/input";
import { signupValidationSchema } from "../helpers/ValidationSchema";
import { SignupBtn } from "../components/btn";
import { VerificationEmailNot } from "../Modals/VerificationEmailNot";

const SignUp = () =>{
    return (
      <>
        <NavDefaultLayout>
          <div className="container my-5">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <h1 className="text-center mb-5">Sign Up</h1>
                <Formik
                  initialValues={{
                    email: "",
                  }}
                  validationSchema={signupValidationSchema}
                >
                  {(props) => {
                    const {
                      handleSubmit,
                      handleChange,
                      values,
                      errors,
                      touched,
                      handleBlur,
                      isSubmitting,
                    } = props;
                    return (
                      <div className="signup__section">
                        <form
                          className="signup__form"
                          onSubmit={handleSubmit}
                          autoComplete="off"
                        >
                          <div className="login__formgroup">
                            <Input
                              label="Enter your Email"
                              placeholder="johndoe@gmail.com"
                              type="email"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.email}
                              error={touched.email && errors.email}
                              name="email"
                            />
                          </div>
                                <button type="submit" className={`btn btn-large`} data-bs-toggle="modal" data-bs-target="#exampleModal" disabled={isSubmitting}> Sign Up </button>
                        </form>
                      </div>
                    );
                  }}
                </Formik>
                <div
                  class="modal fade"
                  id="exampleModal"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className=" modal-dialog modal-dialog-centered">
                    <div className="modal-content ">
                      <div className="modal-header">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <VerificationEmailNot />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NavDefaultLayout>
      </>
    );
};

export default SignUp;
