import React from 'react';

function Main() {
    return (
       <div className="flex">

         <div className="">


             <h1 className="main-text-drawer">
                 <span className="blue-daltter">daltter</span>
                 <br /> - is the future <br /> of marketing.
             </h1>
             <p>Email advertising has never been so <br /> effective and affordable for everyone!</p>

             <button className="btn-try">
                 Try it now
             </button>
             <button className="btn-why">
                 Why us?
             </button>

           <div className="">
               <img className="p-50px" src="/img/Hello-right.svg" alt="" />
           </div>

         </div>

           <div className="">


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
    );
}

export default Main;