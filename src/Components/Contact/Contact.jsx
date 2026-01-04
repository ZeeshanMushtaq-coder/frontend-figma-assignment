import Dots from "../Dots";

export default function Contact() {
  return (
    <div className="my-5 position-relative">
      <h5 className="contact-heading text-center">CONTATTACI</h5>
      <div className="contact-bl"></div>
      <Dots className="contact-dots" />

      {/* MAIN ROW */}
      <div className="row align-items-stretch justify-content-center mt-4">
        {/* LEFT COLUMN */}
        <div className="col-lg-3 col-md-5 col-12 mb-4 mb-lg-0">
          <div className="card h-100 p-4">
            <div className="d-flex gap-3 align-items-start">
              <img src="/Map-1.png" alt="" width="22" height="20" />
              <p className="m-0 footer-contact text-start">
                Leo dui fermentum tristique urna tellus eget amet aliquam. Id
                vitae orci
              </p>
            </div>

            <div className="d-flex gap-3 mt-3 align-items-center">
              <img src="/Mesg-1.png" alt="" width="20" height="16" />
              <div>
                <p className="mb-0 footer-contact text-start">
                  email@email.com
                </p>
                <p className="mb-0 footer-contact">support@email.com</p>
              </div>
            </div>

            <div className="d-flex gap-3 mt-3 align-items-center">
              <img src="/Phone-1.png" alt="" width="15" height="15" />
              <p className="mb-0 footer-contact">+29 98595 8998</p>
            </div>
            <div className="phone-separate-border mt-4"></div>
            <p className="border-text text-start mt-4">
              We Will get back to you within 24 hours. Or Call us Now
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="col-lg-6 col-md-7 col-12">
          <div className="card h-100 p-4">
            <div className="row mb-3">
              <div className="col-md-6 mb-3 mb-md-0">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Email Address"
            />

            <textarea
              className="form-control mb-4"
              rows="4"
              placeholder="Your Message"
            ></textarea>

            <div className="mt-auto d-flex justify-content-end">
              <button className="btn contact-btn">SEND</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
