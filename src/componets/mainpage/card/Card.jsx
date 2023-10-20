import "./Card.scss"

const Preference = ({ image, alt, text }) => (
    <div className="links_check">
        <img src={image} alt={alt} />
        <p>{text}</p>
    </div>
)
const Price = ({ price, save, textPrice, adds}) => (
 <>
        <div className="price-addit">
            <p className='price-number'>{price}</p>
            <p className='price-percent'>{save}</p>
        </div>
        <div className="price-main">
            <span className='text-1'>$<span className='text-2'>{textPrice}</span>{adds}</span>
        </div>
 </>
)

function Card(props) {
        return (
            <div className="card-container">
                <div className="card1">
                    <h2>{props.mainText}</h2>
                    <div className='card1-container'>
                        <div className="plans-container">
                            <div className="price">
                                <Price price={props.price} save={props.save} textPrice={props.textPrice} adds={props.adds}/>
                            </div>
                                {props.mainText === "Personal*" ?
                                    <div className="third-card-text">*Personal plan created for big companies and
                                        special clients,
                                        who want different conditions or bigger amounts of ads </div>
                                    :
                                    <div className="preferences">
                                        <Preference image={props.imgCheck} alt="x" text="Without queues"/>
                                        <Preference image={props.imgCheck} alt="x" text="Detailed statistics"/>
                                        <Preference image={props.imgCheck} alt="x" text="Guarantee"/>
                                        {props.mainText === "Professional" ?
                                            <div><Preference image={props.imgCheck} alt="x" text="Customization"/>
                                                <Preference image={props.imgCheck} alt="x" text="Clients-filters"/>
                                            </div>
                                            :
                                            <div><Preference image={props.imgFalse} alt="x" text="Customization"/>
                                                <Preference image={props.imgFalse} alt="x" text="Clients-filters"/>
                                            </div>
                                        }
                                    </div>
                                }
                            <div className="third-btn-try">
                                <a>{props.TryNow}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    export default Card;