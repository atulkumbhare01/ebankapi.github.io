import React, { Component } from "react";
import { Redirect } from "react-router";
import { nav } from "react-router-dom";
import img from "../assets/images/logo.png"
import img2 from "../assets/images/logo-text.png"
import "../assets/css/style.css"
import { Link } from "react-router-dom";
export default class Home extends Component {
    
    constructor(props) {
        super(props)

       this.state = {showing : true ,
                    showing1:false}
       
        
        const token = localStorage.getItem("Ebanktoken")
        // localStorage.removeItem("token")

        function getWithExpiry() {
            const itemStr = localStorage.getItem("Ebanktoken")

            if (!itemStr) {
                return null
            }

            const item = JSON.parse(itemStr)
            const now = new Date()
            var oldEbanktokenexpiry = item.expiry

            console.log(item.expiry);
            console.log(oldEbanktokenexpiry );
            console.log(now.getTime());

            if (now.getTime() > oldEbanktokenexpiry  ) {
                localStorage.removeItem("Ebanktoken")
                return null
            }
            else {
                var Ebanktokenexpiry = now.getTime() + 60000;
                var Ebanktokenemail = item.email;
                const newitem = {
                    email: Ebanktokenemail,
                    expiry: Ebanktokenexpiry
                }
                localStorage.clear();
                localStorage.setItem("Ebanktoken", JSON.stringify(newitem))      
            }
            return item.value
        }


        // console.log(token);
        let loggedIn = true
        getWithExpiry()
        if (token === null) {
            loggedIn = false
        }
        this.useState = {
            loggedIn
        }
    }

