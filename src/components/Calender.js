import React from 'react'
import './Calender.css'

const Calender = () => {
    return (

        <div>
            <nav className="navbar navbar-light bg-danger d-flex justify-content-center">
                <span className="navbar-brand" style={{ fontWeight: "bolder" }}>Hotell</span>
            </nav>
            <div className='container-fluid jumbotron jumbotron-fluid'>
                <h2 className='m-2' style={{ fontWeight: "bolder" }}>Make Inventory, Rates & Restrictions</h2>
                <nav aria-label="Page navigation example">
                    <ul className="pagination d-flex justify-content-end">
                        <select className="form-select" style={{ width: "20%", backgroundColor: "DodgerBlue" }}>
                            <option selected>View more</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>

                        <select className="form-select" style={{ width: "20%", border: "2px solid DodgerBlue", margin: "2px 2px" }}>
                            <option selected>View Date</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <li className="page-item ">
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true"><i class="fa fa-angle-left" style={{ fontSize: "28px" }}></i></span>
                            </a>
                        </li>
                        <li className="page-item">
                            <input type="date" id="number" value="0" className='pr-4 mr-2 ml-2' />
                        </li>
                        <li className="page-item">
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true"><i class="fa fa-angle-right" style={{ fontSize: "28px" }}></i></span>
                            </a>
                        </li>
                    </ul>
                </nav>


                <div className="table-responsive d-flex justify-content-center">
                    <table className="table table-bordered table-light">
                        <thead>
                            <tr className='Scrollable-bar'>
                                <th scope="col"><i className="fa fa-bed" style={{ fontSize: "24px" }}></i> Room and Rates
                                    <a href="#" style={{ fontSize: "10px", paddingLeft: "20px", whiteSpace: "nowrap" }}>Show Details</a>
                                </th>
                                <th scope="col">Thu<br />08</th>
                                <th scope="col">Fri<br />09</th>
                                <th scope="col">Sat<br />10</th>
                                <th scope="col">Sun<br />11</th>
                                <th scope="col">Mon<br />12</th>
                                <th scope="col">Tue<br />13</th>
                                <th scope="col">Wed<br />14</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th><i className="fa fa-plus-square" style={{ fontSize: "18px", color: "DodgerBlue" }}></i> View Rates</th>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <i className="fa fa-plus-square" style={{ fontSize: "18px", color: "DodgerBlue" }}></i> Delux Room
                                </th>
                                <td><input type="number" id="number" /></td>
                                <td><input type="number" id="number" /></td>
                                <td><input type="number" id="number" /></td>
                                <td><input type="number" id="number" /></td>
                                <td><input type="number" id="number" /></td>
                                <td><input type="number" id="number" /></td>
                                <td><input type="number" id="number" /></td>
                            </tr>
                            <tr>
                                <th scope="row">
                                    <i className="fa fa-plus-square" style={{ fontSize: "18px", color: "DodgerBlue" }}></i> Corporate Room
                                </th>
                                <td><input type="number" id="number" /></td>
                                <td><input type="number" id="number" /></td>
                                <td><input type="number" id="number" /></td>
                                <td><input type="number" id="number" /></td>
                                <td><input type="number" id="number" /></td>
                                <td><input type="number" id="number" /></td>
                                <td><input type="number" id="number" /></td>
                            </tr>
                            <tr>
                                <th scope="row">Net Booked</th>
                                <td><input type="number" id="number" value="1" /></td>
                                <td><input type="number" id="number" value="0" /></td>
                                <td><input type="number" id="number" value="0" /></td>
                                <td><input type="number" id="number" value="0" /></td>
                                <td><input type="number" id="number" value="1" /></td>
                                <td><input type="number" id="number" value="0" /></td>
                                <td><input type="number" id="number" value="0" /></td>
                            </tr>

                            <tr>
                                <th scope="row">
                                    <select className='form-select-sm ' style={{ border: "DodgerBlue" }}>
                                        <option selected>Standard Rate</option>
                                        <option>Rate!</option>
                                        <option>Rate!</option>
                                    </select>
                                </th>
                                <td><input type="number" id="number" value="1" /></td>
                                <td><input type="number" id="number" value="0" /></td>
                                <td><input type="number" id="number" value="0" /></td>
                                <td><input type="number" id="number" value="0" /></td>
                                <td><input type="number" id="number" value="1" /></td>
                                <td><input type="number" id="number" value="0" /></td>
                                <td><input type="number" id="number" value="0" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </div>
        </div>

    )
}

export default Calender;