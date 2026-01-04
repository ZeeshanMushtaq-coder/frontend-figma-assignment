export default function PercheSIRE() {
  return (
    <div className="mt-5 d-flex flex-column align-items-center justify-content-center">
      <h3 className="Perche-SIRE">Perche S.I.R.E.</h3>
      <div className="Perche-SIRE-line"></div>
      <div className="row d-flex justify-content-center my-5">
        <div className="col-6 col-md-4 col-lg-3">
          <div className="card shadow border-0 Perche-SIRE-card-h">
            <div className="d-flex justify-content-center align-items-center">
              <img src="/why1.png" className="Perche-SIRE-img1 mt-4" alt="" />
            </div>
            <div className="card-body">
              <h5 className="Perche-SIRE-title">Risparmio Energetico</h5>
              <p className="Perche-SIRE-text">
                Risparmia da un minimo del 60% sulla bolletta fino
                all'indipendenza energetica anche grazie alla schermatura solare
                che consente una riduzione fino al 95% dei raggi UV e quindi un
                minor utilizzo del condizionatore.
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="card shadow border-0 Perche-SIRE-card-h">
            <div className="d-flex justify-content-center align-items-center">
              <img src="/why2.png" className="Perche-SIRE-img1 mt-4" alt="" />
            </div>
            <div className="card-body">
              <h5 className="Perche-SIRE-title">Mobilità Elettrica</h5>
              <p className="Perche-SIRE-text">
                L'unica soluzione che rende l’utilizzo di un’auto elettrica
                veramente economico. L’efficienza dei pannelli e le batterie di
                accumulo garantiscono fino a 29.000 chilometri annui a emissioni
                zero.
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-3">
          <div className="card shadow border-0 Perche-SIRE-card-h">
            <div className="d-flex justify-content-center align-items-center">
              <img src="/why3.png" className="Perche-SIRE-img1 mt-4" alt="" />
            </div>
            <div className="card-body">
              <h5 className="Perche-SIRE-title">Comunità Energetica</h5>
              <p className="Perche-SIRE-text">
                Dal concetto di condominio al concetto di comunità energetica:
                Si.Re. è il sistema che rende possibile realizzare una Comunità
                Energetica Rinnovabile senza acquisto di energia elettrica dalla
                rete.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="Perche-SIRE-bgc d-flex justify-content-center">
        <div className="row py-4">
          {/* Img 1 */}
          <div className="col-md-3">
            <div className="card d-flex justify-content-center align-items-center Perche-SIRE-card-w">
              <img
                src="/Group1.png"
                className="Perche-SIRE-card-img1 mt-4 mb-0"
                alt=""
              />
              <div className="card-body d-flex flex-column align-items-center">
                <h4 className="mb-0">110%</h4>
                <p className="mb-0">SUPERBONUS</p>
              </div>
            </div>
          </div>

          {/* Img 2 */}
          <div className="col-md-3">
            <div className="card d-flex justify-content-center align-items-center Perche-SIRE-card-w">
              <img
                src="/Group2.png"
                className="Perche-SIRE-card-img2 mt-4 text-center"
                alt=""
              />
              <div className="card-body d-flex flex-column align-items-center">
                <h4 className="mb-0">65%</h4>
                <p className="mb-0">DETRAZIONE DOMOTICA</p>
              </div>
            </div>
          </div>

          {/* Img 3 */}
          <div className="col-md-3">
            <div className="card d-flex justify-content-center align-items-center Perche-SIRE-card-w">
              <img
                src="/Group3.png"
                className="Perche-SIRE-card-img3 mt-4"
                alt=""
              />
              <div className="card-body d-flex flex-column align-items-center">
                <p className="mb-0">PROGETTAZIONE PERSONALIZZATA</p>
              </div>
            </div>
          </div>

          {/* Img 4 */}
          <div className="col-md-3">
            <div className="card d-flex justify-content-center align-items-center Perche-SIRE-card-w">
              <img
                src="/Group4.png"
                className="Perche-SIRE-card-img4 mt-4"
                alt=""
              />
              <div className="card-body d-flex flex-column align-items-center">
                <p className="mb-0">CONSULENZA FISCALE SUI BONUS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
