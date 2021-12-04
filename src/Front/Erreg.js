import React, { Component } from "react";
import { NavLink } from "react-router-dom";


export default class Er_reg extends Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" type="text/css" href="css/accountcustom.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome-animation/0.3.0/font-awesome-animation.min.css"></link>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link>
                <div class="">
                    <div class="area">
                        <ul class="circles bg">
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

                    <div class="" id="featured-product">
                        <div id="gold-tech-bg"></div>
                        <section class="" >
                            <div class="container" >
                                <div class="row">
                                    <div class="col-md-12 col-lg-3 col-xl-3 mx-auto"></div>
                                    <div class="col-md-12 col-lg-6 col-xl-6 mx-auto">
                                        <form action="" class="formbg p-5" enctype="multipart/form-data" method="post">
                                            <div class="form-group">
                                                <div class="col-12 text-center">
                                                    <img src="img/logo.png" alt="Ebankapi Logo" class="img-fluid" />
                                                </div>
                                                <div class="page-wrapper">
                                                    <div class="circle-wrapper">
                                                        <div class="error circle"></div>
                                                        <div class="icon">
                                                            <i class="fa fa-times"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-12 text-center pb-2">
                                                    <NavLink to="/"><span class="text-dark txt"> Home</span></NavLink>
                                                </div>
                                                <div class="col-sm-12 text-center">
                                                    <h5 class="text-dark fadeInUp pb-4 account-text text-center" data-wow-delay="0.3s">Registration Failed Please Register Again</h5>
                                                    <p class="text-white"></p>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-2 mx-auto"></div>
                                                <div class="col-md-8 mx-auto">
                                                    <table class="table table-bordered text-center text-dark mt-3">
                                                        <thead>
                                                            <tr >
                                                                <th></th>
                                                            </tr>
                                                            <tr><th>Try Again For Registration</th></tr>
                                                        </thead>
                                                    </table>
                                                </div>
                                                <div class="col-md-2 mx-auto"></div>

                                            </div>
                                            <div class="row">
                                                <div class="col-md-2 mx-auto"></div>
                                                <div class="col-md-2 mx-auto"></div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-12 text-center">
                                                    <div class="banner-info-bg mx-auto text-center">
                                                        <NavLink class="btn account-btn mt-3" to="Signin">Login</NavLink>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="col-md-12 col-lg-3 col-xl-3 mx-auto"></div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        )
    }

};
