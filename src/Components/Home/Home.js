import React from 'react';
import './Home.css';
import logo from '../../logo.jpg';

const Home = () => {
    return (
        <div className="bg-light">
            <div className="container">
                <main>
                    <div className="py-5 text-center">
                        <img className="d-block mx-auto mb-4" src={logo} alt="" width="72" height="57" />
                        <h2>Place Delivery Order</h2>
                    </div>

                    <div className="row g-5">
                        <div className="col-md-5 col-lg-4 order-md-last">
                            <h4 className="d-flex justify-content-between align-items-center mb-3">
                                <span className="text-primary">Your cart</span>
                                <span className="badge bg-primary rounded-pill">3</span>
                            </h4>
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-1">Cost Type</h6>
                                    </div>
                                    <span className="text-muted">Charge</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-1">Delivery Charge</h6>
                                    </div>
                                    <span className="text-muted">$20</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                    <div>
                                        <h6 className="my-1">COD Charge</h6>
                                    </div>
                                    <span className="text-muted">$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-light">
                                    <div className="text-success">
                                        <h6 className="my-0">Promo code</h6>
                                        <small>EXAMPLECODE</small>
                                    </div>
                                    <span className="text-success">−$5</span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between">
                                    <span>Total (BDT)</span>
                                    <strong>$20</strong>
                                </li>
                            </ul>

                            <form className="card p-2">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Promo code" />
                                    <button type="submit" className="btn btn-secondary">Redeem</button>
                                </div>
                            </form>
                        </div>


                        <div className="col-md-7 col-lg-8">
                            <form className="needs-validation" novalidate="">
                                <div className="row g-3">
                                    <div className="col-12">
                                        <label for="merchantNum" className="form-label">Merchant Order Reference</label>
                                        <input type="text" className="form-control" id="merchantNum" placeholder="Enter order reference or number" required="" />
                                        <div className="invalid-feedback">
                                            Valid order reference is required.
                                        </div>
                                    </div>


                                    <div className="my-4">
                                        <h6 className="fw-normal mb-3">Pickup From:</h6>
                                        <div className="form-check">
                                            <input id="merchantAdd" name="pickupFrom" type="radio" className="form-check-input" required="" />
                                            <label className="form-check-label" for="debit">Merchant's registered address</label>
                                        </div>
                                        <div className="form-check">
                                            <input id="otherLoc" name="pickupFrom" type="radio" className="form-check-input" required="" />
                                            <label className="form-check-label" for="paypal">Other merchant location</label>
                                        </div>
                                    </div>

                                    <h4 className="mb-1">Pickup Details (only when pickup location is different)</h4>

                                    <div className="col-12">
                                        <label for="orderTyp" className="form-label">Order Type</label>
                                        <select className="form-select" id="orderTyp" required="">
                                            <option value="">Other Merchant</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid type.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="merchantname" className="form-label">Pickup Merchant Name</label>
                                        <input type="text" className="form-control" id="merchantname" placeholder="" required="" />
                                        <div className="input-group has-validation">
                                            <div className="invalid-feedback">
                                                Please enter merchant name.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="address" className="form-label">Pickup Merchant Address </label>
                                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" />
                                        <div className="invalid-feedback">
                                            Please enter merchant address.
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label for="district" className="form-label">District</label>
                                        <select className="form-select" id="district" required="">
                                            <option value="">Choose...</option>
                                            <option>Dhaka</option>
                                            <option>Chittagong</option>
                                            <option>Barisal</option>
                                            <option>Other</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid district.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="phone" className="form-label">Pickup Merchant Number</label>
                                        <input type="tel" className="form-control" id="phone" placeholder="" />
                                        <div className="invalid-feedback">
                                            Please enter a valid phone number.
                                        </div>
                                    </div>

                                </div>

                                <hr className="my-4" />

                                <h4 className="mb-3">Customer Details</h4>

                                <div className="row gy-3">
                                    <div className="col-12">
                                        <label for="cstName" className="form-label">Customer Name</label>
                                        <input type="text" className="form-control" id="cstName" placeholder="" required="" />
                                        {/* <small className="text-muted">Full name as displayed on card</small> */}
                                        <div className="invalid-feedback">
                                            Customer name is required
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="cstAdd" className="form-label">Customer Address</label>
                                        <input type="text" className="form-control" id="cstAdd" placeholder="1234 Main St" required="" />
                                        <div className="invalid-feedback">
                                            Please enter customer address.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="cstNum" className="form-label">Customer Mobile Number</label>
                                        <input type="tel" className="form-control" id="cstNum" placeholder="" value="" required="" />
                                        <div className="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="district" className="form-label">District</label>
                                        <select className="form-select" id="district" required="">
                                            <option value="">Choose...</option>
                                            <option>Dhaka</option>
                                            <option>Chittagong</option>
                                            <option>Barisal</option>
                                            <option>Other</option>
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid district.
                                        </div>
                                    </div>

                                    <hr className="my-4" />

                                    <h4 className="mb-1">Package and Delivery Details</h4>

                                    <div className="col-12">
                                        <label for="username" className="form-label">Product(s) Brief</label>
                                        <input type="text" className="form-control" id="username" placeholder="" required="" />
                                        <div className="input-group has-validation">
                                            {/* <span className="input-group-text">@</span> */}
                                            <div className="invalid-feedback">
                                                Please select product(s) brief.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-12">
                                        <label for="amount" className="form-label">Total Collection Amount (maximum 7 digits)</label>
                                        <input type="number" className="form-control" id="amount" placeholder="" required="" />
                                        <div className="input-group has-validation">
                                            {/* <span className="input-group-text">@</span> */}
                                            <div className="invalid-feedback">
                                                Please enter collection amount.
                                            </div>
                                        </div>
                                    </div>



                                    <div className="col-12">
                                        <label for="weight" className="form-label">Weight</label>
                                        <select className="form-select" id="weight" required="">
                                            <option value="">Choose...</option>
                                            <option value="">Upto 1 KG</option>
                                            <option value="">Upto 3 KG</option>
                                            <option value="">Upto 5 KG</option>
                                            <option value="">Upto 10 KG</option>
                                            {/* <option>Other Merchant</option> */}
                                        </select>
                                        <div className="invalid-feedback">
                                            Please select a valid weight.
                                        </div>
                                    </div>


                                </div>

                                <hr className="my-4" />

                                <button className="w-100 btn btn-primary btn-lg mb-5" type="submit">Continue to checkout</button>
                            </form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;

