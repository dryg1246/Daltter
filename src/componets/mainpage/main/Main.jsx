import React from 'react';
import "./Main..scss";
import "../../../adaptive/mainpage/Adaptive.scss"
import MainSecond from "../widgets/main/MainSecond";
import MainFirst from "../widgets/main/MainFirst";
import MainThird from "../widgets/main/MainThird";
import MainFourth from "../widgets/main/MainFourth";

function Main() {
    return (
        <div className="main">
            <MainFirst
                title="daltter -"
                subtitle="Email advertising has never been so effective and affordable for everyone!"
                buttonText="Try it now"
                whyUsText="Why us?"
                imageUrl="/img/Hello-right.svg"
            />
            <MainSecond
                imageSrc="/img/Second-left.svg"
                title="service"
                subtitle="All you need is just a few clicks - and your clients will be in your hands. Forget about tens different services for one ad."
                buttonText="Try it now"
            />
            <MainThird
                plans={[
                    {
                        mainText: "Standart",
                        price: "$20.00",
                        TryNow: "Try it now",
                        save: "SAVE 75%",
                        textPrice: "5.00",
                        imgCheck: "/img/check.png",
                        imgFalse: "/img/plans-false.svg",
                        adds: "/100 ads",
                    },
                    {
                        mainText: "Professional",
                        price: "$45.00",
                        TryNow: "Try it now",
                        save: "SAVE 67%",
                        textPrice: "15.00",
                        imgCheck: "/img/check.png",
                        imgFalse: "/img/plans-false.svg",
                        adds: "/100 ads",
                    },
                    {
                        mainText: "Personal*",
                        price: "$??.??",
                        TryNow: "Try it now",
                        save: "SAVE ??%",
                        textPrice: "???",
                        adds: "/100 ads",
                    },
                ]}
            />
            <MainFourth
                title="Not sure if our service is right for you?"
                placeholder="Email Address"
            />
        </div>
    );
}

export default Main;