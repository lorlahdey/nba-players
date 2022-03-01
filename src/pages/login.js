import NavDefaultLayout from "../layouts/NavDefaultLayout.js";
import { Formik } from "formik";
import { Input, PasswordInput } from "../components/input";
import { loginValidationSchema } from "../helpers/ValidationSchema";
import { BtnLarge } from "../components/btn";
import { RouteLinks } from "../routes/RouteLinks";


const Login = () =>{
    return (
        <NavDefaultLayout>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1 className="text-center mb-5">Login</h1>
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                            }}
                            validationSchema={loginValidationSchema}
                        >
                            {( props ) =>
                            {
                                const {
                                    handleSubmit,
                                    handleChange,
                                    errors,
                                    touched,
                                    handleBlur,
                                } = props;

                                return (
                                    <div>
                                        <form
                                            onSubmit={handleSubmit}
                                            className="signin__form"
                                            autoComplete="off"
                                        >
                                            <div className="login__formgroup">
                                                <Input
                                                    label="Enter your email"
                                                    placeholder="Enter your email"
                                                    type="email"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.email && errors.email}
                                                    name="email"
                                                />
                                            </div>
                                            <div className="login__formgroup">
                                                <PasswordInput
                                                    label="Enter your password"
                                                    placeholder="Enter your password"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={touched.email && errors.password}
                                                    name="password"
                                                />
                                                <p className=" login__formgroup--footer text-end mt-3">
                                                    Forget Password ?
                                                </p>
                                            </div>
                                            <BtnLarge
                                                type="submit"
                                                to={RouteLinks.login}
                                                label="Login"
                                            />
                                        </form>
                                    </div>
                                );
                            }}
                        </Formik>
                    </div>
                </div>
            </div>

        </NavDefaultLayout>
    );
};

export default Login;
