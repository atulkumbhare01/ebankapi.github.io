import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Signup extends Component {
  constructor(props) {
    super(props)
    const token = localStorage.getItem("Ebanktoken")
    function RemoveExpiry() {
      localStorage.clear();
    }
    RemoveExpiry()
  }
  render() {

    return (
      <div>
        <link rel="stylesheet" type="text/css" href="css/accountcustom.css" />

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" />

        <div className="area">
          <ul className="circles bg">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div >
          <div className="" id="featured-product">
            <div id="gold-tech-bg"></div>
            <section className="">
              <div className="container">
                <div className="row">
                  <div className="col-md-12 col-lg-3 col-xl-3 mx-auto"></div>
                  <div className="col-md-12 col-lg-6 col-xl-6" >
                    <form action="" className="formbg p-5 mb-5" encType="multipart/form-data" method="post">
                      <div className="form-group">
                        <div className="col-12 text-center">
                          <img src="img/logo.png" alt="Ebankapi Logo" className="img-fluid" />

                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 text-center pb-2">
                          <NavLink to="/"><span className="text-dark txt"> Home |</span></NavLink><NavLink id="btnForgotPassword" to="Signin" className="reset-password txt text-dark"> Login</NavLink>
                        </div>
                        <div className="col-sm-12 text-center">
                          <h4 className="text-dark fadeInUp pb-2 account-text" data-wow-delay="0.3s">REGISTER</h4>
                          <p className="text-dark pb-4 font-weight-bolder" >You don't have an account please Register</p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-lg">
                            <input className="form-control" id="sp_user" name="sp_user" placeholder="Name" type="text" />
                            <span className="sp_name"></span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-lg">
                            <input className="form-control" id="sp_user" name="sp_user" placeholder="Company Name" type="text" />
                            <span className="sp_name"></span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-lg">
                            <input className="form-control" id="EMail" name="EMail" placeholder="Email ID" type="text" />
                            <span className="field-validation-valid" data-valmsg-for="EMail" data-valmsg-replace="true"></span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-lg">
                            <input className="form-control" id="mobile" name="mobile" placeholder="Mobile No." type="text" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-lg">
                            <input className="form-control" id="NewPass" name="NewPass" onKeyPress="return isPassword(event);" placeholder="Enter Password" type="password" />
                            <span className="field-validation-valid" data-valmsg-for="NewPass" data-valmsg-replace="true"></span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-lg">
                            <input className="form-control" id="ConfirmPass" name="ConfirmPass" onKeyPress="return isPassword(event);" placeholder="Confirm Password" type="password" />
                            <span className="field-validation-valid" data-valmsg-for="ConfirmPass" data-valmsg-replace="true"></span>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="text-left">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                            <label className="margin-text" >I Agree Terms and Conditions</label>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <span className="text-dark font-weight-bolder" > Already have account |</span><NavLink id="btnForgotPassword" to="Signin" className="reset-password login-support font-weight-bolder" > Login</NavLink>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 text-center">
                          <div className="mx-auto text-center">
                            <NavLink className="btn account-btn pl-4 pr-4" to="Verification">Register</NavLink>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-12 col-lg-3 col-xl-3 mx-auto"></div>
                </div>
              </div>
            </section>
          </div>
        </div>


        <script src="https://code.jquery.com/jquery-3.2.1.min.js"
          integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
          crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
        <script src="js/accountcustom.js"></script>
      </div>
    );
  }
};
