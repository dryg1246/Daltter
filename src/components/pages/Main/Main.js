import React from 'react';
import styles from "./Main.module.scss";

function Main() {
    return (
        <div>
            <div className={styles.main}>
                <div className={styles.card1}>

                    <div className={styles.mainTextBody}>
                        <div className={styles.blueDater}>daltter -</div>
                        <div className={styles.textFuture}>
                             is the future of marketing
                        </div>
                    </div>
                    <p className={styles.paragraph}>Email advertising has never been so <br/> effective and affordable for everyone!</p>
<div className={styles.mainBtn}>
    <button className={styles.btnTry}>
        <h2>Try it now</h2>
    </button>
    <button className={styles.btnWhyUs}>
        <h2>Why us?</h2>
    </button>
</div>

                </div>
                <div className={styles.card2}>
                    <div>
                        <img className="p-50" src="/img/Hello-right.svg" alt=""/>
                    </div>
                </div>
            </div>

            <div className={styles.horizontal2}>
                <div className={styles.card2}>

                <div className={styles.secondLeft}>
                    <img src="/img/Second-left.svg" alt=""/>
                </div>
                <div className={styles.BtnPlusText}>
                        <h1 className={styles.mainTextDrawer}>
                        Our <span className={styles.blueDater}>service</span> is fully
                        <br/>automated
                    </h1>
                    <p className={styles.clicks}>All you need is just a few clicks - and your clients <br /> will be in your hands. Forget about tens of different <br />  services for one ad.</p>

                    <button className={styles.btnTryMore}>
                        <h2>Try it now</h2>
                    </button>
                </div>
                </div>
            </div>

            <h1 className={styles.mainTextIndex}>
                We have several different <br/> plans to suit all customers:
            </h1>


<div className={styles.mainContainer}>


            <div className={styles.Standart}>
                <h2 className={styles.textP}>Standard</h2>
                <div className={styles.container1}>
                    <div>
                    <div className={styles.card}>
                            <div className="d-flex">
    <p className={styles.discountStandart}>$45.00</p>
    <div className={styles.SaveMoney}>
        <p className={styles.SaveMoneyText}>SAVE 67%</p>
    </div>
</div>
                        <h3 className={styles.standartDolar}>$<h2>15.00</h2>/100 ads</h3>
                        <div className={styles.listChecked} >
                            <div className="d-flex ">
                                <div>
                                    <img className={styles.Check} src="/img/check.png" alt=""/>
                                </div>
                                <div>
                                    <span>Without queues</span>
                                </div>
                            </div>
                            <div  className="d-flex">
                                <div>
                                    <img className={styles.Check} src="/img/check.png" alt=""/>
                                </div>
                                <div>
                                    <span>Without queues</span>
                                </div>
                            </div>
                            <div  className="d-flex">
                                <div>
                                    <img  className={styles.Check} src="/img/check.png" alt=""/>
                                </div>
                                <div>
                                    <span>Without queues</span>
                                </div>
                            </div>
                            <div  className="d-flex">
                                <div>
                                    <img className={styles.Check} src="/img/check.png" alt=""/>
                                </div>
                                <div>
                                    <span>Without queues</span>
                                </div>
                            </div>
                            <div  className="d-flex">
                                <div>
                                    <img className={styles.Check} src="/img/check.png" alt=""/>
                                </div>
                                <div>
                                    <span>Without queues</span>
                                </div>
                            </div>
                        </div>
                        <button className={styles.btnTryNow}>
                            <p>Try it now</p>
                        </button>
                    </div>
                </div>
                </div>
            </div>


                    <div className={styles.Professional}>
                        <h2 className={styles.textP}>Professional</h2>
                        <div className={styles.container1}>
                        <div className={styles.card}>
                            <p className={styles.discountStandart}>$45.00</p>
                            <div className={styles.SaveMoney}>
                                <p className={styles.SaveMoneyText}>SAVE 67%</p>
                            </div>
                            <h3 className={styles.standartDolar}>$<h2>15.00</h2>/100 ads</h3>
                            <div className={styles.listChecked} >
                                <div className="d-flex">
                                    <div>
                                        <img className={styles.Check} src="/img/check.png" alt=""/>
                                    </div>
                                    <div>
                                        <span>Without queues</span>
                                    </div>
                                </div>
                                <div  className="d-flex">
                                    <div>
                                        <img className={styles.Check} src="/img/check.png" alt=""/>
                                    </div>
                                    <div>
                                        <span>Without queues</span>
                                    </div>
                                </div>
                                <div  className="d-flex">
                                    <div>
                                        <img  className={styles.Check} src="/img/check.png" alt=""/>
                                    </div>
                                    <div>
                                        <span>Without queues</span>
                                    </div>
                                </div>
                                <div  className="d-flex">
                                    <div>
                                        <img className={styles.Check} src="/img/check.png" alt=""/>
                                    </div>
                                    <div>
                                        <span>Without queues</span>
                                    </div>
                                </div>
                                <div  className="d-flex">
                                    <div>
                                        <img className={styles.Check} src="/img/check.png" alt=""/>
                                    </div>
                                    <div>
                                        <span>Without queues</span>
                                    </div>
                                </div>
                            </div>
                            <button className={styles.btnTryNow}>
                                <p>Try it now</p>
                            </button>
                        </div>
                    </div>

                    </div>



                <div >
                    <h2 className={styles.textP}>Personal*</h2>
                    <div className={styles.container1}>
                        <div className={styles.card}>
                            <p className={styles.discountStandart}>$45.00</p>
                            <div className={styles.SaveMoney}>
                                <p className={styles.SaveMoneyText}>SAVE 67%</p>
                            </div>
                            <h3>$???/???</h3>
                            <p className={styles.Personal}> *Personal plan created for big companies and special clients, who want different conditions or bigger amounts of ads</p>
                            <button className={styles.btnTryNow}>
                                <p>Contact Us</p>
                            </button>
                        </div>

                    </div>
                </div>
                </div>

            <div className={styles.email}>
                <h2 className={styles.textSure}>Not sure if our service is right for you?</h2>
                <div className={styles.EmailPlusText}>

                <h2 className={styles.emailLeave}> Leave us your email and we <br /> will write to you </h2>
                <input className={styles.inputEmails} type="text"/>
                        <button className={styles.btnBracket}>
                            <img src="/img/bracket.png" alt=""/>
                        </button>

            </div>
            </div>
        </div>
    );
}

export default Main;