import {Link} from "react-router-dom";
import React from "react";

const FormMainPasswordRecovery = ({imageLogo, EmailAddress, SendRecovery, GoBack}) => {
    return (
        <div className="wrapper_login_recovery">
            <div className="object_insides">
                <img src={imageLogo} width={96} height={90} alt="Logo" />
                <div className="inputsWrapper">
                    <input className="EmailInput" type="email" placeholder={EmailAddress} />
                    <button>
                        <Link to="/NewPassword">

                            <div className="input_text">{SendRecovery}</div> </Link>
                    </button>
                    <Link to="/login">
                        <div className="link_go_back">{GoBack} </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FormMainPasswordRecovery;