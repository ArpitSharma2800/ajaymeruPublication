import React from 'react'
import './homePage.css'
import logo from '../../Assests/logo.jpeg'
import azad from '../../Assests/azad.png'
export default function homePage() {
    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <a class="navbar-brand" href="#">
                    <img src={azad}  class="d-inline-block azadImg align-top" alt=""/>
                </a>
                </nav>
            <div className="p-4">
                <div className="card  mt-4 mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4 p-2">
                            <img src={logo} className="card-img" alt="loading" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title" >अजयमेरु पब्लिकेशन</h1>
                                <p className="card-text"><b>राजस्थान में पहली बार </b><br></br> 
                                |<b> बी.ए.</b> | <b>एम. ए.</b> | </p>
                                <div class="social d-flex justify-content-center"> <a href="#" class="btn"><i class="fab fa-telegram-plane"></i></a> <a href="#" class="btn"><i class="fab fa-facebook-f"></i></a> <a href="#" class="btn"><i class="fab fa-youtube"></i></a>
                                    <a href="#" class="btn"><i class="fab fa-twitter"></i></a> <a href="#" class="btn"><i class="fas fa-mail-bulk"></i></a> <a href="#" class="btn"><i class="fab fa-whatsapp"></i></a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-flex justify-content-center text-danger "> 
                <h1 className="animate__animated animate__flash animate__repeat-3 ">जल्द ही</h1>&nbsp;&nbsp;&nbsp;&nbsp;
                <h1 className="animate__animated animate__flash animate__repeat-3">Coming soon</h1>
            </div>
        </div>
    )
}
