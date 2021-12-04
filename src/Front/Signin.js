import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
var request = require("request");


export default class Signin extends Component {

  constructor(props) {
    super(props)
    const token = localStorage.getItem("token")


    let loggedIn = true
    if (token === null) {
      loggedIn = false
    }

    this.state = {
      username: '',
      password: '',
      loggedIn
    }

    this.changeLogInData = this.changeLogInData.bind(this)
    this.submitform = this.submitform.bind(this)
  }

  changeLogInData(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitform(e) {

    e.preventDefault()
    const { username, password } = this.state
    var options = {
      method: 'POST',
      url: 'https://domastic.ebankapi.org/api/login',
      headers:
      {
        'content-type': 'application/json',
        "authorization": "4A8BF27B-20B8-450D-8372-EA9724328297"
      },
      body: {
        username: username,
        password: password
      },
      json: true
    };
    // console.log(options);
    request(options, (err, _res, body) => {
      if (err) { console.log(err);alert('Invalid UserName or PassWord'); }
      else {
         console.log(body[0].email);
        if (body.length > 0) {
          const now = new Date()
          const item = {
            email: body[0].email,
            expiry: now.getTime() + 60000, //1000 = 1sec 
          }
          
          localStorage.setItem("Ebanktoken", JSON.stringify(item))
          this.setState({
            loggedIn: true
          })
        }
        else { alert('Invalid UserName or PassWord'); }
      }
    });

  }


  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/home" />
    }
    return (
      <div>
        <link rel="stylesheet" type="text/css" href="css/accountcustom.css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
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
            <section className="" >
              <div className="container" >
                <div className="row">
                  <div className="col-md-12 col-lg-3 col-xl-3 mx-auto"></div>
                  <div className="col-md-12 col-lg-6 col-xl-6 mx-auto">
                    <form className="formbg p-5 mb-5" onSubmit={this.submitform}>
                      <div className="form-group">
                        <div className="col-12 text-center">
                          <img src="img/logo.png" alt="Ebankapi Logo" className="img-fluid" />

                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12 text-center pb-2">
                          <NavLink to="/"><span className="text-dark txt"> Home |</span></NavLink>
                          <NavLink id="btnForgotPassword" to="Signup" className="reset-password txt text-dark"> Register</NavLink>
                        </div>
                        <div className="col-sm-12 text-center">
                          <h4 className="text-dark fadeInUp pb-4 account-text" data-wow-delay="0.3s">Login</h4>
                          <p className="text-dark"></p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2 mx-auto"></div>
                        <div className="col-md-8 mx-auto">
                          <div className="form-group mb-lg">
                            <input className="form-control" type="text" value={this.state.username} name="username" placeholder="username" onChange={this.changeLogInData} />
                            <span className="sp_name"></span>

                          </div>
                        </div>
                        <div className="col-md-2 mx-auto"></div>

                      </div>
                      <div className="row">
                        <div className="col-md-2 mx-auto"></div>
                        <div className="col-md-8 mx-auto">
                          <div className="form-group mb-lg">
                            <input className="form-control" type="password" value={this.state.password} name="password" placeholder="password" onChange={this.changeLogInData} />
                            <span className="field-validation-valid" data-valmsg-for="NewPass" data-valmsg-replace="true"></span>
                          </div>
                        </div>
                        <div className="col-md-2 mx-auto"></div>
                      </div>
                      <div className="row">
                        <div className="col-md-2 mx-auto"></div>
                        <div className="col-md-8 mx-auto text-center">
                          <span ><NavLink to="Forgetpassword" className="text-dark txt1"> Forgot Password |</NavLink></span><NavLink id="btnForgotPassword" to="Signup" className="reset-password login-support txt1"> Create an account</NavLink>
                        </div>
                        <div className="col-md-2 mx-auto"></div>
                      </div>
                      <div className="row">
                        <div className="col-sm-12 text-center">
                          <div className="banner-info-bg mx-auto text-center">
                            <button type="submit"  >Login</button>
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
