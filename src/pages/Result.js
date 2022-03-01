import React from "react";
import { SmallBtn } from "../components/btn.js";
import NavDefaultLayout from "../layouts/NavDefaultLayout.js";
import { RouteLinks } from "../routes/RouteLinks.js";

const Result = () =>{
    const icon = {
        editicon: <i class="bi bi-pencil-fill"></i>,
        newIcon: <i class="bi bi-folder-plus"></i>,
    };
    return (
        <NavDefaultLayout>
            <div className="result container pb-5">
                <h1 className="my-4">Result</h1>
                <div className="d-flex flex-wrap justify-content-between px-1 pt-2 mb-2 result__header">
                    <div className="">
                        <SmallBtn
                            to={RouteLinks.inputValue}
                            label="new"
                            icon={icon.newIcon}
                            className="outline-secondary"
                        />
                        <SmallBtn
                            to={RouteLinks.inputValue}
                            label="Edit"
                            icon={icon.editicon}
                            className="outline-secondary  m-2"
                        />
                    </div>
                    <form class="form-inline ">
                        <div className="mr-1">
                            <select
                                className="form-select bg-secondary text-light"
                                aria-label="Disabled select example"
                            >
                                <option value="  Generic/Metric (15.75)">
                                    Generic/Metric (15.75)
                                </option>
                                <option value="  Decimal inches (15.75″)">
                                    Decimal inches (15.75″)
                                </option>
                                <option value="   Fractional inches (15 3/4″)">
                                    Fractional inches (15 3/4″)
                                </option>

                                <option value=" Fractional feet & inches (1' 3 3/4″)">
                                    Fractional feet & inches (1'3 3/4″)
                                </option>
                            </select>
                        </div>
                        <div>
                            <div className="btn-group m-1">
                                <div className="dropdown">
                                    <button
                                        className="btn btn-secondary  dropdown-toggle"
                                        type="button"
                                        id="dropdownMenuButton"
                                        data-bs-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        Export Result
                                    </button>
                                    <div
                                        className="dropdown-menu"
                                        aria-labelledby="dropdownMenuButton"
                                    >
                                        <p className="dropdown-item">
                                            Import data from CSV
                                        </p>
                                        <p className="dropdown-item">
                                            Import data from Excel
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                            class="nav-link active"
                            id="nav-home-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-solution"
                            type="button"
                            role="tab"
                            aria-controls="nav-home"
                            aria-selected="true"
                        >
                            Solution
                        </button>
                        <button
                            class="nav-link"
                            id="nav-profile-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#nav-configuration"
                            type="button"
                            role="tab"
                            aria-controls="nav-configuration"
                            aria-selected="false"
                        >
                            Configration
                        </button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div
                        class="tab-pane fade show active"
                        id="nav-solution"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                    >
                        <div className="row no-gutters row-bordered mt-3">
                            <div className="d-flex col-md-6 col-lg align-items-center">
                                <div class="card-body">
                                    <h2 className="mb-3 ml-1">
                                        Required stocks
                                    </h2>
                                    <table class="table table-sm">
                                        <thead className="table-head">
                                            <tr class="noTopBorder">
                                                <th className="h5 ">
                                                    Stock length
                                                </th>
                                                <th class="text-right text-nowrap h5 ">
                                                    Quantity
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td class="text-nowrap h3">
                                                    39.37″
                                                </td>
                                                <td class=" h3 text-right text-nowrap text-secondary">
                                                    1
                                                </td>
                                            </tr>
                                            <tr class="totalRow">
                                                <td class="h3 pt-2">Total </td>
                                                <td class="text-right text-nowrap font-weight-bold h3 text-secondary">
                                                    1
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="d-flex col-md-6 col-lg align-items-center">
                                <div class="card-body d-flex align-items-center mt-5">
                                    <table class="table border-bottom product-item-table">
                                        <tbody>
                                            <tr>
                                                <td>Total parts</td>
                                                <td class="text-right">
                                                    <strong>2</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Total parts length</td>
                                                <td class="text-right">
                                                    <strong>15.748″</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    Used stocks total length
                                                </td>
                                                <td class="text-right">
                                                    <strong>39.37″</strong>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Total yield</td>
                                                <td class="text-right">
                                                    <strong>40 %</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <h6 class="mb-3 display-6">Layout patterns</h6>
                            <div className="my-3">
                                <table class="table table-bordered custom-table">
                                    <thead class="thead-light">
                                        <tr>
                                            <th></th>
                                            <th>Layout details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="w-15">
                                                <div class="text-dark">
                                                    <div class="text-muted small line-height-1">
                                                        Repetition
                                                    </div>
                                                    <p class="h3">1x</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="row">
                                                    <div class="col-lg-3 col-md-3 mb-2 mb-sm-0">
                                                        <div class="text-dark">
                                                            <div class="text-muted small line-height-1">
                                                                Stock length
                                                            </div>
                                                            <div class="h2">
                                                                39.37″
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-5 col-md-5 mb-2 mb-sm-0">
                                                        <div class="p-1 mb-3 border bg-light d-flex justify-content-between">
                                                            <div class="">
                                                                Part length /
                                                                Label
                                                            </div>
                                                            <div class="">
                                                                Qty
                                                            </div>
                                                        </div>
                                                        <div class="px-1 mb-1 border border-success d-flex justify-content-between">
                                                            <span class="">
                                                                7.874″ / 10B
                                                            </span>
                                                            <div class="">
                                                                2
                                                            </div>
                                                        </div>
                                                        <div class="px-1 mb-1 border border-danger d-flex justify-content-between">
                                                            <span class="">
                                                                774″ / 20C
                                                            </span>
                                                            <div class="">
                                                                2
                                                            </div>
                                                        </div>
                                                        <div class="px-1 mb-1 custom-border d-flex justify-content-between">
                                                            <span class="">
                                                                774″ / 50C
                                                            </span>
                                                            <div class="">
                                                                2
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-1 d-none d-sm-none d-md-node d-lg-block"></div>
                                                    <div class="col-lg-3 col-md-4 small mb-5">
                                                        <div class="p-1 mb-1 border bg-light mb-3">
                                                            <div class="text-nowrap  ">
                                                                Waste{" "}
                                                            </div>
                                                        </div>
                                                        <div class="px-1 mb-1 custom-border d-flex justify-content-between">
                                                            <div class="text-nowrap">
                                                                Material :{" "}
                                                            </div>
                                                            <div class="">
                                                                23.622″
                                                            </div>
                                                        </div>
                                                        <div class="px-1 mb-1  custom-border d-flex justify-content-between">
                                                            <div class="text-nowrap">
                                                                Cut :{" "}
                                                            </div>
                                                            <div class="">
                                                                2
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        style={{ width: "15%" }}
                                        aria-valuenow="15"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        10/B
                                    </div>
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "30%" }}
                                        aria-valuenow="30"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        20/C
                                    </div>
                                    <div
                                        className="progress-bar progressbar3"
                                        role="progressbar"
                                        style={{ width: "20%" }}
                                        aria-valuenow="20"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        50/D
                                    </div>
                                </div>
                            </div>
                            <div className="my-3">
                                <table class="table table-bordered custom-table">
                                    <thead class="thead-light">
                                        <tr>
                                            <th></th>
                                            <th>Layout details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="w-15">
                                                <div class="text-dark">
                                                    <div class="text-muted small line-height-1">
                                                        Repetition
                                                    </div>
                                                    <p class="h3">1x</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div class="row">
                                                    <div class="col-lg-3 col-md-3 mb-2 mb-sm-0">
                                                        <div class="text-dark">
                                                            <div class="text-muted small line-height-1">
                                                                Stock length
                                                            </div>
                                                            <div class="h2">
                                                                39.37″
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-5 col-md-5 mb-2 mb-sm-0">
                                                        <div class="p-1 mb-3 border bg-light d-flex justify-content-between">
                                                            <div class="">
                                                                Part length /
                                                                Label
                                                            </div>
                                                            <div class="">
                                                                Qty
                                                            </div>
                                                        </div>
                                                        <div class="px-1 mb-1 border border-success d-flex justify-content-between">
                                                            <span class="">
                                                                7.874″ / 10B
                                                            </span>
                                                            <div class="">
                                                                2
                                                            </div>
                                                        </div>
                                                        <div class="px-1 mb-1 border border-danger d-flex justify-content-between">
                                                            <span class="">
                                                                774″ / 20C
                                                            </span>
                                                            <div class="">
                                                                2
                                                            </div>
                                                        </div>
                                                        <div class="px-1 mb-1 custom-border d-flex justify-content-between">
                                                            <span class="">
                                                                774″ / 50C
                                                            </span>
                                                            <div class="">
                                                                2
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-1 d-none d-sm-none d-md-node d-lg-block"></div>
                                                    <div class="col-lg-3 col-md-4 small mb-5">
                                                        <div class="p-1 mb-1 border bg-light mb-3">
                                                            <div class="text-nowrap  ">
                                                                Waste{" "}
                                                            </div>
                                                        </div>
                                                        <div class="px-1 mb-1 custom-border d-flex justify-content-between">
                                                            <div class="text-nowrap">
                                                                Material :{" "}
                                                            </div>
                                                            <div class="">
                                                                23.622″
                                                            </div>
                                                        </div>
                                                        <div class="px-1 mb-1  custom-border d-flex justify-content-between">
                                                            <div class="text-nowrap">
                                                                Cut :{" "}
                                                            </div>
                                                            <div class="">
                                                                2
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="progress">
                                    <div
                                        className="progress-bar bg-success"
                                        role="progressbar"
                                        style={{ width: "15%" }}
                                        aria-valuenow="15"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        10/B
                                    </div>
                                    <div
                                        className="progress-bar bg-danger"
                                        role="progressbar"
                                        style={{ width: "30%" }}
                                        aria-valuenow="30"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        20/C
                                    </div>
                                    <div
                                        className="progress-bar progressbar3"
                                        role="progressbar"
                                        style={{ width: "20%" }}
                                        aria-valuenow="20"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    >
                                        50/D
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*  Configration */}
                    <div
                        class="tab-pane fade"
                        id="nav-configuration"
                        role="tabpanel"
                        aria-labelledby="nav-configuration-tab"
                    >
                        ...
                    </div>
                </div>
            </div>
        </NavDefaultLayout>
    );
};

export default Result;
