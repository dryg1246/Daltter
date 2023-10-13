import React from 'react';
import styles from "./Main.module.scss";

function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.main_first}>
                <div className={styles.hello_left}>
                    <h1 className={styles.daltter_main}><span className={styles.dallter_text}>daltter - </span><br/> is
                        the future <br/> of marketing.</h1>
                    <p className={styles.email_main}>Email advertising has never been so <br/> effective and affordable
                        for everyone!</p>
                    <div className={styles.btn_first}>
                        <button className={styles.btn_try}>
                            Try it now
                        </button>
                        <button className={styles.btn_why}>
                            Why us?
                        </button>
                    </div>
                </div>
                <div className={styles.hello_right}>
                    <div>
                        <img src="/img/Hello-right.svg" alt=""/>
                    </div>
                </div>
            </div>


            <div className={styles.main_second}>
                <div className={styles.second_left}>
                    <img src="/img/Second-left.svg" alt=""/>
                </div>
                <div className={styles.second_right}>
                    <h1 className={styles.second_main}>Our service is fully <br/> automated</h1>
                    <p className={styles.second_text}>All you need is just few clicks - and your clients <br/> will be
                        in your hands.
                        Forget about tens different <br/> services for one ad.</p>
                    <button className={styles.second_btn}>
                        <h2 className={styles.second_try_button}> Try it now</h2>
                    </button>
                </div>
            </div>
            <div className={styles.main_third}>
                <h1>We have several different <br/> plans to suit all customers:</h1>
                <div className={styles.card_container}>
                    <div className={styles.card1}>
                        <h2>Standart</h2>
                        <div className={styles.card1_container}>
                            <div className={styles.plans_container}>
                                <div className={styles.price}>
                                    <div className={styles.price_addit}>
                                        <p className={styles.price_number}>$20.00</p>
                                        <p className={styles.price_rectangle}>SAVE 75%</p>
                                    </div>
                                    <div className={styles.price_main}>
                                        <span className={styles.text_small}>$<span className={styles.text_big}>5.00</span>/100 ads</span>
                                    </div>
                                </div>
                                <div className={styles.preferences}>
                                    <div className={styles.links_check}>
                                        <img src="/img/check.png"alt="" />
                                        <p>Without queues</p>
                                    </div>
                                    <div className={styles.links_check}>
                                        <img src="/img/check.png"alt="" />
                                        <p>Detailed statistics</p>
                                    </div>
                                    <div className={styles.links_check}>
                                        <img src="/img/check.png"alt="" />
                                        <p>Guarantee</p>
                                    </div>
                                    <div className={styles.links_check}>
                                        <img src="/img/plans-false.svg" alt="" className={styles.text_x}/>
                                        <p>Customization</p>
                                    </div>
                                    <div className={styles.links_check}>
                                        <img src="/img/plans-false.svg" alt="" className={styles.text_x}/>
                                        <p>Clients-filters</p>
                                    </div>
                                </div>
                                <button className={styles.btn_try_now}>
                                    <nav> Try it now</nav>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card_container}>
                        <div className={styles.card1}>
                            <h2>Standart</h2>
                            <div className={styles.card1_container}>
                                <div className={styles.plans_container}>
                                    <div className={styles.price}>
                                        <div className={styles.price_addit}>
                                            <p className={styles.price_number}>$45.00</p>
                                            <p className={styles.price_rectangle}>SAVE 67%</p>
                                        </div>
                                        <div className={styles.price_main}>
                                            <span className={styles.text_small}>$<span className={styles.text_big}>15.00</span>/100 ads</span>
                                        </div>
                                    </div>
                                    <div className={styles.preferences}>
                                        <div className={styles.links_check}>
                                            <img src="/img/check.png"alt="" />
                                            <p>Without queues</p>
                                        </div>
                                        <div className={styles.links_check}>
                                            <img src="/img/check.png"alt="" />
                                            <p>Detailed statistics</p>
                                        </div>
                                        <div className={styles.links_check}>
                                            <img src="/img/check.png"alt="" />
                                            <p>Guarantee</p>
                                        </div>
                                        <div className={styles.links_check}>
                                            <img  src="/img/check.png"/>
                                            <p>Customization</p>
                                        </div>
                                        <div className={styles.links_check}>
                                            <img src="/img/check.png" />
                                            <p>Clients-filters</p>
                                        </div>
                                    </div>
                                    <button className={styles.btn_try_now}>
                                        <nav> Try it now</nav>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card_container}>
                        <div className={styles.card1}>
                            <h2>Standart</h2>
                            <div className={styles.card1_container}>
                                <div className={styles.plans_container}>
                                    <div className={styles.price}>
                                        <div className={styles.price_addit}>
                                            <p className={styles.price_number}>$20.00</p>
                                            <p className={styles.price_rectangle}>SAVE 75%</p>
                                        </div>
                                        <div className={styles.price_main}>
                                            <span className={styles.text_small}>$<span className={styles.text_big}>5.00</span>/100 ads</span>
                                        </div>
                                    </div>
                                    <div className={styles.preferences}>
                                        <div className={styles.personal_text}>
                                            *Personal plan created for big companies and special clients,
                                            who want different conditions or bigger amounts of ads
                                        </div>
                                    </div>
                                    <button className={styles.third_btn_contact}>
                                        <nav> Contact us</nav>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;