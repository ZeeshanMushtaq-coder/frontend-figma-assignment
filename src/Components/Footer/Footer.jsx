export default function Footer() {
  return (
    <div className="bg-dark text-white w-100 px-5 pt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-12 col-sm-6 col-md-3">
          <img src="/logo 1.png" alt="" className="img-fluid filter-white" />
          <p className="footer-p1 mt-4">
            Leo dui fermentum tristique urna tellus eget amet aliquam. Id vitae
            orci maecenas tortor odio Leo dui fermentum tristique urna tellus
            eget amet aliquam.
          </p>
          <div className="d-flex gap-2">
            <img src="/frey.png" alt="" />
            <img src="/frey.png" alt="" />
            <img src="/frey.png" alt="" />
          </div>
          <div className="d-flex gap-2">
            <img src="/frey.png" alt="" />
            <img src="/frey.png" alt="" />
            <img src="/frey.png" alt="" />
          </div>
        </div>
        <div className="col-12 col-sm-3 col-md-2 mt-4">
          <h6 className="footer-ql mb-3">Quick Links</h6>
          <p className="footer-home">Home</p>
          <p className="footer-home">Chi Siamo</p>
          <p className="footer-home">S.I.R.E</p>
          <p className="footer-home">SIRE Features</p>
          <p className="footer-home">Why SIRE?</p>
          <p className="footer-home">SIRE Product</p>
          <p className="footer-home">How it Works?</p>
        </div>
        <div className="col-12 col-sm-3 col-md-2 mt-4">
          <p className="footer-ql mb-3">Useful Links</p>
          <p className="footer-home">Help Center</p>
          <p className="footer-home">Privacy Policy</p>
          <p className="footer-home">Terms & Condition</p>
          <p className="footer-home">FAQ</p>
          <h6 className="mt-4 footer-ql">Documents</h6>
          <a href="#" className="footer-home text-light mt-4">
            Lindked Here
          </a>
        </div>
        <div className="col-12 col-sm-6 col-md-3 mt-4">
          <p className="footer-ql mb-3">Contact US</p>
          <div className="d-flex gap-3">
            <img
              src="/Location.png"
              alt=""
              className="img-fluid mt-2"
              style={{ width: "22px", height: "20px" }}
            />
            <p className="mb-0 footer-contact">
              Leo dui fermentum tristique urna tellus eget amet aliquam. Id
              vitae orci
            </p>
          </div>
          <div className="d-flex gap-3 mt-3">
            <img
              src="/Message.png"
              alt=""
              className="img-fluid mt-2"
              style={{ width: "20px", height: "16px" }}
            />
            <div>
              <p className="mb-0 footer-contact">email@email.com</p>
              <p className="mb-0 footer-contact">support@email.com</p>
            </div>
          </div>
          <div className="d-flex align-items-center gap-3 mt-3">
            <img
              src="/Phone.png"
              alt=""
              className="img-fluid mt-2"
              style={{ width: "15px", height: "15px" }}
            />
            <p className="mb-0 mt-1 footer-contact">+29 98595 8998</p>
          </div>
        </div>
        <div className="footer-bottom-line mt-5 d-flex justify-content-center"></div>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-11">
          <div className="d-flex justify-content-between px-5 my-4">
            <p className="footer-right">All Rights Reserved</p>
            <div className="d-flex gap-2">
              <img
                src="/Facebook.png"
                alt=""
                style={{ width: "26px", height: "26px" }}
              />
              <img
                src="/Instagram.png"
                alt=""
                style={{ width: "26px", height: "26px" }}
              />
              <img
                src="/Twitter.png"
                alt=""
                style={{ width: "26px", height: "26px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
