import React from 'react';
import styles from "./Main.module.scss";

function Main() {
    return (
        <div>
            <div className={styles.horisontal1}>
                <div className={styles.card1}>
                    <div className={styles.mainTextDrawer}>
                        <div className={styles.blueDaltter}>daltter</div>
                        <div className={styles.textFuture}>
                            - is the future of marketing
                        </div>
                    </div>
                    <p className={styles.paragraph}>Email advertising has never been so <br/> effective and affordable for everyone!</p>

                    <button className={styles.btnTry}>
                        <h2>Try it now</h2>
                    </button>
                    <button className={styles.btnWhy}>
                        Why us?
                    </button>
                </div>
                <div className={styles.card2}>
                    <div>
                        <img className="p-50px" src="/img/Hello-right.svg" alt=""/>
                    </div>
                </div>
            </div>

            <div className={styles.horisontal2}>
                <div>
                    <img className={styles.secondLeft} src="/img/Second-left.svg" alt=""/>
                </div>
                <div className="future-main p-0 align-center">
                    <h1 className={styles.mainTextDrawer}>
                        Our <span className={styles.blueDaltter}>service</span>
                        <br/> is fully automated
                    </h1>
                    <p className={styles.clicks}>All you need is just a few clicks - and your clients <br /> will be in your hands. Forget about tens of different <br />  services for one ad.</p>

                    <button className={styles.btnTry}>
                        Learn more
                    </button>
                </div>
            </div>

            <h1 className="mainTextIndex">
                We have several different <br/> plans to suit all customers:
            </h1>

            <div className={styles.container}>
                <h2 className={styles.standard}>Standard</h2>
                <div className={styles.card}>
                    <p>$45.00</p>
                    <div>
                        <p>SAVE 67%</p>
                    </div>
                    <h3>$15.00/100 ads</h3>
                    <div>
                        <img src="/img/check.png" alt=""/>
                        <p>Without queues</p>
                    </div>
                    <div>
                        <img src="/img/check.png" alt=""/>
                        <p>Without queues</p>
                    </div>
                    <div>
                        <img src="/img/check.png" alt=""/>
                        <p>Detailed statistics</p>
                    </div>
                    <div>
                        <img src="/img/check.png" alt=""/>
                        <p>Guarantee</p>
                    </div>
                    <div>
                        <img src="/img/plans-false.svg" alt=""/>
                        <p>Customization</p>
                    </div>
                    <div>
                        <img src="/img/plans-false.svg" alt=""/>
                        <p>Clients-filters</p>
                    </div>
                    <button className="">
                        <p>Try it now</p>
                    </button>
                </div>

                <h2 className={styles.professional}>Professional</h2>
                <div className={styles.card}>
                    <p>$45.00</p>
                    <div>
                        <p>SAVE 67%</p>
                    </div>
                    <h3>$15.00/100 ads</h3>
                    <div>
                        <img src="/img/check.png" alt=""/>
                        <p>Without queues</p>
                    </div>
                    <div>
                        <img src="/img/check.png" alt=""/>
                        <p>Without queues</p>
                    </div>
                    <div>
                        <img src="/img/check.png" alt=""/>
                        <p>Detailed statistics</p>
                    </div>
                    <div>
                        <img src="/img/check.png" alt=""/>
                        <p>Guarantee</p>
                    </div>
                    <div>
                        <img src="/img/check.png" alt=""/>
                        <p>Customization</p>
                    </div>
                    <div>
                        <img src="/img/check.png" alt=""/>
                        <p>Clients-filters</p>
                    </div>
                    <button className="">
                        <p>Try it now</p>
                    </button>
                </div>

                <h2 className={styles.personal}>Personal*</h2>
                <div className={styles.card}>
                    <p>$??.??</p>
                    <div>
                        <p>SAVE ??%</p>
                    </div>
                    <h3>$???/???</h3>
                    <p>*Personal plan created for big companies and special clients, who want different conditions or bigger amounts of ads</p>
                    <button className="">
                        <p>Contact</p>
                    </button>
                </div>
            </div>

            <div className="d-flex justify-center mb-40">
                <h2 className={styles.textSure}>Not sure if our service is right for you?</h2>
                <h2> <br />Leave us your email and we will write to you </h2>
                <input className={styles.inputEmails} type="text"/>
                <button className={styles.btnBracket}>
                    <img src="/img/bracket.png" alt=""/>
                </button>
            </div>
        </div>
    );
}

export default Main;