import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class Success extends Component {
  render() {
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="css/accountcustom.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.3.0/font-awesome-animation.min.css"></link>
        <div className="">
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

          <div id="featured-product">
            <div id="gold-tech-bg"></div>

            <div className="container" >
              <div className="row">
                <div className="col-md-12 col-lg-3 col-xl-3 mx-auto"></div>
                <div className="col-md-12 col-lg-6 col-xl-6 mx-auto">
                  <form action="" className="formbg mb-5 mt-5" encType="multipart/form-data" method="post">
                    <div className="form-group">
                      <div className="col-12 text-center">
                        <img src="img/logo.png" alt="Ebankapi Logo" className="img-fluid" />


                      </div>
                      <div className="page-wrapper">
                        <div className="circle-wrapper">
                          <div className="success circle"></div>
                          <div className="icon">
                            <i className="fa fa-check"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 text-center pb-2">
                        <NavLink to="/"><span className="text-dark txt"> Home</span></NavLink>
                      </div>
                      <div className="col-sm-12 text-center">
                        <h4 className="text-dark fadeInUp account-text" data-wow-delay="0.3s">Thank You for Registration</h4>
                        <p className="text-white"></p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 mx-auto"></div>
                      <div className="col-md-8 mx-auto">
                        <table className="table table-bordered text-center text-dark">
                          <thead>
                            <tr className="text-center">
                              <th className="text-center">User ID</th>
                              <th className="text-center">Password</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td >abc</td>
                              <td>xyz</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div className="col-md-2 mx-auto"></div>

                    </div>
                    <div className="row">
                      <div className="col-md-2 mx-auto"></div>
                      <div className="col-md-2 mx-auto"></div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12 text-center">
                        <div className="banner-info-bg mx-auto text-center">
                          <NavLink className="btn account-btn" to="Signin">Login</NavLink>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="col-md-12 col-lg-3 col-xl-3 mx-auto"></div>
              </div>
            </div>
          </div>

        </div>

        <script src="https://code.jquery.com/jquery-3.2.1.min.js"
          integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
          crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"></script>
        <script src="js/accountcustom.js"></script>
      </div>
    )
  }

};
