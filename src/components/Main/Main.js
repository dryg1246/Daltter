import React from 'react';
import styles from "./Main.module.scss"
function Main() {
    return (
        <>
       <div className={styles.wrapper}>

         <div className={styles.wrapper1}>


             <h1 className={styles.mainTextDrawer}>
                 <span className={styles.blueDaltter}>daltter</span>
                 <br /> - is the future <br /> of marketing.
             </h1>
             <p>Email advertising has never been so <br /> effective and affordable for everyone!</p>

             <button className={styles.btnTry}>
                 Try it now
             </button>
             <button className={styles.btnWhy}>
                 Why us?
             </button>

           <div className="">
               <img className="p-50px" src="/img/Hello-right.svg" alt="" />
           </div>

         </div>

           <div className={styles.wrapper2}>


               <div className="secondLeft ">
                   <img className="" src="/img/Second-left.svg" alt="" />
               </div>
               <div className="future-main p-0 align-center">
                   <h1 className="main-text-drawer">
                       Our <span className="blue-daltter">service</span>
                       <br /> is fully automated
                   </h1>
                   <p>Email advertising has never been so <br /> effective and affordable for everyone!</p>

                   <button className="btn-try">
                       Learn more
                   </button>
               </div>
           </div>

       </div>
            <h1 className="mainTextIndex">
                We have several different <br/> plans to suit all customers:
            </h1>

            <div className="d-flex">
                <div>

                </div>
            </div>
        </>
    );
}

export default Main;