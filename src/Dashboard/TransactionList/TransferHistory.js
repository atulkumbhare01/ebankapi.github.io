import React from 'react'
import img from "../../assets/images/logo.png"
import img2 from "../../assets/images/logo-text.png"
import { Link } from 'react-router-dom'
export const TransferHistory = () => {
    return (
        <div className="header-fix fix-sidebar">

        <div id="main-wrapper">
        
        <div className="header">
        <nav className="navbar top-navbar navbar-expand-md navbar-light">
        
        <div className="navbar-header">
        <a className="navbar-brand" href="index.html">
        
        <b><img src={img} alt="homepage" className="dark-logo" /></b>
        
        
        <span><img src={img2} alt="homepage" className="dark-logo" /></span>
        </a>
        </div>
        
        <div className="navbar-collapse">
        
        <ul className="navbar-nav mr-auto mt-md-0">
        
        <li className="nav-item"> <a className="nav-link toggle-nav hidden-md-up text-muted  " href="javascript:void(0)"><i className="mdi mdi-menu"></i></a> </li>
        <li className="nav-item m-l-10"> <a className="nav-link sidebartoggle hidden-sm-down text-muted  " href="javascript:void(0)"><i className="ti-menu"></i></a> </li>
        </ul>
        
        <ul className="navbar-nav my-lg-0">
        <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-muted  " href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user"></i></a>
        <div className="dropdown-menu dropdown-menu-right animated slideInRight">
        <ul className="dropdown-user">
        <li role="separator" className="divider"></li>
        <li><a href="#"> Setting</a></li>
        <li role="separator" className="divider"></li>
        <li><a href="#"> Logout</a></li>
        </ul>
        </div>
        </li>
        </ul>
        </div>
        </nav>
        </div>
        
        
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
        <li> <Link className="has-arrow  " to="/transfer-history" aria-expanded="false"><i className="fa fa-exchange" aria-hidden="true"></i><span className="hide-menu">Transfer History</span></Link>
        
        </li>
        
        <li className="nav-label"></li>
        <li> <Link className="has-arrow  " to="/recuive-history" aria-expanded="false"><i className="fa fa-history" aria-hidden="true"></i><span className="hide-menu">Received History</span></Link>
        
        </li>
        
        <li className="nav-label"></li>
        <li> <Link className="has-arrow  " to="/reject-history" aria-expanded="false"><i className="fa fa-ban" aria-hidden="true"></i><span className="hide-menu">Reject History </span></Link>
        
        </li>
        
        <li className="nav-label"></li>
        <li> <Link className="has-arrow  " to="/user-setting" aria-expanded="false"><i className="fa fa-gear"></i><span className="hide-menu">Setting</span></Link>
        
        </li>
        
        <li className="nav-label"></li>
        <li> <Link className="has-arrow" to="/" aria-expanded="false"><i className="fa fa-sign-out"></i><span className="hide-menu">Logout</span></Link>
        
        </li>
        </ul>
        </nav>
        
        </div>
        
        </div>
        
        
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
        
        
        <div class="card">
                           <div class="row">
						   <div class="col-lg-12">
                            <h2 class="password-header">Transfer History Detail</h2>
                            <div class="card-datatable table-responsive">
                                <table class="datatables-demo table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th>SR.NO</th>
                                            <th>Date</th>
                                            <th>Address </th>
                                            <th>Amount </th>
                                            <th>Charges </th>
                                            <th>Paybale</th>
                                            <th>Status</th>
                                            
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="odd gradeX">
                                            <td>Trident</td>
                                            <td>Internet Explorer 4.0</td>
                                            <td>Win 95+</td>
                                            <td class="center"> 4</td>
                                            <td class="center">X</td>
                                            <td class="center">X</td>
                                            <td class="center">X</td>
                                            
                                            
                                        </tr>
                                        <tr class="odd gradeX">
                                            <td>Trident</td>
                                            <td>Internet Explorer 4.0</td>
                                            <td>Win 95+</td>
                                            <td class="center"> 4</td>
                                            <td class="center">X</td>
                                            <td class="center">X</td>
                                            <td class="center">X</td>
                                          
                                        </tr>
                                       
                                    </tbody>
                                </table>
								</div>
                            </div>
							</div>
                        </div>
         </div>
        
        
        <footer className="footer"> © 2018 CoinDash All Right Reserved.</footer>
        
        </div>
        
        </div>
       
    )
}
