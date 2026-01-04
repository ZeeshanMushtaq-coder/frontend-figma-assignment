export default function Resistence() {
  return (
    <div className="Resistence-bgImg ">
      <div className="d-flex flex-column align-items-center justify-content-center mb-5 pb-5">
        <h3 className="Resistence-h mt-5">
          Connesso, Intelligente, Resistente
        </h3>
        <div className="Resistence-line"></div>
        <div className="row d-flex justify-content-center gap-3 mt-5">
          <div className="col-5">
            {/* Versatile */}
            <div className="d-flex gap-3">
              <div className="Resistence-img-circle">
                <img src="/icon-1.png" alt="" />
              </div>
              <div>
                <h5 className="Resistence-h5">Versatile</h5>
                <p className="versatile-text">
                  Installabile in qualsiasi balcone anche all'interno del
                  condominio. Non richiede autorizzazioni ne opere murarie.
                  Utile anche come schermatura solare
                </p>
              </div>
            </div>

            {/* Automatizzato */}
            <div className="d-flex gap-3">
              <div className="Resistence-img-circle">
                <img src="/icon-3.png" alt="" />
              </div>
              <div>
                <h5 className="Resistence-h5">Automatizzato</h5>
                <p className="Automatizzato-text">
                  Totalmente automatico e retraibile, S.I.R.E regola la quantità
                  di sole in casa in base alle necessità. Un perfetto connubio
                  tra sole e ombra. I suoi sensori regolano l'esposizione in
                  base alle condizioni atmosferiche.
                </p>
              </div>
            </div>

            {/* Efficiente */}
            <div className="d-flex gap-3">
              <div className="Resistence-img-circle">
                <img src="/icon-5.png" alt="" />
              </div>
              <div>
                <h5 className="Resistence-h5">Efficiente</h5>
                <p className="Efficiente-text">
                  Il sistema di accumulo permette di conservare l’energia
                  generata in eccesso e renderla disponibile quando serve, per
                  esempio di sera o in giornate nuvolose.
                </p>
              </div>
            </div>
          </div>

          <div className="col-5">
            {/* Indipendente e Green */}
            <div className="d-flex gap-3">
              <div className="Resistence-img-circle">
                <img src="/icon-2.png" alt="" />
              </div>
              <div>
                <h5 className="Resistence-h5">Indipendente e Green</h5>
                <p className="Indipendente-text">
                  dalle fonte non rinnovabili non è più un’utopia. S.i.r.e.
                  fornisce l’accesso a fonti energetiche green anche a chi non
                  ha un tetto di proprietà.
                </p>
              </div>
            </div>

            {/* Connesso */}
            <div className="d-flex gap-3">
              <div className="Resistence-img-circle">
                <img src="/icon-4.png" alt="" />
              </div>
              <div>
                <h5 className="Resistence-h5">Connesso</h5>
                <p className="Indipendente-text">
                  Il sistema si connette ai dispositivi Alexa, Google,
                  elettrodomestici 2.0 wi-fi. Tramite l’app accedi ai dati di
                  produzione dell’energia e ricevi notifiche e suggerimenti per
                  l’utilizzo ottimale dell’energia autoprodotta.
                </p>
              </div>
            </div>

            {/* Resistente */}
            <div className="d-flex gap-3">
              <div className="Resistence-img-circle">
                <img src="/icon-6.png" alt="" />
              </div>
              <div>
                <h5 className="Resistence-h5">Resistente</h5>
                <p className="Resistence-text">
                  Il sistema è realizzato con un rivestimento protettivo,
                  impermeabile, isolante e resistente a fenomeni atmosferici
                  aggressivi, all’abrasione, urti e graffi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
