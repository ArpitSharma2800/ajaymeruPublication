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
                <div className="card imgcard border-dark mt-4 mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4 p-2">
                            <img src={logo} className="card-img" alt="loading" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h1 className="card-title" >अजयमेरु पब्लिकेशन</h1>
                                <p className="card-text"><b>अजयमेरु पब्लिकेशन राजस्थान का एक उभरता हुआ प्रकाशन समूह है।
                                पब्लिकेशन द्वारा राज्य के विद्यालय तथा विश्वविद्यालय स्तर की परीक्षाओं के लिए वन वीक सीरीज, पास बुक्स तथा सॉल्वड पेपर्स का प्रकाशन किया जा रहा है|</b></p>
                                <div class="social d-flex justify-content-center"> <a href="tel:+919166392307" className="TW"><i class="fas fa-phone-alt"></i></a><a href="tel:+919166392307" className="TW text-dark"><i class="fab fa-whatsapp"></i> +91 91663 92307</a> </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer bg-transparent border-dark  "><div class="social d-flex justify-content-center"> <a href="#" class="btn"><i class="fab fa-telegram-plane"></i></a> <a href="https://m.facebook.com/profile.php?id=107497180970204&ref=content_filter" class="btn"><i class="fab fa-facebook-f"></i></a> <a href="https://www.youtube.com/channel/UCFsglH86ITJkDRz0l0Rd0tA" class="btn"><i class="fab fa-youtube"></i></a>
                        <a href="https://twitter.com/ajaymerupublic" class="btn"><i class="fab fa-twitter"></i></a> <a href="mailto:ajaymerupublication@gmail.com" class="btn"><i class="fas fa-mail-bulk"></i></a>
                        <a href="https://www.instagram.com/ajaymerupublication/?hl=en" class="btn"><i class="fab fa-instagram"></i></a></div></div>
                </div>
                <div class="card qouteCard border-dark">
                    {/* <div class="card-header">
                        Quote
                     </div> */}
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p>पब्लिकेशन द्वारा राज्य में आयोजित होने वाली विभिन्न प्रतियोगी परीक्षाओं के लिए भी मानक पुस्तको के प्रकाशन की जिम्मेदारी ली गयी है, ताकि राज्य के अभ्यर्थी इन पुस्तकों के द्वारा अपनी तैयारी का स्तर सुदृढ कर प्रतियोगी परीक्षा में अपनी सफलता सुनिश्चित करवा सके|</p>
                            <footer class="blockquote-footer"><cite title="Source Title">अजयमेरु पब्लिकेशन</cite></footer>
                        </blockquote>
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
