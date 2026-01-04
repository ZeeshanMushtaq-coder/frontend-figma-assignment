export default function Connettiti() {
  return (
    <div className="Resistence-bgc d-flex flex-column align-items-center justify-content-center py-5">
      <h4 className="Connect-title">Connettiti al sole anche tu</h4>
      <div className="Connect-botm-line"></div>

      <div className="row gx-0 d-flex justify-content-center mt-3">
        <div className="col-12 col-sm-6 col-md-2">
          <div className="connect-bg-img-1">
            <div className="card d-flex align-items-center border-0 py-2">
              <img
                src="/connection-1.png"
                alt=""
                style={{ width: "60px", height: "60px" }}
              />
              <h4 className="connection-h">Richiedi un Preventivo</h4>
              <p className="mb-0 connection-p ">
                Senza impegno un nostro Solar expert ti contatterâ per
                verificare ditilizzn
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-2">
          <div className="connect-bg-img-2">
            <div className="card d-flex align-items-center border-0 py-2">
              <img
                src="/connection-2.png"
                alt=""
                style={{ width: "60px", height: "60px" }}
              />
              <h4 className="connection-h">Verifica la compatibilitâ</h4>
              <p className="mb-0 connection-p ">
                Verifica immediata della necessitâ tecniche di installazione
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-2">
          <div className="connect-bg-img-3">
            <div className="card d-flex align-items-center border-0 py-2">
              <img
                src="/connection-3.png"
                alt=""
                style={{ width: "60px", height: "60px" }}
              />
              <h4 className="connection-h">Installazione</h4>
              <p className="mb-0 connection-p px-1">
                Un instalIatore qualificato Solar Innovatio posizionerâ il SIRE
                in massimo 2 ore
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-2">
          <div className="connect-bg-img-4">
            <div className="card d-flex align-items-center border-0 py-2">
              <img
                src="/connection-4.png"
                alt=""
                style={{ width: "60px", height: "60px" }}
              />
              <h4 className="connection-h">Enjoy your Sun Power</h4>
              <p className="mb-0 connection-p ">
                Connettiti alla APP e goditi la tua energia solare
              </p>
            </div>
          </div>
        </div>
      </div>
      <button className="mt-5 connection-btn btn">Collegati al sole</button>
    </div>
  );
}
