function homepage (){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
  <div className="container">
    <a className="navbar-brand texts" href="#"><img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/logo_08e6965627/logo_08e6965627.svg" alt="Piggyvest logo" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown d-lg-block d-md-none d-sm-none">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Save</a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#save"><img src="./images/piggy.png" alt="" className="w-25 mx-1"/>Piggy Bank</a></li>
                    <li><a className="dropdown-item" href="#save"><img src="./images/safelock.png" alt="" className="w-25 mx-1"/>Safelock</a></li>
                    <li><a className="dropdown-item" href="#save"><img src="./images/target.png" alt="" className="w-25 mx-1"/>Target Savings</a></li>
                    <li><a className="dropdown-item" href="#save"><img src="./images/flex.png" alt="" className="w-25 mx-1" />Flex Savings</a></li>
                </ul>
            </li>
            
            <li className="nav-item"><a className="nav-link d-lg-none save" aria-current="page" href="#save">Save</a></li>
            <li className="nav-item"><a className="nav-link" aria-current="page" href="#">Invest</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Stories</a></li>
            <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Blogs</a></li>
        </ul>

        <div className="d-flex flex-md-column flex-lg-row">
            <button className="btn btn2 btns rounded-4" type="submit">Sign In</button>
            <button class="btn btn1 btns rounded-4" type="submit">Create a free account</button>
        </div>
    </div>
  </div>
</nav>

            {/* hero box */}
    <section className="py-5">  
        <div className="container">
            <div className="row">
                <div className=" column-one col-lg">
                <div className="text-dark py-5">
                    <h2 className="mt-5 display-3 fw-bold">The Better Way To Save & Invest.</h2>
                    <span className="text-none">PiggyVest helps over 3 million customers achieve their financial goals by helping them save and invest with ease.</span>
                    <div>
                    <a className="btn btn-dark btn-lg mt-4 text-white">Create free account</a>
                    </div>
                    <div className="py-5">
                        <button className="btn btn3 btns rounded-4" type="submit">
                            <img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/apple_icon_32ccc572ff/apple_icon_32ccc572ff.svg" className="width: 25px; margin: 3px" alt=""/>
                            Get on iphone</button>
                            <button className="btn btn3 btns rounded-4" type="submit">
                            <img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/google_icon_9867fc9be6/google_icon_9867fc9be6.svg" className="width: 25px; margin: 3px" alt=""/>
                            Get on Android</button>
                    </div>
                </div>
                </div> 

                <div className="col-sm-12 col-md-12 col-lg-6">
                    <div><img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/header_Img_a2a9220bd6/header_Img_a2a9220bd6.png" alt="" className="headerImg" /></div>
                    <div><img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/rect_ccb22b6667/rect_ccb22b6667.png" alt="" class="rect" /></div>
                    <div><img src="./images/card1.png" alt="" width="220px" className="card1" /></div>
                    <div><img src="./images/card2.png" alt="" width="220px" className="card2" /></div>
                </div>
            </div>
        </div>
    </section>


            {/* security section */}
            <div>
                <div className="container">
                <div class="row g-5">
      <div class="col-lg-4 col-sm-12 text-center d-md-2 d-sm-2 d-lg-2">
        <img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/security_369a26d96e/security_369a26d96e.png" alt="" width="100px" />
      </div>
      <div class="security-content col-lg-8 col-sm-12">
        <h4>Your security is our priority</h4>
        PiggyVest uses the highest level of Internet Security and it is secured
        by 256 bits SSL security <br/> encryption to ensure that your information is
        comepletely protected from fraud
        <div class="mt-4">
          <a href="#">Learn More <i class="fa-solid fa-angle-right"></i></a>
        </div>
      </div>
    </div>
                </div>
            </div>


            {/* save section */}
            <div>
                <div className="container">
                <div className=" save-section row" id="save">
                <div className="col-lg-4 col-sm-12 col-md-12 mb-5">
                    <h3>4 ways to build your savings</h3>
                        Earn 5%-15% when you save with any of these PiggyVest plans.
                        <button class="btn btn1 btns mt-5 rounded-4 d-lg-block d-md-none d-sm-none" type="submit">Start Saving</button>
                </div>
 
                <div className="col-lg-8 col-sm-12 col-md-12 row">
                    <div className=" section-style col-md-5 col-sm-12 mx-auto box home hover">
                        <a href="/flex-naira"><img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/piggy_df88262015/piggy_df88262015.png" alt="" className="icon my-3" width="50" height="50"/></a>
                        <h5 className="automated-savings mb-3">
                            <b>Automated Savings</b>
                        </h5>
                        <p className="text">
                        Build a dedicated savings faster on your terms automatically or
                        manually.
                        </p>
                        <div className="sub-title mt-4">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16.4438" cy="16.7622" r="16.0254" fill="#E0EFFF"></circle>
                            <path d="M18.8477 11.1533L17.7179 12.2831L21.3877 15.9609L8.43118 15.9609L8.43118 17.5635L21.3877 17.5635L17.7099 21.2413L18.8477 22.3711L24.4565 16.7622L18.8477 11.1533Z" fill="#003399"></path>
                        </svg>
                        Piggybank
                        </div>
                    </div>

                    <div className=" section-style col-md-5 col-sm-12 mx-auto box home hover">
                        <a href="/flex-naira"><img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/safelock_4e737ba7d3/safelock_4e737ba7d3.png" alt="" className="icon-my-3" width="50" height="50" /></a>
                        <h5 className="fixed-savings mb-3">
                            <b>Fixed Savings</b>
                        </h5>
                        <p className="text">
                        Lock money away for a fixed duration with no access to it until
                        maturity. Its like having a custom fixed deposit.
                        </p>
                        <div className="sub-title mt-4">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16.4438" cy="16.7622" r="16.0254" fill="#E0EFFF"></circle>
                            <path d="M18.8477 11.1533L17.7179 12.2831L21.3877 15.9609L8.43118 15.9609L8.43118 17.5635L21.3877 17.5635L17.7099 21.2413L18.8477 22.3711L24.4565 16.7622L18.8477 11.1533Z" fill="#003399"></path>
                        </svg>
                        Safelock
                        </div>
                    </div>

                    <div className=" section-style col-md-5 col-sm-12 mx-auto box home hover">
                        <a href="/flex-naira"><img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/target_6c049f3410/target_6c049f3410.png" alt="" className="icon-my-3" width="50" height="50" /></a>
                        <h5 className="fixed-savings mb-3">
                            <b>Goal Oriented Savings</b>
                        </h5>
                        <p className="text">
                        Reach all your savings goals faster. Save towards multiple goals
                        on your own or with a group.
                        </p>
                        <div className="sub-title mt-4">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16.4438" cy="16.7622" r="16.0254" fill="#E4FFF0"></circle>
                            <path d="M18.8477 11.1533L17.7179 12.2831L21.3877 15.9609L8.43118 15.9609L8.43118 17.5635L21.3877 17.5635L17.7099 21.2413L18.8477 22.3711L24.4565 16.7622L18.8477 11.1533Z" fill="#069B40"></path>
                        </svg>
                        Target Savings
                        </div>
                    </div>

                    <div className=" section-style col-md-5 col-sm-12 mx-auto box home hover">
                        <a href="/flex-naira"><img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/flex_d090f8bce2/flex_d090f8bce2.png" alt="" className="icon-my-3" width="50" height="50" /></a>
                        <h5 className="fixed-savings mb-3">
                            <b>Flexible Savings</b>
                        </h5>
                        <p className="text">
                        Save, transfer, withdraw, manage and organise your money for free
                        at any time.
                        </p>
                        <div className="sub-title mt-4">
                        <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16.4438" cy="16.7622" r="16.0254" fill="#FDE7F5"></circle>
                            <path d="M18.8477 11.1533L17.7179 12.2831L21.3877 15.9609L8.43118 15.9609L8.43118 17.5635L21.3877 17.5635L17.7099 21.2413L18.8477 22.3711L24.4565 16.7622L18.8477 11.1533Z" fill="#E5288E"></path>
                        </svg>
                        Flex Naira
                        </div>
                    </div>
                </div>    
            </div>
                </div>
            </div>
            

            {/* investment section */}
            <div>
                <div className="container">
                <div className="row">
                <div className="col-lg-5 col-sm-12 col-md-12">
                    <img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/invest_c3fcc60df0/invest_c3fcc60df0.png" width="256px" alt="" />
                </div>
                <div className="col-lg-7 col-sm-12 col-md-12">
                    <div className="investment-content">
                        <p className="tag"><b>Up to 25% Returns</b></p>
                    </div>
                    <h2 className="mt-3">Access Investment <br /> Opportunities</h2>
                    Invest securely and confidently on the go. Grow your <br /> money confidently
                    by investing in pre-vetted investment opportunities
                    <a href="#" class="investtext mt-5">Learn more about investing<i className="fa-solid fa-angle-right mx-2"></i></a>
                </div>
            </div>
                </div>
            </div>
        

            {/* testimonials */}
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg text-dark">
                        <div className="col-12">
                        <div className="p-3 rounded-3 bg-light mb-3 w-75 mx-auto">
                            <h5>Teni Okesanya</h5>
                            <small>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Voluptate eaque magnam nihil. Quidem ex consequuntur quisquam.
                            Sequi corporis tempora ad?
                            </small>
                        </div>
                        <div className="p-3 rounded-3 bg-light mb-3 w-75 mx-auto">
                            <h5>Teni Okesanya</h5>
                            <small>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Voluptate eaque magnam nihil. Quidem ex consequuntur quisquam.
                            Sequi corporis tempora ad?
                            </small>
                        </div>
                    </div>
                        </div>

                        <div className="col-lg text-dark">
                        <div className="col-12">
                        <h4>3 Million + customers</h4>
                        <p>
                        Since launching in 2016, over 3,000,000 people have used <br /> PiggyVest to
                        manage their money better, avoid over-spending <br /> and be more
                        accountable.
                        </p>
                        <button class="btn btn1 btns my-5 rounded-4 d-lg-block d-md-none d-sm-none" type="submit">Create a free account</button>
                        <div>
                        <button className="btn btn3 btns rounded-4" type="submit">
                            <img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/apple_icon_32ccc572ff/apple_icon_32ccc572ff.svg" className="width: 25px; margin: 3px" alt=""/>
                            Get on iphone</button>
                            <button className="btn btn3 btns rounded-4" type="submit">
                            <img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/google_icon_9867fc9be6/google_icon_9867fc9be6.svg" className="width: 25px; margin: 3px" alt=""/>
                            Get on Android</button>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* as featured in */}
            <div>
                <div className="row bg-light py-5 mt-5">
                    <div className="col-lg-4 mb-5">
                        <h4 className="featured-text">As featured in</h4>
                    </div>
                    <div className="col-lg-8 col-md-12 row">
                        <div className="col-md-4 mx-auto mb-3">
                            <a href="#"><img src="https://www.piggyvest.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpiggyvestwebsite%2Fpiggywebsite2020%2Fbrand3_972c03908c%2Fbrand3_972c03908c.png&w=256&q=75" alt="" className="featured-pic" /></a>
                        </div>
                        <div className="col-md-4 mx-auto mb-3">
                            <a href="#"><img src="https://www.piggyvest.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpiggyvestwebsite%2Fpiggywebsite2020%2Fbrand2_3fcc7de2d6%2Fbrand2_3fcc7de2d6.png&w=256&q=75" alt="" className="featured-pic" /></a>
                        </div>
                        <div className="col-md-4 mx-auto mb-3">
                            <a href="#"><img src="https://www.piggyvest.com/_next/image?url=https%3A%2F%2Fstorage.googleapis.com%2Fpiggyvestwebsite%2Fpiggywebsite2020%2Fbrand1_b2a9805fff%2Fbrand1_b2a9805fff.png&w=256&q=75" alt="" className="featured-pic" /></a>
                        </div>
                    </div>
                </div>
            </div>


            {/* footer */}
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg text dark">
                            <img src="https://storage.googleapis.com/piggyvestwebsite/piggywebsite2020/logo_40ddb359c1/logo_40ddb359c1.svg" alt="" />
                        </div>

                        <div className="col-lg text dark">
                            <nav className="nav d-block">
                                <ul>
                                    <span className="nav-links d-block mb-3"><b>Products</b></span>
                                    <a href="#" class="nav-links d-block">Piggy Bank</a>
                                    <a href="#" class="nav-links d-block">Invest</a>
                                    <a href="#" class="nav-links d-block">Safelock</a>
                                    <a href="#" class="nav-links d-block">Target Savings</a>
                                    <a href="#" class="nav-links d-block">Flex Naira</a>
                                </ul>
                            </nav>
                        </div>

                        <div className="col-lg text dark">
                        <nav className="nav d-block">
                                <ul>
                                    <span className="nav-links d-block mb-3"><b>Company</b></span>
                                    <a href="#" class="nav-links d-block">About</a>
                                    <a href="#" class="nav-links d-block">FAQs</a>
                                    <a href="#" class="nav-links d-block">Blog</a>
                                </ul>
                            </nav>
                        </div>

                        <div className="col-lg text dark">
                        <nav className="nav d-block">
                                <ul>
                                    <span className="nav-links d-block mb-3"><b>Legal</b></span>
                                    <a href="#" class="nav-links d-block">Terms</a>
                                    <a href="#" class="nav-links d-block">Privacy</a>
                                    <a href="#" class="nav-links d-block">Security</a>
                                </ul>
                            </nav>
                        </div>

                        <div className="col-lg text dark">
                            <img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" className="social-media-logo" alt="" />
                            <img src="https://cdn-icons-png.flaticon.com/512/81/81609.png" className="social-media-logo" alt="" />
                            <img src="https://cdn1.vectorstock.com/i/1000x1000/80/00/instagram-logo-icon-vector-29228000.jpg" className="social-media-logo" alt="" />
                        <span className="d-block mt-3 mb-3">
                        <a href="https://www.google.ng/maps/place/PiggyVest/@6.4319633,3.4394938,19z/data=!4m5!3m4!1s0x103b8b238b3991d3:0xbd120349b96ea1f8!8m2!3d6.4315742!4d3.4402829" className="nav-links">
                            Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos, Nigeria.</a>
                        </span>
                        <span class="d-block mb-3"><a href="mailto:contact@piggyvest.com"> contact@piggyvest.com </a></span>
                        <span class="d-block mb-3"><a href="tel:+234 700 933 933 933"> +234 700 933 933 933 </a></span>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                        <div className="col-12 w-75 text-center mx-auto d-lg d-md d-sm line-height: normal">
                        Piggyvest (formerly piggybank.ng) is the leading online savings &
                        investing platform in Nigeria. For over 6 years, our customers have
                        saved and invested billions of Naira that they would normally be
                        tempted to spend
                        </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="row">
                        <div className=" last-footer-text col-12 text-center text-centers line-height: normal;">
                        2016 - 2022 PiggyTech Global Limited - RC 1405222
                        </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
export default homepage;