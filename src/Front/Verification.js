import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class Verification extends Component {

    render() {
        return (
            <div>
                <link rel="stylesheet" type="text/css" href="css/accountcustom.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.3.0/font-awesome-animation.min.css"></link>

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
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

                    <div className="" id="featured-product">
                        <div id="gold-tech-bg"></div>
                        <section className="" >
                            <div className="container" >
                                <div className="row">
                                    <div className="col-md-12 col-lg-3 col-xl-3 mx-auto"></div>
                                    <div className="col-md-12 col-lg-6 col-xl-6 mx-auto">
                                        <form action="" className="formbg p-5 mt-5 mb-5" encType="multipart/form-data" method="post">
                                            <div className="form-group">
                                                <div className="col-12 text-center">
                                                    <img src="./img/logo.png" alt="Ebankapi Logo" className="img-fluid" />


                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12 text-center">
                                                    <NavLink to="/"><span className="text-dark txt"> Home </span></NavLink>
                                                </div>
                                                <div className="col-sm-12 text-center">
                                                    <h3 className="text-dark fadeInUp pb-4" data-wow-delay="0.3s">OTP is sent to Your Mobile Number</h3>
                                                    <p className="text-white"></p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2 mx-auto"></div>
                                                <div className="col-md-8 mx-auto">
                                                    <div className="form-group mb-lg">
                                                        <input className="form-control" id="sp_user" name="sp_user" placeholder="Enter OTP" type="text" />
                                                        <span className="sp_name" ></span>

                                                    </div>
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
                                                        <NavLink className="btn account-btn mt-3" to="Success">Sumbit</NavLink>
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
        )
    }
};