    render() {
        if (this.useState.loggedIn === false) {
            return <Redirect to="/" />
        }
        const {showing} = this.state;
        const {showing1} = this.state;
        return (
            <div className="header-fix fix-sidebar">

<div id="main-wrapper">

<div className="header">
<nav className="navbar top-navbar navbar-expand-md navbar-light">

<div className="navbar-header">
<a className="navbar-brand" href="index.html">

<b><img src={img} alt="homepage" class="dark-logo" /> </b>


<span><img src={img2} alt="homepage" class="dark-logo" /></span>
</a>
</div>

<div className="navbar-collapse">

<ul className="navbar-nav mr-auto mt-md-0">

<li className="nav-item"> <a class="nav-link toggle-nav hidden-md-up text-muted  " href="javascript:void(0)"><i className="mdi mdi-menu" onClick={()=>this.setState(this.setState({showing: !showing}))}></i></a> </li> 
<li className="nav-item m-l-10"> <a className="nav-link sidebartoggle hidden-sm-down text-muted  " href="javascript:void(0)"><i className="ti-menu" onClick={()=>this.setState(this.setState({showing: !showing}))}></i></a> </li>
</ul>

<ul className="navbar-nav my-lg-0">
<li className="nav-item dropdown">
<a className="nav-link dropdown-toggle text-muted  " href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user" onClick={()=>this.setState(this.setState({showing1: !showing1}))}></i></a>
{showing1? <div className="">
<ul className="dropdown-user">
<li role="separator" className="divider"></li>
<li><a href="#"> Setting</a></li>
<li role="separator" className="divider"></li>
<li><a href="#"> Logout</a></li>

</ul>
</div>:null}
</li>
</ul>
</div>
</nav>
</div>


{showing ? 
<div className="left-sidebar">

<div className="scroll-sidebar">

<nav className="sidebar-nav">
<ul id="sidebar-menu">
<li className="nav-devider"></li>
<li className="nav-label">Home</li>
<li> <Link className="has-arrow  " to="/home" aria-expanded="false"><i className="fa fa-tachometer"></i><span className="hide-menu">Dashboard </span></Link>
</li>
<li className="nav-label"></li>
<li> <Link className="has-arrow" to="/transfer-amount" aria-expanded="false"><i className="fa fa-money" aria-hidden="true"></i><span className="hide-menu">Transfer Amount</span></Link>

</li>

 <li className="nav-label"></li>
<li> <Link className="has-arrow" to="/transfer-history" aria-expanded="false"><i className="fa fa-exchange" aria-hidden="true"></i><span className="hide-menu">Transfer History</span></Link>

</li>


<li className="nav-label"></li>
<li>  <Link className="has-arrow" to="/recuive-history" aria-expanded="false"><i className="fa fa-history" aria-hidden="true"></i><span className="hide-menu">Received History</span></Link>

</li>

<li className="nav-label"></li>
<li> <a className="has-arrow  " href="/reject-history" aria-expanded="false"><i className="fa fa-ban" aria-hidden="true"></i><span className="hide-menu">Reject History </span></a>

</li>

<li className="nav-label"></li>
<li> <Link className="has-arrow"  to="/user-setting" aria-expanded="false"><i className="fa fa-gear"></i><span className="hide-menu">Setting</span></Link>

</li>

<li className="nav-label"></li>
<li> <Link className="has-arrow  " to="/" aria-expanded="false"><i className="fa fa-sign-out"></i><span className="hide-menu">Logout</span></Link>

</li>
</ul>
</nav>


</div>

</div>:null}


<div className="page-wrapper">

<div className="row page-titles">
<div className="col-md-5 align-self-center">
<h3 className="text-primary">Dashboard</h3> </div>
<div className="col-md-7 align-self-center">
<ol className="breadcrumb"> 
<li className="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
<li className="breadcrumb-item active">Dashboard</li>
</ol>
</div>
</div>


<div className="container-fluid">

<div className="row">
<div className="col-md-6 col-lg-3">
<div className="card">
<div className="stat-widget-five">
<div className="stat-icon">
<i className="ti-home bg-primary"></i>
</div>
<div className="stat-content">
<div className="stat-heading color-primary">New User</div>
<div className="stat-text">2700</div>
</div>
</div>
</div>
</div>
<div className="col-md-6 col-lg-3">
<div className="card">
<div className="stat-widget-five">
<div className="stat-icon">
<i className="ti-file bg-success"></i>
</div>
<div className="stat-content">
<div className="stat-heading color-success">Profit</div>
<div className="stat-text">3600000</div>
</div>
</div>
</div>
</div>
<div className="col-md-6 col-lg-3">
<div className="card">
<div className="stat-widget-five">
<div className="stat-icon">
<i className="ti-info bg-danger"></i>
</div>
<div className="stat-content">
<div className="stat-heading color-danger">Growth</div>
<div className="stat-text">200%</div>
</div>
</div>
</div>
</div>
<div className="col-md-6 col-lg-3">
<div className="card">
<div className="stat-widget-five">
<div className="stat-icon bg-warning">
<i className="ti-world"></i>
</div>
<div className="stat-content">
<div className="stat-heading color-warning">Revenue</div>
<div className="stat-text">226000</div>
</div>
</div>
</div>
</div>
</div>


 <div className="row">
                
					<div className="col-lg-2">
					</div>
                    <div className="col-lg-8 ">
                        <div className="card cool">
                            <div className="card-header text-center">
                                <h3 className="card-title text-white">User Details</h3>
                            </div>
                            <div className="card-body">
                               
                                <div className="table-responsive">
                                    <table className="table">
                                            <tbody>
                                                <tr>
                                                   
                                               </tr>
                                               <tr>
                                                   <th>Name</th>
                                                   <td>John Deo</td>
                                               </tr>
                                               <tr>
                                                   <th>Bitcoin Address </th>
                                                   <td>abc</td>
                                               </tr>
                                               
                                               <tr>
                                                   <th>Mobile No </th>
                                                   <td>2938478324</td>
                                               </tr>
                                               <tr>
                                                   <th>Email ID </th>
                                                   <td>abc@gmail.com</td>
                                               </tr>
                                              <tr>
                                                   <th>Total </th>
                                                   <td></td>
                                               </tr>
                                           </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
					<div className="col-lg-2">
					</div>
                </div>

</div>
</div>
<footer class="footer"> © 2018 CoinDash All Right Reserved.</footer>
</div>
</div>
        );
    }}
