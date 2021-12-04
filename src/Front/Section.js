import {Component} from 'react';
import { NavLink } from "react-router-dom";

class Home extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <div>

                <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <nav className="main-nav">
                                    <NavLink to="/" className="logo">
                                        <img src="img/logo.png" alt="Ebankapi Logo" />
                                    </NavLink>
                                    <ul className="nav">
                                        <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
                                        <li className="scroll-to-section"><a href="#View_Demo">API</a></li>
                                        <li className="scroll-to-section"><a href="#User_Featur">Services</a></li>
                                        <li className="scroll-to-section"><a href="#Admin_Feature">Price</a></li>
                                        <li className="scroll-to-section"><NavLink to="/Signup">Register</NavLink></li>
                                        <li className="scroll-to-section"><NavLink to="/Signin">Login</NavLink></li>
                                    </ul>
                                    <span className='menu-trigger'>
                                        <span>Menu</span>
                                    </span>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="main-banner" id="top">
                    <div className="area">
                        <ul className="circles">
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
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="mb-5">
                                    <h1 className="">E-Banking API</h1>
                                    <h3 className="sub-title">Payment gateway that is safe and secure</h3>
                                    <div className="d-flex ">
                                        <div className="p-2">
                                            <a href="/"
                                                target="_blank" rel="noreferrer"
                                                className="btn btn-main-2 btn-round-full btn-icon animated pulse infinite "
                                                data-wow-duration=".75s" data-wow-delay="2s">CREATE YOUR ACCOUNT </a>
                                        </div>
                                        <div className="p-2">
                                            <div className="dropdown">
                                                {/* <button className=" btn btn-main-3 btn-icon animated pulse "
                                            type="button" id="dropdownMenuButton"
                                            aria-haspopup="true" aria-expanded="false">
                                            VIEW DEMO
                                        </button> */}
                                                {/* <div className="dropdown-menu drop-bg" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="modern/index.html" target="_blank">Modern Theme</a>
                                            <a className="dropdown-item" href="default/index.html" target="_blank">Default Theme </a>
                                        </div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">

                                    <div className="col-lg-6 align-self-center">
                                        <div className="owl-carousel owl-banner">
                                            <div className="item header-text">
                                                <h6>Welcome to E-Banking API</h6>
                                                <h2>Send <em>money</em> to <span>your desire person</span></h2>
                                                <p>E-Banking API allows you to transfer money 24*7, and pay out quickly anywhere all over the INDIA.</p>
                                            </div>
                                            <div className="item header-text">
                                                <h6>SEND MONEY</h6>
                                                <h2>Simple <em>best ideas</em> Money <span>Transfer To Your Loved Ones</span></h2>
                                                <p>with simply an email address and mobile no, you may instantly send money to your relatives and friends.</p>
                                            </div>
                                            <div className="item header-text">
                                                <h6>RECEIVE MONEY</h6>
                                                <h2>Multiple <em>Wallet</em> & <span>Advanced Security</span></h2>
                                                <p>Now Accepting payments from customers/friends/vendors is simple with E-BANKING API with hassle free.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="View_Demo">
                    {/* <ul className="container nav nav-tabs" role="tablist">
                <li className="nav-item">
                    <a className="active nav-link" data-toggle="tab" href="#home" role="tab">Modern Theme layout</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" data-toggle="tab" href="#profile" role="tab">Default Theme layout</a>
                </li>
            </ul> */}

                    <div className="tab-content">
                        <div className="tab-pane active" id="home" role="tabpanel">
                            <section id="pricing" className="pricing-tables">
                                <div className="tables-left-dec">
                                    <img src="img/images/tables-left-dec.png" alt="tables-left-dec" />
                                </div>
                                <div className="tables-right-dec">
                                    <img src="img/images/tables-right-dec.png" alt="tables-right-dec" />
                                </div>
                                <div className="section about">
                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="col-lg-4 col-sm-6 item first-item">
                                                <div className="about-img">
                                                    <img src="img/default1.png" alt="default1" className="img-fluid" />
                                                    <img src="img/modern2.png" alt="modern2" className="img-fluid mt-4" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="about-img mt-4 mt-lg-0">
                                                    <img src="img/modern3.png" alt="modern3" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="about-content pl-4 mt-4 mt-lg-0">
                                                    <h2 className="title-color">HOW TO GET IT?</h2>
                                                    <h4>WITH SIMPLE FLOW NOW YOU CAN BECOME A E-BANKING API MEMBER</h4>
                                                    <p className="mt-4 mb-5">With E-Banking API, you'll pay a low transaction charge and save money on each transaction.</p>

                                                    <NavLink to="/Signup" target="_blank"
                                                        className="btn btn-main-2 btn-round-full btn-icon animated pulse infinite "
                                                        data-wow-duration=".75s" data-wow-delay="2s">Create Account<i
                                                            className="bi bi-arrow-right-short"></i></NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="tab-pane" id="profile" role="tabpanel">
                            <section id="pricing" className="pricing-tables">
                                <div className="tables-right-dec">
                                    <img src="img/images/tables-right-dec.png" alt="tables-right-dec" />
                                </div>
                                <div className="tables-right-dec">
                                    <img src="img/images/videos-right-dec.html" alt="videos-right-dec" />
                                </div>
                                <div className="section about">
                                    <div className="container">
                                        <div className="row align-items-center">
                                            <div className="col-lg-4">
                                                <div className="about-content pl-4 mt-4 mt-lg-0">
                                                    <h2 className="title-color">Default<br /> theme layout</h2>
                                                    <p className="mt-4 mb-5">Default theme - a beautifully crafted, clean, professional
                                                        and
                                                        user friendly.

                                                    </p>

                                                    <NavLink to="/Signup" target="_blank"
                                                        className="btn btn-main-2 btn-round-full btn-icon animated pulse infinite"
                                                        data-wow-duration=".75s" data-wow-delay="2s">Create Account<i
                                                            className="bi bi-arrow-right-short"></i></NavLink>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-6">
                                                <div className="about-img mt-4 mt-lg-0">
                                                    <img src="img/default1.png" alt="default1" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-sm-6 ">
                                                <div className="about-img">
                                                    <img src="img/defaultadmin.png" alt="defaultadmin" className="img-fluid" />
                                                    <img src="img/default2.png" alt="default2" className="img-fluid mt-4" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </section>
                        </div>
                    </div>
                </div>
                <div id="User_Featur" className="our-services section">
                    <div className="services-right-dec">
                        <img src="img/images/services-right-dec.png" alt="services-right-dec" />
                    </div>
                    <div className="container">
                        <div className="services-left-dec">
                            <img src="img/images/services-left-dec.png" alt="services-left-dec.png" />
                        </div>
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <div className="section-heading">
                                    <h2>Product features for user</h2> <br />
                                    <span>Here you can find all user features about this product.</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-md-6 mb-30">
                                <div className="item item-product">
                                    <h4>Deposit</h4>
                                    <div className="icon"><img src="img/user_features/deposit_1.png" alt="deposit_1" /></div>
                                    <p>Registered users can make deposit into E-Banking API.User can select in which Wallet they want
                                        to deposit the amount.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-md-6 mb-30">
                                <div className="item item-product">
                                    <h4>Send Money</h4>
                                    <div className="icon"><img src="img/user_features/send_money.png" alt="deposit_1" /></div>
                                    <p>E-BANIKING API is a fully online banking platform that allows you to send and receive money. You must be a member of the E-BANKING API PLATFORM to send money, and you can send money anywhere in INDIA. You simply need the receiver's bank account information, choose a payment method, and submit the form. You will receive an email message after your payment has been sent.</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-md-6 mb-30">
                                <div className="item item-product">
                                    <h4>Receive Money</h4>
                                    <div className="icon"><img src="img/user_features/request_money.png" alt="deposit_1" /></div>
                                    <p>E-BANIKING API is a fully online banking platform for sending and receiving money. To receive money, you must be a member of the E-BANKING API PLATFORM; once you register, you will obtain information for receiving funds; you can then use this information to begin receiving funds from customers/friends/vendors. After your payment has been received, you will receive an email..</p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row">
                    <div className="col-lg-12">
                        <div className="owl-carousel owl-services">
                            <div className="item item-product">
                                <h4>Deposit</h4>
                                <div className="icon"><img src="img/user_features/deposit_1.png" alt="deposit_1" /></div>
                                <p>Registered users can make deposit into E-Banking API.User can select in which Wallet they want
                                    to deposit the amount.</p>
                            </div>
                            <div className="item item-product">
                                <h4>Send Money</h4>
                                <div className="icon"><img src="img/user_features/send_money.png" alt="send_money" /></div>
                                <p>E-BANIKING API is a fully online banking platform that allows you to send and receive money. You must be a member of the E-BANKING API PLATFORM to send money, and you can send money anywhere in INDIA. You simply need the receiver's bank account information, choose a payment method, and submit the form. You will receive an email message after your payment has been sent.</p>
                            </div>
                            <div className="item item-product">
                                <h4>Receive Money</h4>
                                <div className="icon"><img src="img/user_features/request_money.png" alt="request_money" />
                                </div>
                                <p>E-BANIKING API is a fully online banking platform for sending and receiving money. To receive money, you must be a member of the E-BANKING API PLATFORM; once you register, you will obtain information for receiving funds; you can then use this information to begin receiving funds from customers/friends/vendors. After your payment has been received, you will receive an email.</p>
                            </div>

                            <div className="item item-product">
                                <h4>Currency Exchange</h4>
                                <div className="icon"><img src="img/user_features/currency_exchange.png"
                                    alt="currency_exchange" /></div>
                                <p>User can exchange any currency ‘From wallet’ to ‘To wallet’. Based on each currency
                                    exchange rate, amount will be converted and added on user wallets.</p>
                            </div>
                            <div className="item item-product">
                                <h4>Payouts</h4>
                                <div className="icon"><img src="img/user_features/payouts.png" alt="payouts" /></div>
                                <p>Easily withdraw money from accounts. You have to set the Bank detailsin settings at first
                                    or, if it is PayPal just put your PayPal email address to payout money.</p>
                            </div>

                            <div className="item item-product">
                                <h4>Manual Deposits & Payouts</h4>
                                <div className="icon"><img src="img/user_features/manual_deposits-%26-payouts.png"
                                    alt="manual_deposits-&-payouts" /></div>
                                <p>Manual Deposit can possible by E-Banking API system. Admin can manually Deposit/payout for any
                                    individual users.</p>
                            </div>
                            <div className="item item-product">
                                <h4>Payment Method</h4>
                                <div className="icon"><img src="img/user_features/payment-method.png" alt="payment-method" />
                                </div>
                                <p>Our platform allows you to send and receive money via IMPS, NEFT and RTGS to any bank account number in INDIA without any fuss. Take advantage of our inexpensive transaction fees on sending and getting funds.</p>
                            </div>
                            <div className="item item-product">
                                <h4>Send/Request Money via Phone number</h4>
                                <div className="icon"><img src="img/user_features/reques_money_via_phone_number.png"
                                    alt="reques_money_via_phone_number" />
                                </div>
                                <p>User can Send/Request money via user phone number ( Registered or unregistered users).
                                </p>
                            </div>
                            <div className="item item-product">
                                <h4>Merchants</h4>
                                <div className="icon"><img src="img/user_features/merchants.png" alt="merchants" /></div>
                                <p>User can create merchants via this system. We have two types of merchant- Standard &
                                    Express.</p>
                            </div>
                            <div className="item item-product">
                                <h4>Disputes</h4>
                                <div className="icon"><img src="img/user_features/disputes.png" alt="disputes" /></div>
                                <p>User can contact with merchant through Dispute option if user have any claim about their
                                    product.</p>
                            </div>
                            <div className="item item-product">
                                <h4>Create Tickets</h4>
                                <div className="icon"><img src="img/user_features/create_tickets.png" alt="create_tickets" />
                                </div>
                                <p>Ticket system is better way to dealing with customer about their issues where user can
                                    report or ask questions on various issues.</p>
                            </div>
                            <div className="item item-product">
                                <h4>2-Factor Authentication</h4>
                                <div className="icon"><img src="img/user_features/2-factor_authentication.png"
                                    alt="2-factor_authentication.png" /></div>
                                <p>2FA is an extra layer of security used to make your account more secure. 2FA is allowed
                                    for By email, By Phone & By Google Authentication.</p>
                            </div>
                        </div>
                    </div>
                </div> */}

                    </div>
                </div>




                {/* <div id="Admin_Feature" className="our-services section">
            <div className="services-right-dec">
                <img src="img/images/portfolio-left-dec.png" alt="portfolio-left-dec" />
            </div>
            <div className="container">
                <div className="services-left-dec">
                    <img src="img/images/services-left-dec.png" alt="services-left-dec" />
                </div>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-heading">
                            <h2>Product features for Admin</h2> <br />
                            <span>Here you can find all admin features about this product.</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="owl-carousel owl-services">
                            <div className="item product-admin">
                                <h4>Notification Settings</h4>
                                <div className="icon"><img src="img/admin_feature/notification_settings.png"
                                    alt="notification_settings" /></div>
                                <p>It is the process of knowing your customers. It helps to verify the identity of any
                                    clients either before or during the time you start the business with them.</p>
                            </div>
                            <div className="item product-admin">
                                <h4>Roles & permissions</h4>
                                <div className="icon"><img src="img/admin_feature/role_permissions.png"
                                    alt="role_permissions" /></div>
                                <p>As owner of this site you can add other user as admin providing permission to specific
                                    role.</p>
                            </div>
                            <div className="item product-admin">
                                <h4>Preferences</h4>
                                <div className="icon"><img src="img/admin_feature/preferences.png" alt="preferences" /></div>
                                <p>From settings- preferences, admin can set Time zone, Date format, Money symbol,
                                    Thousands separator.</p>
                            </div>

                            <div className="item product-admin">
                                <h4>Activity Logs</h4>
                                <div className="icon"><img src="img/admin_feature/activity_logs.png" alt="activity_logs" />
                                </div>
                                <p>Admin can see each users login activity from activity logs.</p>
                            </div>

                            <div className="item product-admin">
                                <h4>User Group</h4>
                                <div className="icon"><img src="img/admin_feature/user_group.png" alt="user_group" /></div>
                                <p>Admin can add default group for site users. For group users, admin gives specific
                                    permission to each group.</p>
                            </div>

                            <div className="item product-admin">
                                <h4>User Status Change</h4>
                                <div className="icon"><img src="img/admin_feature/user_status_change.png"
                                    alt="user_status_change" /></div>
                                <p>Admin can change user status to Active/Inactive/Suspend.</p>
                            </div>

                            <div className="item product-admin">
                                <h4>Know your customer (KYC)</h4>
                                <div className="icon"><img src="img/admin_feature/now_your_customer.png"
                                    alt="now_your_customer" /></div>
                                <p>It is the process of knowing your customers. It helps to verify the identity of any
                                    clients either before or during the time you start the business with them.</p>
                            </div>
                            <div className="item product-admin">
                                <h4>Page Builder</h4>
                                <div className="icon"><img src="img/admin_feature/page_builder.png" alt="page_builder" />
                                </div>
                                <p>Page Builder gives you complete freedom to create new page. Admin can create interesting
                                    and contemporary looking pages without using code
                                </p>
                            </div>
                            <div className="item product-admin">
                                <h4>Revenues</h4>
                                <div className="icon"><img src="img/admin_feature/revenues.png" alt="revenues" /></div>
                                <p>Fixed amount charge & charge percentage is revenue in E-Banking API system.For transaction
                                    typeseach currency, admin can set few amount of charges from fees that will separately
                                    show in Revenues in admin panel. Only admin can see revenues.</p>
                            </div>
                            <div className="item product-admin">
                                <h4>Fees & Limits</h4>
                                <div className="icon"><img src="img/admin_feature/fees_Limits.png" alt="fees_Limits" /></div>
                                <p>Fees & Limits are the combination of currency and payment methods (Deposit, Transfer,
                                    Payout, Request payment & Exchange.). Fees are applicable as charge percentage & charge
                                    fixed where limit is the combination of minimum limit & maximum limit.</p>
                            </div>
                            <div className="item product-admin">
                                <h4>Email Templates & settings</h4>
                                <div className="icon"><img src="img/admin_feature/email_templates_settings.png"
                                    alt="email_templates_settings" /></div>
                                <p>To send mail we have dynamic email template which is changeable too. If you want you can
                                    change the template. It also supports multiple languages. We have two E-mail sending
                                    protocols. You can send email via SMTP and another one is default, send mail option.</p>
                            </div>
                            <div className="item product-admin">
                                <h4>SMS Templates & settings</h4>
                                <div className="icon"><img src="img/admin_feature/SMS_templates_settings.png"
                                    alt="SMS_templates_settings" /></div>
                                <p>To send sms we have dynamic sms template which is changeable too. If you want you can
                                    change the template. It also supports multiple languages.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
                <section className="section" id="On_Demand_Feature">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-6 text-center">
                                <div className="section-heading mt-5">

                                    <h2 className="section-title mb-2 ">
                                        Pick Your Packages
                                    </h2>


                                    <p className="mb-5">
                                        Choose your right package and start your business
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-sm-6 col-md-6 mb-30">
                                <div className="web-service-block">
                                    {/* <img src="img/android_app.png" alt="Avatar" className="img-resize" /> */}
                                    <h3>Basic</h3>
                                    <div className="packages">
                                        <span className="free-text">Free</span>
                                        <span className="imps-text">IMPS</span>
                                    </div>
                                    <div className="price-content">
                                        <ul>
                                            <li>1 Rs – 999 Rs  - 10*Rs +  GST  </li>
                                            <li>1000 Rs – 24999 Rs  - 12*Rs + GST</li>
                                            <li>25000 Rs – 1 Lakh – 15* RS + GST</li>
                                            <li>NEFT + RTGS – 15*Rs + GST</li>
                                        </ul>
                                    </div>

                                    <div className="mt-4">
                                        <a href="/" target="_blank" rel="noreferrer"
                                            className="btn btn-main-4">Purchase</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-md-6 mb-30">
                                <div className="web-service-block">
                                    {/* <img src="img/shop_module.png" alt="Avatar" className="img-resize-1" /> */}
                                    <h3 className="">Standard</h3>
                                    <div className="packages">
                                        <span className="free-text">10000</span>
                                        <span className="imps-text">IMPS</span>
                                    </div>
                                    <div className="price-content">
                                        <ul>
                                            <li>1 Rs – 999 Rs  - 7*Rs +  GST</li>
                                            <li>1000 Rs – 24999 Rs  - 9*Rs + GST</li>
                                            <li>25000 Rs – 1 Lakh – 11* RS + GST</li>
                                            <li>NEFT + RTGS – 12*Rs + GST</li>
                                        </ul>
                                    </div>
                                    <div className="mt-4">
                                        <a href="/" target="_blank" rel="noreferrer"
                                            className="btn btn-main-4">Purchase</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-md-6 mb-30">
                                <div className="web-service-block">
                                    {/* <img src="img/open_cart.png" alt="Avatar" className="img-resize-2" /> */}
                                    <h3>Pro</h3>
                                    <div className="packages">
                                        <span className="free-text">20000</span>
                                        <span className="imps-text">IMPS</span>
                                    </div>
                                    <div className="price-content">
                                        <ul>
                                            <li>1 Rs – 999 Rs  - 5*Rs +  GST </li>
                                            <li>1000 Rs – 24999 Rs  - 7*Rs + GST</li>
                                            <li>25000 Rs – 1 Lakh – 9* RS + GST</li>
                                            <li>NEFT + RTGS – 10*Rs + GST</li>
                                        </ul>
                                    </div>
                                    <div className="mt-4">
                                        <a href="/" target="_blank" rel="noreferrer"
                                            className="btn btn-main-4">Purchase</a>
                                    </div>
                                </div>
                            </div>

                            {/* <div className="col-lg-3 col-sm-6 col-md-6 ">
                        <div className="web-service-block">
                            <img src="img/payment_gateway.png" alt="Avatar" className="img-resize-2" />
                            <h3 className="mt-3 top-1">Payment Gateway</h3>
                            <p className="mt-4 top-2">Deposit money to your E-Banking API Wallet using your card through most
                                trusted,
                                secure,
                                robust and popular payment processors. </p>
                            <div className="mt-5 top-3">
                                <a href="/" target="_blank" rel="noreferrer"
                                    className="btn btn-main-4">Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-md-6 ">
                        <div className="web-service-block webnew">
                            <img src="img/qr_code.png" alt="Avatar" className="img-resize" />
                            <h3 className="mt-3">QrCode</h3>
                            <p className="mt-4">All the functions of QRCode is placed in dashboard in mobile app as “QRPAY/Scan
                                Qr
                                Code”KEY POINTS</p>
                            <div className="mt-5">
                                <a href="/" target="_blank" rel="noreferrer"
                                    className="btn btn-main-4">Details</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-md-6 ">
                        <div className="web-service-block webnew">
                            <img src="img/referral_system.png" target="_blank" alt="Avatar" className="img-resize" />
                            <h3 className="mt-3">Multilevel Referral System</h3>
                            <p>A unique referral code is generated for each user on registration. Only users with a
                                referral code will get referral awards.</p>
                            <div className="mt-4">
                                <a href="/" target="_blank" rel="noreferrer"
                                    className="btn btn-main-4">Details</a>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-3 col-sm-6 col-md-6 ">
                        <div className="web-service-block webnew">
                            <img src="img/woo_commerce.png" alt="Avatar" className="img-resize" />
                            <h3 className="mt-4">Woo-Commerce</h3>
                            <p>Easily & Directly get payments from your woocommerce store from your customers using
                            E-Banking API wallet.</p>
                            <div className="mt-5 top-4">
                                <a href="/" target="_blank" rel="noreferrer"
                                    className="btn btn-main-4">Details</a>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="web-service-block webnew">
                            <img src="img/agent_module.png" alt="Avatar" className="img-resize" />
                            <h3 className="mt-4">Agent Module</h3>
                            <p>E-Banking API provides a great feature of multiple agents to spread a business over the world.
                                Agents can create a user, do a transaction for the user and so on.</p>
                            <div className="mt-4 top-5">
                                <a href="/" target="_blank" rel="noreferrer"
                                    className="btn btn-main-4">Details</a>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-3 col-sm-6 col-md-6 ">
                        <div className="web-service-block">
                            <img src="img/crypto_exchange.png" alt="Avatar" className="img-resize-2" />
                            <h3>Crypto Exchange <br /> ( Crypto Buy/Sell )</h3>
                            <p>It's a manual payment gateway where user can deposit as well as payout via their mobile
                                network. Admin can set as many network as they want.</p>
                            <div className="mt-4">
                                <a href="/"
                                    target="_blank" rel="noreferrer" className="btn btn-main-4">Details</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6 ">
                        <div className="web-service-block">
                            <img src="img/deposit_payout_via_mobile.png" alt="Avatar" className="img-resize-2" />
                            <h3>Deposit and Payout via MobileMoney</h3>
                            <p className="top-6">It's a manual payment gateway where user can deposit as well as payout via
                                their mobile
                                network. Admin can set as many network as they want.</p>
                            <div className="mt-4">
                                <a href="/"
                                    target="_blank" rel="noreferrer" className="btn btn-main-4">Details</a>
                            </div>
                        </div>
                    </div> */}


                            {/* <div className="col-lg-3 col-sm-6 col-md-6 ">
                        <div className="web-service-block">
                            <img src="img/mobile_recharge.png" alt="Avatar" className="img-resize" />
                            <h3>Mobile Recharge</h3>
                            <p className="top-7">The mobile recharge module allows customers to easily top-up airtime and data
                                at the
                                world's leading mobile operators and makes payments using any of their wallets on the
                                system.</p>
                            <div className="mt-4">
                                <a href="/"
                                    target="_blank" rel="noreferrer" className="btn btn-main-4">Details</a>
                            </div>
                        </div>
                    </div> */}
                        </div> <br />
                    </div>
                </section>

                <div className="footer-dec">
                    <img src="img/images/footer-dec.png" alt="footer-dec" className="img-fluid" />
                </div>
                <footer>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <div>
                                    <img src="img/logo.png" alt="logo" />
                                </div>
                                <p>E-Banking API secure online payment gateway</p>
                            </div>

                            <div className="col-md-3">
                                <h4><b>Our Products</b></h4>
                                <ul className="link">
                                    <li><a href="/"
                                        target="_blank" rel="noreferrer">Home</a></li>
                                    <li><a href="/"
                                        target="_blank" rel="noreferrer">API</a></li>
                                    <li><a href="/"
                                        target="_blank" rel="noreferrer">Services</a></li>
                                    <li><a href="/"
                                        target="_blank" rel="noreferrer">Price</a></li>
                                </ul>
                            </div>

                            <div className="col-md-3">
                                <h4><b>Resources</b></h4>
                                <ul className="link">
                                    {/* <li><a href="/#contact" >Support Area</a></li> */}
                                    <li><a href="/" target="_blank">Privacy Policy</a></li>
                                    <li><a href="/" target="_blank">Refund Policy</a></li>
                                    <li><a href="/" target="_blank">AML Policy</a></li>
                                    <li><a href="/" target="_blank">Terms &amp; Conditions</a></li>

                                </ul>
                            </div>

                            <div className="col-md-3" id="contact">
                                <h4><b>Contact Us</b></h4>

                                <ul className="link">
                                    <li><a href="/" target="_blank">Support</a></li>
                                    <li><a href="mailto:support@ebankapi.org" target="_blank" rel="noreferrer">support@ebankapi.org</a></li>
                                    <li><a href="/" target="_blank" rel="noreferrer">info@ebankingapi.org</a></li>
                                    {/* <li><a href="/">House-19, Road-19, Nikunja-2, Dhaka 1229</a></li> */}
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <p className="text-center pt-3">Copyright © 2021 <a href="https://arenaitech.com"
                            rel="nofollow">Arena Itech Pvt Ltd</a> All right reserved.</p>

                    </div>
                </footer>
            </div>
        )
    }
}
export default Home;