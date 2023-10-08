function Header() {
    return (
        <header>
            <div className="d-flex justify-center  align-center">

            <div className="navbar-block  d-flex align-center">
                <img className=" logo pl-12px" width={50} height={50} src="/img/logo.png" />
                 <h1 className="dallter-text">daltter</h1>
            </div>
            <ul className="d-flex">
                <li className=" d-flex span-text p-30">
                    <nav className="p-30">Features</nav>
                    <nav className="p-30">Pricing</nav>
                    <nav className="p-30">Contact Us</nav>
                </li>
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