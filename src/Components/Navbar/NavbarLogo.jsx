export default function NavbarLogo() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container custom-container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src="/logo 1.png" alt="Logo" style={{ height: "40px" }} />
        </a>

        {/* Right side */}
        <div className="d-none d-lg-flex align-items-center gap-4">
          <div className="d-flex align-items-center gap-2">
            <i className="fa-solid fa-phone nav-icon-clr"></i>
            <span>0203 519 4420</span>
          </div>

          <div className="d-flex align-items-center gap-2">
            <i className="fa-solid fa-envelope nav-icon-clr"></i>
            <span>info@solarinnovation.com</span>
          </div>

          <button className="btn nav-btn-clr text-light">Contact Us</button>
        </div>
      </div>
    </nav>
  );
}
