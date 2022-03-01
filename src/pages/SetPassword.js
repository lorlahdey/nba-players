import React from "react";
import DefaultLayout from "../layouts/NavDefaultLayout.js"
import { PasswordInput } from "../components/input";
import { setPasswordValidationSchema } from "../helpers/ValidationSchema";
import { BtnLarge } from "../components/btn";
import { RouteLinks } from "../routes/RouteLinks";
import { Formik } from "formik";

const SetPassword = () =>{

    const getHandler = (setErrors, callback, values, errors) => {

        return (event) => {
            callback(event);
            if (event.target.value !== values.password) {
                setTimeout(() => {
                    setErrors({ ...errors, confirmPassword: 'passwords do not match' });
                }, 200)
            }
        }
    }

    return (
        <DefaultLayout>
            <div className="container my-5">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1 className="text-center mb-5">Set Password</h1>
                        <Formik
                            initialValues={{
                                password: "",
                                confirmPassword: ""
                            }}
                            validationSchema={setPasswordValidationSchema}
                        >
                            {( props ) =>
                            {
                                const {
                                    handleSubmit,
                                    handleChange,
                                    errors,
                                    touched,
                                    handleBlur,
                                    setErrors,
                                    values
                                } = props;
                                return (
                                    <div className="set-password__section">
                                        <form
                                            className="set-password__form"
                                            onSubmit={handleSubmit}
                                            autoComplete="off"
                                        >
                                            <div className="set-password__formgroup">
                                                <PasswordInput
                                                    label="Enter  password"
                                                    placeholder="Enter your password"
                                                    value={values.password}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    error={errors.password}
                                                    name="password"

                                                />
                                            </div>
                                            <div className="set-password__formgroup">
                                                <PasswordInput
                                                    label="Confirm  password"
                                                    placeholder="confirm your password"
                                                    value={values.confirmPassword}
                                                    onChange={getHandler(setErrors, handleChange, values, errors)}
                                                    onBlur={getHandler(setErrors, handleBlur, values, errors)}
                                                    error={errors.confirmPassword}
                                                    name="confirmPassword"
                                                />
                                            </div>
                                            <BtnLarge
                                                type="submit"
                                                to={RouteLinks.login}
                                                label="Submit"
                                            />
                                        </form>
                                    </div>
                                );
                            }}
                        </Formik>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default SetPassword;
