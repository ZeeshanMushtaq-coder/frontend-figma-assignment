import Dots from "./Dots";

export default function AskedQuestions() {
  return (
    <div className="d-flex flex-column align-items-center mt-5 position-relative">
      <p className="asked-head m-0">Frequently Asked Questions</p>
      <div className="asked-botom-line"></div>

      <Dots className="asked-dots" />

      {/* 1st Card */}
      <div className="card shadow-sm p-3 text-start w-75 mt-5">
        <div className="d-flex align-items-center gap-3">
          <i className="fa fa-minus asked-icon"></i>
          <h6 className="asked-dove m-0">Dove si monta S.I.R.E.?</h6>
        </div>
        <p className="asked-text text-start mt-2 mb-0">
          S.I.R.E. può essere montato come una tenda sul balcone o come
          pensilina sulla vetrina, porta, finestra
        </p>
      </div>

      {/* 2nd Card */}
      <div className="card shadow-sm p-3 text-start w-75 mt-4">
        <div className="d-flex align-items-center gap-3">
          <i className="fa fa-plus asked-icon"></i>
          <h6 className="asked-dove m-0">Chi monta l’impianto S.I.R.E.?</h6>
        </div>
      </div>

      {/* 3rd Card */}
      <div className="card shadow-sm p-3 text-start w-75 mt-4">
        <div className="d-flex align-items-center gap-3">
          <i className="fa fa-plus asked-icon"></i>
          <h6 className="asked-dove m-0">
            Quanto tempo impiega l’installazione?
          </h6>
        </div>
      </div>

      {/* 4th Card */}
      <div className="card shadow-sm p-3 text-start w-75 mt-4">
        <div className="d-flex align-items-center gap-3">
          <i className="fa fa-plus asked-icon"></i>
          <h6 className="asked-dove m-0">
            E’ necessario richiedere autorizzazioni al condominio?
          </h6>
        </div>
      </div>

      {/* 5th Card */}
      <div className="card shadow-sm p-3 text-start w-75 mt-4">
        <div className="d-flex align-items-center gap-3">
          <i className="fa fa-plus asked-icon"></i>
          <h6 className="asked-dove m-0">
            E’ necessario predisporre pratiche per il GSE?{" "}
          </h6>
        </div>
      </div>

      {/* 6th Card */}
      <div className="card shadow-sm p-3 text-start w-75 mt-4">
        <div className="d-flex align-items-center gap-3">
          <i className="fa fa-plus asked-icon"></i>
          <h6 className="asked-dove m-0">L’impianto è garantito?</h6>
        </div>
      </div>

      {/* 7th Card */}
      <div className="card shadow-sm p-3 text-start w-75 mt-4">
        <div className="d-flex align-items-center gap-3">
          <i className="fa fa-plus asked-icon"></i>
          <h6 className="asked-dove m-0">
            E’ possibile usufruire di bonus fiscali?
          </h6>
        </div>
      </div>
      <button className="mt-5 connection-btn btn">Collegati al sole</button>
    </div>
  );
}
