import { Formik, FieldArray } from "formik";
import NavDefaultLayout from "../layouts/NavDefaultLayout.js";
import { inputValueValidationSchema } from "../helpers/ValidationSchema.js";
import { RequestInput } from "../components/input.js";
import { Link } from "react-router-dom";
import axios from "axios";

const InputValues = () => {
    const handleSubmit = async ( values, helpers ) =>
    {
        const baseUrl = process.env.REACT_APP_BASE_URL;
        console.log(baseUrl);
        try {
            helpers.setSubmitting( true )
            const res = await axios( {
                url: ` ${baseUrl}/optimizers`,
                method: "post",
                data: {request:values},
            } )
            console.log(res);
        } catch (error) {
            console.log(error.message)
        }
        finally
        {
            helpers.setSubmitting( false )
        }
    }
    return (
        <NavDefaultLayout>
            <Formik
                initialValues={{
                    measurementUnit: "Generic/Metric (15.75)",
                    stocks: [
                        {
                            length: "",
                            quantity: "",
                        },
                    ],
                    blade_thickness: "",

                    requiredParts: {
                        labelsOnParts: false,
                        parts: [
                            {
                                length: "",
                                quantity: "",
                                label: "",
                            },
                      ]
                      
                },
                }}
                onSubmit={
                handleSubmit
                }
                validationSchema={inputValueValidationSchema}
            >
                {( props ) =>
                {
                    const {
                        handleSubmit,
                        handleChange,
                        values,
                        errors,
                        touched,
                        handleBlur,
                    } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <div className="container my-5 input-value">
                                <div className=" d-flex flex-wrap justify-content-between px-1 pt-2 mb-3 input-value__import-session">
                                    <div>
                                        <div className="btn-group ml-1">
                                            <div className="dropdown">
                                                <button
                                                    className="btn btn-secondary dropdown-toggle"
                                                    type="button"
                                                    id="dropdownMenuButton"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    Import  
                                                </button>
                                                <div
                                                    className="dropdown-menu"
                                                    aria-labelledby="dropdownMenuButton"
                                                >
                                                    <p className="dropdown-item">Import data from CSV</p>
                                                    <p className="dropdown-item">  Import data from Excel  </p>
                                                </div>
                                             
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mr-1">
                                        <select
                                            className="form-select"
                                            aria-label="Disabled select example"
                                            onChange={handleChange}
                                            value={values.unit}
                                            name="measurementUnit"
                                        >
                                            <option value="Generic/Metric (15.75)">
                                                Generic/Metric (15.75)
                                            </option>
                                            <option value="  Decimal inches (15.75″)">
                                                Decimal inches (15.75″)
                                            </option>
                                            <option value="   Fractional inches (15 3/4″)">
                                                Fractional inches (15 3/4″)
                                            </option>

                                            <option value="  Fractional feet & inches (1'3 3/4″)">
                                                Fractional feet & inches (1' 3 3/4″)
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                {/* available stocks */}

                                <div className="mb-5">
                                    <div className="input-value__available-stocks">
                                        <span className="ms-2 header-6">Available Stocks</span>
                                    </div>
                                    <div className=" table-responsive p-0  ">
                                        <table className="table  ">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th className="indexCell text-center">
                                                        <label className=" form-label">#</label>
                                                    </th>
                                                    <th>
                                                        <label className="form-label">Length</label>
                                                    </th>
                                                    <th scope="col">
                                                        <label className="form-label">Quantity</label>
                                                    </th>
                                                    <th scope="col">
                                                        <label className="form-label">Actions</label>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <FieldArray
                                                name="stocks"
                                                render={( arrayHelper ) => (
                                                    <tbody>
                                                        {values.stocks &&
                                                            values.stocks.map( ( stocks, index ) => (
                                                                <tr key={index}>
                                                                    <th className="text-center">  {index + 1} </th>
                                                                    <td>
                                                                        <RequestInput
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            name={`stocks[${ index }].length`}
                                                                            value={stocks.length}
                                                                            type="number"
                                                                            error={
                                                                                touched.stocks &&
                                                                                touched.stocks[index] &&
                                                                                touched.stocks[index].length &&
                                                                                errors.stocks &&
                                                                                errors.stocks[index] &&
                                                                                errors.stocks[index].length
                                                                            }
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <RequestInput
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            name={`stocks[${ index }].quantity`}
                                                                            value={stocks.quantity}
                                                                            type="number"
                                                                            error={
                                                                                touched.stocks &&
                                                                                touched.stocks[index] &&
                                                                                touched.stocks[index]
                                                                                    .quantity &&
                                                                                errors.stocks &&
                                                                                errors.stocks[index] &&
                                                                                errors.stocks[index].quantity
                                                                            }
                                                                        />
                                                                    </td>

                                                                    <td className="actionCell pr-2">
                                                                        <Link
                                                                            to="#"
                                                                            type="button"
                                                                            className="btn  mt-1  btn-outline-danger trRemoveStock"
                                                                            onClick={() => arrayHelper.remove( index )}
                                                                        >
                                                                            Delete
                                                                        </Link>
                                                                    </td>
                                                                </tr>
                                                            ) )}
                                                        <Link
                                                            to="#"
                                                            type="button"
                                                            className="btn btn-md px-4 m-2 btn-secondary trRemoveStock"
                                                            onClick={() =>
                                                                arrayHelper.push( {
                                                                    length: "",
                                                                    quantity: "",
                                                                } )
                                                            }
                                                        >
                                                            Add
                                                        </Link>
                                                    </tbody>
                                                )}
                                            ></FieldArray>
                                        </table>
                                    </div>
                                </div>

                                {/* blade thicknes */}
                                <div className=" mb-5">
                                    <div className="input-value__available-stocks">
                                        <span className=" ms-2 header-6">Blade thickness</span>
                                    </div>
                                    <div className="table-responsive mb-4  ">
                                            <div className="col-md-6 m-4 ms-2">
                                                <RequestInput 
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    name="blade_thickness"
                                                    value={values.blade_thickness}
                                                    type="number"
                                                    placeholder="Kerf / Blade thickness"
                                                />
                                        </div>
                                    </div>

                                    {/* required part */}
                                    <div className=" input-value__available-stocks">
                                        <span className=" ms-2 header-6">Required parts</span>
                                    </div>
                                    <div className=" table-responsive p-0 ">
                                        <table className="table  partsTableId">
                                            <thead className="thead-light">
                                                <tr>
                                                    <th scope="col" className="text-center indexCell">
                                                        <label className="form-label">#</label>
                                                    </th>
                                                    <th scope="col">
                                                        <label className="form-label">Length</label>
                                                    </th>
                                                    <th scope="col">
                                                        <label className="form-label">Quantity</label>
                                                    </th>
                                                    <th scope="col">
                                                        <label className="form-label">Label</label>
                                                    </th>
                                                    <th>
                                                        <label className="form-label">Actions</label>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <FieldArray
                                                name="requiredParts.parts"
                                                render={( arrayHelper ) => (
                                                    <tbody>
                                                        {values.requiredParts && values.requiredParts.parts &&
                                                            values.requiredParts.parts.map( ( requiredParts, index ) => (
                                                                <tr key={index}>
                                                                    <th scope="row" className="text-center"> {index + 1}</th>
                                                                    <td>
                                                                        <RequestInput
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            name={`requiredParts.parts[${ index }].length`}
                                                                            value={requiredParts.length}
                                                                            type="number"
                                                                            error={
                                                                               touched.requiredParts && touched.requiredParts.parts &&
                                                                                touched.requiredParts.parts[index] &&
                                                                                touched.requiredParts.parts[index]
                                                                                    .length &&
                                                                              errors.requiredParts && errors.requiredParts.parts &&
                                                                                errors.requiredParts.parts[index] &&
                                                                                errors.requiredParts.parts[index]
                                                                                    .length
                                                                            }
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <RequestInput
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            name={`requiredParts.parts[${ index }].quantity`}
                                                                            value={requiredParts.quantity}
                                                                            type="number"
                                                                            error={
                                                                              touched.requiredParts &&  touched.requiredParts.parts &&
                                                                                touched.requiredParts.parts[index] &&
                                                                                touched.requiredParts.parts[index]
                                                                                    .quantity &&
                                                                               errors.requiredParts && errors.requiredParts.parts &&
                                                                                errors.requiredParts.parts[index] &&
                                                                                errors.requiredParts.parts[index]
                                                                                    .quantity
                                                                            }
                                                                        />
                                                                    </td>
                                                                    <td>
                                                                        <RequestInput
                                                                            onChange={handleChange}
                                                                            onBlur={handleBlur}
                                                                            name={`requiredParts.parts[${ index }].label`}
                                                                            value={requiredParts.label}
                                                                            type="text"
                                                                            error={
                                                                              touched.requiredParts &&  touched.requiredParts.parts &&
                                                                                touched.requiredParts.parts[index] &&
                                                                                touched.requiredParts.parts[index]
                                                                                    .label &&
                                                                            errors.requiredParts &&  errors.requiredParts.parts &&
                                                                                errors.requiredParts.parts[index] &&
                                                                                errors.requiredParts.parts[index]
                                                                                    .label
                                                                            }
                                                                        />
                                                                    </td>

                                                                    <td className="actionCell pr-2">
                                                                        <div className="d-flex justify-content-around">
                                                                            <Link
                                                                                to="#"
                                                                                type="button"
                                                                                className="btn  mt-1  btn-outline-danger trRemoveStock"
                                                                                onClick={() =>
                                                                                    arrayHelper.remove( index )
                                                                                }
                                                                            >
                                                                                Delete
                                                                            </Link>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ) )}
                                                        <Link
                                                            to="#"
                                                            type="button"
                                                            className="btn btn-md px-4 m-4 ms-2 btn-secondary trRemoveStock"
                                                            onClick={() =>
                                                                arrayHelper.push( {
                                                                    length: "",
                                                                    quantity: "",
                                                                    label: "",
                                                                } )
                                                            }
                                                        >
                                                            Add
                                                        </Link>
                                                    </tbody>
                                                )}
                                            ></FieldArray>
                                        </table>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-lg btn-secondary">
                                    <i className="bi bi-calculator"></i>
                                    Calculate
                                </button>
                            </div>
                        </form>
                    );
                }}
            </Formik>
        </NavDefaultLayout>
    );
};

export default InputValues;
