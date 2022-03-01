import { useState } from "react";


export const Input = ( props ) => {
    const { error, label, name, placeholder, ...inputProps } = props;

    return (
        <div className="input-wrap d-flex flex-column">
            <label htmlFor={name} className="input-label">{label}</label>
            <input className="input" {...inputProps} placeholder={placeholder} id={name} name={name} />
            {error && <p className=" input-wrap__error-size text-danger m-0">{error}</p>}
        </div>
    );
};
export const RequestInput = ( props ) => {
    const { error, name, placeholder, ...inputProps } = props;

    return (
        <div className="input-wrap d-flex flex-column">
            <input className="input requestInput"{...inputProps} placeholder={placeholder} id={name} name={name}/>
            {error && <p className=" input-wrap__error-size text-danger m-0">{error}</p>}
        </div>
    );
};

export const PasswordInput = ( props, { Children } ) => {
    
    const { error, label, ...inputProps } = props;
    const [type, setType] = useState( "password" );

    const toggleType = () =>{
        if ( type === "password" )
        {
            setType( "text" );
        } else setType( "password" );
    };

    const isHidden = type === "password";

    return (
        <div className="password-form d-flex flex-column justify-content-center">
            <label className="input-label" htmlFor=""> {label}</label>
            <div className="password-input-wrap d-flex justify-content-space-between align-items-center ">
                <input className="password-input" {...inputProps} type={type} />
                <span onClick={toggleType}>
                    {isHidden ? (
                        <i class="bi bi-eye-fill"></i>
                    ) : (
                        <i class="bi bi-eye-slash-fill"></i>
                    )}
                </span>
            </div>
            {error && <p className="password-form__error-size text-danger m-0 ">{error}</p>}
        </div>
    );
};


