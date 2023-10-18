import React from "react";
import Card from "../../card/Card";

const MainSecond = (props) => {
    return (
        <div className="main-third">
            <h1>We have several different <br/> plans to suit all customers:</h1>
            <div className="card_container">
                <Card
                    mainText="Standart"
                    price="$20.00"
                    save="SAVE 75%"
                    textPrice="5.00"
                    TryNow="Try it now"
                    imgCheck="/img/check.png"
                    imgFalse="/img/plans-false.svg"
                />
                <Card
                    mainText="Professional"
                    price="$45.00"
                    save="SAVE 67%"
                    textPrice="15.00"
                    imgCheck="/img/check.png"
                    imgFalse="/img/plans-false.svg"
                />
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
                                <a href="src/features/main/componets/mainpage/main/Main#Main.jsx">Contact us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainSecond;