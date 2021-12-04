import React,{useState} from 'react'
import img from "../../assets/images/logo.png"
import img2 from "../../assets/images/logo-text.png"
import { Link } from 'react-router-dom'
export const TransferAmount = () => {
const [amount, setAmount] = useState("");
const [account_no, setAccount_no] = useState("")
const [ifsc, setIfsc] = useState("")
const [transfer_type, setTransfer_type] = useState("");
const [remark, setRemark] = useState("")
 const submit =(event)=>{
    alert(account_no);
    console.log("giut",account_no )
     let data ={amount, account_no, ifsc, transfer_type, remark }
     fetch("https://domastic.ebankapi.org/api/DomesticPaymentsAny", {
         method:"POST",
         header:{
             'Accept':"application/json",
             'Content-Type':"application/json"
         },
        body:JSON.stringify(data)
     }).then((result)=>{
        alert(result);
        
     })
     .catch((error)=>{
         console.log(error);

     })
 }


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
        <li> <Link className="has-arrow  " to="/receive-history" aria-expanded="false"><i className="fa fa-history" aria-hidden="true"></i><span className="hide-menu">Received History</span></Link>
        
        </li>
        
        <li className="nav-label"></li>
        <li> <Link className="has-arrow  " to="/reject-history" aria-expanded="false"><i className="fa fa-ban" aria-hidden="true"></i><span className="hide-menu">Reject History </span></Link>
        
        </li>
        
        <li className="nav-label"></li>
        <li> <Link className="has-arrow  " to="/user-setting" aria-expanded="false"><i className="fa fa-gear"></i><span className="hide-menu">Setting</span></Link>
        
        </li>
        
        <li className="nav-label"></li>
        <li> <Link className="has-arrow" to="/home" aria-expanded="false"><i className="fa fa-sign-out"></i><span className="hide-menu">Logout</span></Link>
        
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
        <li className="breadcrumb-item"><a href="javascript:void(0)">Transfer Amount</a></li>
        <li className="breadcrumb-item active">Dashboard</li>
        </ol>
        </div>
        </div>
        
        
        <div class="container-fluid flex-grow-1 container-p-y">

<div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-8">
        <div class="card mb-4 cool">
            <h3 class="card-header text-white">Transfer Details</h3>
             <div class="general-form mx-3">
                <form>
                  
                    <div class="form-group">
                        <label class="form-label">AMOUNT</label>
                        <input type="text" class="form-control" placeholder=" AMOUNT" name="amount" value={amount} onChange={(e)=>{setAmount(e.target.value)}}/>
                        <div class="clearfix"></div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">ACCOUNT NO($)</label>
                        <input type="text" class="form-control" placeholder=" ACCOUNT NO" name="account_no" value={account_no} onChange={(e)=>{setAccount_no(e.target.value)}}/>
                        <div class="clearfix"></div>
                    </div>
                    <div class="form-group">
                        <label class="form-label">IFSC Code</label>
                        <input type="text" class="form-control" placeholder="IFSC CODE" name="ifsc_code" value={ifsc} onChange={(e)=>{setIfsc(e.target.value)}}/>
                        <div class="clearfix"></div>
                    </div>
                    <div class="form-group">
                        <label class="form-label"> Tranfer Type</label>
                        <select type="select" class="form-control" placeholder="TRANSFER TYPE" name="transfer_type" value={transfer_type} onChange={(e)=>{setTransfer_type(e.target.value)}}>
                         <option>FT</option>
                         <option>NEFT</option>
                         <option>RTGS</option>
                         <option>IMPS</option>
                         <option>ANY</option> </select>
                        <div class="clearfix"></div>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-label">Remark</label>
                        <input type="text" class="form-control" placeholder="REMARK" name="remark" value={remark} onChange={(e)=>{setRemark(e.target.value)}}/>
                        <div class="clearfix"></div>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary" onClick={submit}>Submit</button>
                    </div>
                </form>
             </div>
        </div>
    </div>
    <div class="col-md-2"></div>
   

</div>
</div>

        
        
         </div>
        
        
        <footer className="footer"> © 2018 CoinDash All Right Reserved.</footer>
        
        </div>
        
        </div>
       
    )
}
