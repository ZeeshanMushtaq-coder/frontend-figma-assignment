import Dots from "./Dots";

export default function CHISiamo() {
  return (
    <div>
      <div className="position-relative">
        <div className="text-center mb-5">
          <h3 className="botom-border CHI-h">CHI SIAMO</h3>
          <p className="CHI-text">
            Solar Innovatio è una PMI innovativa italiana specializzata nella
            progettazione e realizzazione di sistemi fotovoltaici intelligenti.
            Solar Innovatio unisce alla decennale esperienza maturata nel
            panorama italiano nell'ambito delle soluzioni fotovoltaiche un
            approccio ingegneristico, innovativo, digitale alla principale fonte
            di energia rinnovabile.
          </p>
        </div>
        <div className="dots-absolute">
          <Dots className="opacity-50" />
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
        {/* 1st Card */}
        <div className="card CHI-card mb-5">
          <img
            src="/Testoni Cristian.jpg"
            alt="Testoni Cristian Img"
            className="CHI-img"
          />
          <div className="card-body">
            <h5 className="card-title">Cristian Testoni</h5>
            <p className="card-text Cristian-text">
              Ingegnere Meccanico, MBA. Ho ricoperto cariche di consulente e
              progettista in aziende meccaniche. Ho avviato come imprenditore
              svariate iniziative in ambito Automotive e mobilità elettrica.
            </p>
          </div>
        </div>
        {/* 2nd Card */}
        <div className="card CHI-card mb-5">
          <img
            src="/Gavioli.jpg"
            alt="Testoni Cristian Img"
            className="CHI-img"
          />
          <div className="card-body">
            <h5 className="card-title">Francesco Gavioli</h5>
            <p className="card-text Gavioli-text">
              Nel corso degli anni ho maturato una profonda conoscenza nella
              progettazione e realizzazione di impianti elettrici e di energia
              rinnovabile. Dal 2020 sono fondatore di Gavioli Impianti, azienda
              all’avanguardia nell’installazione di impianti fotovoltaici
            </p>
          </div>
        </div>
        {/* 3rd Card */}
        <div className="card CHI-card mb-5">
          <img src="/Fabi.jpg" alt="Testoni Cristian Img" className="CHI-img" />
          <div className="card-body">
            <h5 className="card-title">Massimo Fabi</h5>
            <p className="card-text Fabi-text">
              Laurato in Economia e Commercio mi sono occupato per anni di
              Business Development sia in multinazionali che PMI italiane in
              differenti settori
            </p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <p className="Cristian-p text-center">
          <i className="fa-solid fa-quote-left me-1"></i>
          Non sviluppiamo pannelli fotovoltaici. Il pannello è solo una
          componente di una soluzione ingegneristica più completa che comprende
          sensoristiche avanzate e l'integrazione con i sistemi domotici di
          casa.
          <i className="fa-solid fa-quote-right ms-1"></i>
        </p>
        <div className="d-flex justify-content-center align-items-center Cristian-line-w mb-5">
          <div className="Cristian-line"></div>
          <h5 className="Cristian-h mx-3">Cristian Testoni</h5>
          <div className="Cristian-line"></div>
        </div>
      </div>
    </div>
  );
}
