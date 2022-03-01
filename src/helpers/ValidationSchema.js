import * as Yup from "yup";

export const signupValidationSchema = Yup.object().shape( {
    email: Yup.string().email().required( "email is required" ),
} );
export const loginValidationSchema = Yup.object().shape( {
    email: Yup.string().email().required( "email is required" ),
    password: Yup.string().required( "password is required" ),
} );
export const setPasswordValidationSchema = Yup.object().shape( {
    password: Yup.string().required( "password is required" ),
    confirmPassword: Yup.string().required("confirm password is required"),
});

export const inputValueValidationSchema = Yup.object().shape( {
    stocks: Yup.array().of(
        Yup.object().shape( {
            length: Yup.string().required( " Length  is required" ),
            quantity: Yup.string().required( "Quantity is required" ),
        } )
    ),
    requiredPart: Yup.object().shape( {
        labelsOnParts: Yup.boolean(),
        parts: Yup.array().of(
            Yup.object().shape( {
                length: Yup.string().required( "Length is required" ),
                quantity: Yup.string().required( "Quantity is required" ),
                label: Yup.string().required( "Label is required" ),
            } )
        ),
    })
} );

