import React from "react";
import Card from "../../card/Card";

const MainThird= ({ plans }) => {

    return (
        <div className="main-third">
            <h1>We have several different plans to suit all customers:</h1>
            <div className="card_container">
                {plans.map((plan, index) => (
                    <Card
                        key={index}
                        mainText={plan.mainText}
                        price={plan.price}
                        TryNow={plan.TryNow}
                        save={plan.save}
                        textPrice={plan.textPrice}
                        imgCheck={plan.imgCheck}
                        imgFalse={plan.imgFalse}
                        adds={plan.adds}
                    />
                ))}
            </div>
        </div>
    );
}

export default MainThird;