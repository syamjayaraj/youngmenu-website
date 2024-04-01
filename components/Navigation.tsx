export default function Navigation() {
  return (
    <nav
      className="navbar navbar-expand-lg  navbar-white fixed-top navbar-custom sticky sticky-light"
      id="navbar"
    >
      <div className="container">
        <a className="navbar-brand logo text-uppercase" href="index-1.html">
          {/* <img
            src="images/logo-dark.png"
            className="logo-dark"
            alt=""
            height="20"
          /> */}
          <span className="fw-bold">YoungMenu</span>
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="mdi mdi-menu"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto" id="navbar-navlist">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#search-store">
                Search Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#product">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#client">
                Clients
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
