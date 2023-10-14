import React from 'react';
import "./Main..scss";

function Main() {
    return (
        <div className="main">
            <div className="main_first">
                <div className="hello_left">
                    <h1 className="daltter_main"><span className="dallter_text">daltter - </span><br/> is the future <br/> of marketing.</h1>
                    <p className="email_main">Email advertising has never been so <br/> effective and affordable for everyone!</p>
                    <div className="btn_first">
                        <button className="btn_try">
                            Try it now
                        </button>
                        <button className="btn_why">
                            Why us?
                        </button>
                    </div>
                </div>
                <div className="hello_right">
                    <div>
                        <img src="/img/Hello-right.svg" alt=""/>
                    </div>
                </div>
            </div>
            <div className="main_second">
                <div className="second_left">
                    <img src="/img/Second-left.svg" alt=""/>
                </div>
                <div className="second_right">
                    <h1 className="second_main">Our service is fully <br/> automated</h1>
                    <p className="second_text">All you need is just a few clicks - and your clients <br/> will be in your hands. Forget about tens different <br/> services for one ad.</p>
                    <button className="second_btn">
                        <h2 className="second_try_button"> Try it now</h2>
                    </button>
                </div>
            </div>
            <div className="main-third">
                <h1>We have several different <br/> plans to suit all customers:</h1>
                <div className="card-container">
                    <div className="card1">
                        <h2>Standart</h2>
                        <div className='card1-container'>
                            <div className="plans-container">
                                <div className="price">
                                    <div className="price-addit">
                                        <p className='price-number'>$20.00</p>
                                        <p className='price-percent'>SAVE 75%</p>
                                    </div>
                                    <div className="price-main">
                                        <span className='text-1'>$<span className='text-2'>5.00</span>/100 ads</span>
                                    </div>
                                </div>
                                <div className="preferences">
                                    <div className='links_check'>
                                        <img src="/img/check.png" alt="v" />
                                        <p>Without queues</p>
                                    </div>
                                    <div className='links_check'>
                                        <img src="/img/check.png" alt="v" />
                                        <p>Detailed statistics</p>
                                    </div>
                                    <div className='links_check'>
                                        <img src="/img/check.png" alt="v" />
                                        <p>Guarantee</p>
                                    </div>
                                    <div className='links_check'>
                                        <img src="/img/plans-false.svg" alt="x" />
                                        <p>Customization</p>
                                    </div>
                                    <div className='links_check'>
                                        <img src="/img/plans-false.svg" alt="x" />
                                        <p>Clients-filters</p>
                                    </div>
                                </div>
                                <div className="third-btn-try">
                                    <a href="#">Try it now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card1">
                        <h2>Professional</h2>
                        <div className='card1-container'>
                            <div className="plans-container">
                                <div className="price">
                                    <div className="price-addit">
                                        <p className='price-number'>$45.00</p>
                                        <p className='price-percent'>SAVE 67%</p>
                                    </div>
                                    <div className="price-main">
                                        <span className='text-1'>$<span className='text-2'>15.00</span>/100 ads</span>
                                    </div>
                                </div>
                                <div className="preferences">
                                    <div className='links_check'>
                                        <img src="/img/check.png" alt="v" />
                                        <p>Without queues</p>
                                    </div>
                                    <div className='links_check'>
                                        <img src="/img/check.png" alt="v" />
                                        <p>Detailed statistics</p>
                                    </div>
                                    <div className='links_check'>
                                        <img src="/img/check.png" alt="v" />
                                        <p>Guarantee</p>
                                    </div>
                                    <div className='links_check'>
                                        <img src="/img/check.png" alt="v" />
                                        <p>Customization</p>
                                    </div>
                                    <div className='links_check'>
                                        <img src="/img/check.png" alt="v" />
                                        <p>Clients-filters</p>
                                    </div>
                                </div>
                                <div className="third-btn-try">
                                    <a href="#">Try it now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card1">
                        <h2>Personal*</h2>
                        <div className='card1-container'>
                            <div className="plans-container">
                                <div className="price">
                                    <div className="price-addit">
                                        <p className='price-number'>$??.??</p>
                                        <p className='price-percent'>SAVE ??%</p>
                                    </div>
                                    <div className="price-main">
                                        <span className='text-1'>$<span className='text-2'>???</span>/???</span>
                                    </div>
                                </div>
                                <div className="preferences">
                                    <div className='third-card-text'>
                                        *Personal plan created for big companies and special clients,
                                        who want different conditions or bigger amounts of ads
                                    </div>
                                </div>
                                <div className="third-btn-contact">
                                    <a href="#">Contact us</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main_fourth">
                <h1>Not sure if our service is right for you?</h1>
                <div className="leave_email">
                    <p>Leave us your email and we <br/> will write to you:</p>
                    <div className="email_input">
                        <input type="text" className="email_address" placeholder='Email Address'/>
                        <div>
                            <img src="/img/send_btn.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;