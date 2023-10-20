import {Link} from "react-router-dom";
import React from "react";

const FormMainSuccessfulRecovery = ({imageLogo, InputText, GoBack}) => {
    return (
        <div className="wrapper_login_recovery">
            <div className="object_insides">
                <img src={imageLogo} width={96} height={90} alt="Logo"/>
                <div className="inputsWrapper">
                    <p>Your password was successfuly changed.</p>
                    <button>
                        <Link to="/Login">
                            <div className="input_text">{InputText}</div>
                        </Link>
                    </button>
                    <Link to="/">
                        <div className="link_go_back">{GoBack}</div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FormMainSuccessfulRecovery;