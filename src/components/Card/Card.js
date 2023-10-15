import "./Card.scss"


function Card(props) {
        return (
            <div className="card-container">
                <div className="card1">
                    <h2>{props.mainText}</h2>
                    <div className='card1-container'>
                        <div className="plans-container">
                            <div className="price">
                                <div className="price-addit">
                                    <p className='price-number'>{props.price}</p>
                                    <p className='price-percent'>{props.save}</p>
                                </div>
                                <div className="price-main">
                                    <span className='text-1'>$<span className='text-2'>{props.textPrice}</span>/100 ads</span>
                                </div>
                            </div>
                            <div className="preferences">
                                <div className='links_check'>
                                    <img src="/img/check.png" alt="v" />
                                    <p>Without queues</p>
                                </div>
                                <div className='links_check'>
                                    <img src="/img/check.png" alt="v" />
                                    <p>Detailed statistics</p>
                                </div>
                                <div className='links_check'>
                                    <img src="/img/check.png" alt="v" />
                                    <p>Guarantee</p>
                                </div>
                                <div className='links_check'>
                                    <img src={props.imgCheck} alt="x" />
                                    <p>Customization</p>
                                </div>
                                <div className='links_check'>
                                    <img src={props.imgCheck} alt="x" />
                                    <p>Clients-filters</p>
                                </div>
                            </div>
                            <div className="third-btn-try">
                                <a href="#">Try it now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    export default Card;