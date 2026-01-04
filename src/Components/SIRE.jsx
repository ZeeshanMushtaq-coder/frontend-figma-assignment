import Dots from "./Dots";

export default function SIRE() {
  return (
    <div className="container SIRE-pb">
      <div className="row d-flex align-items-center">
        <div className="col-12 col-md-5 d-flex position-relative">
          <div className="image-wrapper position-relative">
            <div className="bg-circle-absolute"></div>

            <img src="/SIRE1.jpg" alt="SIRE1" className="sire-img1" />
            <img src="/SIRE2.png" className="SIRE-img2" alt="SIRE2" />

            <Dots className="SIRE-dots-img1" />
            <Dots className="SIRE-dots-img2" />
            <div className="SIRE-circle"></div>
          </div>
        </div>

        {/* Right Text */}
        <div className="col-md-7 ps-4">
          <Dots className="d-flex justify-content-end pe-5 mt-5" />
          <h4 className="SIRE-h4">S.I.R.E</h4>
          <h3 className="SIRE-h3 m-0">Smart Integrated Renewable Energy</h3>
          <div className="SIRE-line"></div>
          <p className="SIRE-p">
            S.I.R.E. è il primo sistema fotovoltaico intelligente al mondo per
            la produzione, conversione e gestione dell'energia solare, studiato
            specificatamente per installazioni all'interno di condomini.
          </p>
        </div>
      </div>
    </div>
  );
}
