
const Preference = ({ image, alt, text }) => (
    <div className="links_check">
        <img src={image} alt={alt} />
        <p>{text}</p>
    </div>
);

const Price = ({ price, save, textPrice, adds }) => (
    <>
        <div className="price-addit">
            <p className="price-number">{price}</p>
            <p className="price-percent">{save}</p>
        </div>
        <div className="price-main">
            <span className="text-1">
                $<span className="text-2">{textPrice}</span>
                {adds}
            </span>
        </div>
    </>
);

const PlanCard = ({ mainText, imgCheck, imgFalse, adds, TryNow, price, save, textPrice }) => (
    <div className="card1">
        <h2>{mainText}</h2>
        <div className="card1-container">
            <div className="plans-container">
                <div className="price">
                    <Price price={price} save={save} textPrice={textPrice} adds={adds} />
                </div>
                {mainText === "Personal*" ? (
                    <div className="third-card-text">
                        *Personal plan created for big companies and special clients, who want different conditions or bigger amounts of ads
                    </div>
                ) : (
                    <div className="preferences">
                        <Preference image={imgCheck} alt="x" text="Without queues" />
                        <Preference image={imgCheck} alt="x" text="Detailed statistics" />
                        <Preference image={imgCheck} alt="x" text="Guarantee" />
                        {mainText === "Professional" ? (
                            <>
                                <Preference image={imgCheck} alt="x" text="Customization" />
                                <Preference image={imgCheck} alt="x" text="Clients-filters" />
                            </>
                        ) : (
                            <div className="links_x">
                                <Preference image={imgFalse} alt="x" text="Customization" />
                                <Preference image={imgFalse} alt="x" text="Clients-filters" />
                            </div>
                        )}
                    </div>
                )}
                <div className="third-btn-try">
                    <a>{TryNow}</a>
                </div>
            </div>
        </div>
    </div>
);

export default PlanCard;