export default function NavbarElements() {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container custom-container">
        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Menu */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav w-100 d-flex justify-content-between text-center">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Chi Siamo
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                S.I.R.E
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SIRE Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Why SIRE?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                SIRE Product
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                How it Works?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
