import "./Card.scss";
import React from "react";
import PlanCard from "../widgets/card/PlanCard";

const Card = ({mainText, price, TryNow, save, textPrice, imgCheck, imgFalse, adds}) => {
    return (
        <div className="card-container">
            <PlanCard
                mainText={mainText}
                price={price}
                TryNow={TryNow}
                save={save}
                textPrice={textPrice}
                imgCheck={imgCheck}
                imgFalse={imgFalse}
                adds={adds}
            />
        </div>
    );
}

export default Card;