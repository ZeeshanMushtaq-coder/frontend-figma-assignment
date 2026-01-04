export default function Scegli() {
  return (
    <div className="my-5 d-flex  flex-column justify-content-center align-items-center">
      <h4 className="Scegli-title">Scegli il tuo SIRE</h4>
      <div className="Scegli-botom-border"></div>

      {/* Card Section */}
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-5">
          <div className="card h-100">
            <img src="/Scegli-1.png" className="" alt="..." />
            <div className="card-body">
              <h5 className="Scegli-img-1-title text-start">S.I.R.E Direct</h5>

              <div className="d-flex gap-2 mb-2">
                <i class="fa-solid fa-chevron-right icon-color"></i>
                <p className="mb-0 Scegli-img-1-text">Sistema Plugin</p>
              </div>

              <div className="d-flex align-items-start gap-2 mb-2">
                <i className="fa-solid fa-chevron-right icon-color"></i>
                <p className="mb-0 Scegli-img-1-text text-start">
                  Struttura meccanizzata in poliuera e sensoristica intelligente
                </p>
              </div>

              <div className="d-flex gap-2 mb-2">
                <i class="fa-solid fa-chevron-right icon-color"></i>
                <p className="mb-0 Scegli-img-1-text">
                  Pannelli alta efficienza da 1KW
                </p>
              </div>

              <div className="d-flex gap-2 mb-2">
                <i class="fa-solid fa-chevron-right icon-color"></i>
                <p className="mb-0 Scegli-img-1-text">
                  Inverter e conne ssione aII'impianto domestico
                </p>
              </div>

              <div className="d-flex gap-2 mb-3">
                <i class="fa-solid fa-chevron-right icon-color"></i>
                <p className="mb-0 Scegli-img-1-text">
                  App di controllo e gesti one
                </p>
              </div>

              <h4 className="Scegli-img-1-title2">CONSIGLIATO PER:</h4>

              <div className="d-flex gap-5 mt-4">
                <div>
                  <div className="Scegli-img-circle d-flex justify-content-center align-items-center">
                    <img src="/Scegli-3.png" alt="" />
                  </div>
                  <p className="Scegli-img-3-text mt-2">Devices</p>
                </div>
                <div>
                  <div className="Scegli-img-circle d-flex justify-content-center align-items-center">
                    <img src="/Scegli-4.png" alt="" />
                  </div>
                  <p className="Scegli-img-3-text mt-2">Families</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="Scopri-h mb-0">
                  Scopri le caratteristiche tecniche
                </h4>
                <i class="fa-solid fa-chevron-down icon-color"></i>
              </div>
              <div>
                <ul className="colored-list">
                  <li>Te mpo di ricarica medio in estate</li>
                  <li>TBD Tempo di scarica a 16A.</li>
                  <li>TBD Autonomia dalla rete elettrica.</li>
                  <li>TBD Autonomia in casa di blackout.</li>
                  <li>2gg Immissione di CO2 da 1.022 kg a SOO kg annui</li>
                  <li>Te mpo di ricarica medio in estate.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card h-100">
            <img src="/Scegli-2.png" className="" alt="..." />
            <div className="card-body">
              <h5 className="Scegli-img-1-title text-start">S.I.R.E Full</h5>

              <div className="d-flex align-items-start gap-2 mb-2">
                <i class="fa-solid fa-chevron-right icon-color"></i>
                <p className="mb-0 Scegli-img-1-text text-start">
                  Struttura meccanizzata in poliuera e sensoristica intelligente
                </p>
              </div>

              <div className="d-flex gap-2 mb-2">
                <i class="fa-solid fa-chevron-right icon-color"></i>
                <p className="mb-0 Scegli-img-1-text">
                  Pannelli alta efficienza da 1KW
                </p>
              </div>

              <div className="d-flex gap-2 mb-2">
                <i class="fa-solid fa-chevron-right icon-color"></i>
                <p className="mb-0 Scegli-img-1-text">
                  Inverter e conne ssione aII'impianto domestico
                </p>
              </div>

              <div className="d-flex gap-2 mb-5">
                <i class="fa-solid fa-chevron-right icon-color"></i>
                <p className="mb-0 Scegli-img-1-text">
                  App di controllo e gesti one
                </p>
              </div>

              <h4 className="Scegli-img-1-title2">CONSIGLIATO PER:</h4>

              <div className="d-flex gap-5 mt-4">
                <div>
                  <div className="Scegli-img-circle d-flex justify-content-center align-items-center">
                    <img src="/Scegli-3.png" alt="" />
                  </div>
                  <p className="Scegli-img-3-text mt-2">Devices</p>
                </div>
                <div>
                  <div className="Scegli-img-circle d-flex justify-content-center align-items-center">
                    <img src="/Scegli-4.png" alt="" />
                  </div>
                  <p className="Scegli-img-3-text mt-2">Families</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="Scopri-h mb-0">
                  Title here if they have othervise remove this
                </h4>
                <i class="fa-solid fa-chevron-down icon-color"></i>
              </div>
              <div>
                <ul className="colored-list">
                  <li>Siste ma 2 kW con accumuIo.</li>
                  <li>
                    Tempo di ricarica medio in estate is 5 ore e 30 minuti
                  </li>
                  <li>Te mpo di scarica a 16A is 8 ore.</li>
                  <li>Autonomia dalla rete eIettrica 62Po.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
