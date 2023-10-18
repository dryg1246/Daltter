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
                <Card
                    mainText="Personal*"
                    price="$45.00"
                    save="SAVE 67%"
                    textPrice="15.00"
                />
            </div>
        </div>
    )
}

export default MainSecond;