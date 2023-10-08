function Header() {
    return (
        <header>

            <div className="header-container">

            <div className="navbar-block  d-flex align-center">
                <img className=" logo pl-12px" width={50} height={50} src="/img/logo.png" />
                 <h1 className="dallter-text">daltter</h1>
            </div>
            <ul className="d-flex">
                    <a href="/" className="d-flex span-text p-30 text-decoration-none">
                    <li className="p-30">Features</li>
                    <li className="p-30">Pricing</li>
                    <li className="p-30">Contact Us</li>
                    </a>
                <div className="login1">
                <li className="but-on">
                    <button className="login" >
                          <div className="login-text">
                                Login
                          </div>
                    </button>
                    <button className="sing-up ">
                        <div className="sing-up-text">
                                Sign Up
                        </div>
                    </button>
                </li>
                </div>

                <div className="Rectangle">

                </div>
            </ul>
        </div>
        </header>
    );
}

export default Header