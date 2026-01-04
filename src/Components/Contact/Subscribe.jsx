export default function Subscribe() {
  return (
    <div className="sub-bgImage">
      <div className="container">
        <div className="row justify-content-center align-items-center text-light py-5">
          {/* LEFT CONTENT */}
          <div className="col-lg-7 col-md-12 mb-4 mb-lg-0 text-center text-lg-start">
            <p className="sub-heading mb-2">Subscribe for Newsletter</p>
            <p className="sub-p mb-0">
              Leo dui fermentum tristique urna tellus eget amet aliquam. Id
              vitae orci maecenas tortor odio
            </p>
          </div>

          {/* RIGHT INPUT */}
          <div className="col-lg-4 col-md-12 d-flex justify-content-center justify-content-lg-end">
            <div className="search-box w-100 w-lg-75">
              <input
                type="text"
                className="form-control"
                placeholder="Inserisci la tua email"
              />
              <div className="icon-circle">
                <img src="/Airoplane.png" alt="send" width="18" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
