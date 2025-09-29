import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import CardInfo from "../components/card-info";
import Button from "../components/button";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <section className="container-fluid my-5 bg-section">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start ml-4">
            <h1 className="fw-bold">
              UPX - <span className="color-green">Agro 4.0</span>
            </h1>
            <p>Pesquise os melhores fornecedores do agro para sua região!</p>
            <Button text="Encontre novos fornecedores agora!" className="color-green" />
          </div>
          <div className="col-md-6 text-center">
            <img
              src="/banner.svg"
              alt="Banner Agro"
              className="img-fluid"
              style={{ maxWidth: "400px" }}
            />
          </div>
        </div>
      </section>

      <section className="container text-center my-5">
        <h2>Tudo que você precisa em um só lugar!</h2>
        <div className="row mt-4">
          <CardInfo
            title="Pesquise Fornecedores"
            text="Nosso banco de dados com milhares de fornecedores."
            icon={<img src="/icon-pesquise.svg" alt="Pesquisar" width={40} height={40} />}
          />
          <CardInfo
            title="Aprenda mais sobre o Agro 4.0"
            text="Pesquisas e discussões sobre o agro digital."
            icon={<img src="/icon-aprenda.svg" alt="Aprenda" width={40} height={40} />}
          />
          <CardInfo
            title="Ache o melhor preço!"
            text="Compare preços dos fornecedores brasileiros."
            icon={<img src="/icon-ache.svg" alt="Ache" width={40} height={40} />}
          />
        </div>
      </section>

            <section className="container-fluid my-5 bg-section">
        <div className="row align-items-center position-relative">
          <div className="col-md-4" style={{ paddingLeft: "60px" }}>
            <h3 className="color-green mt-4">Categorias</h3>
            <p className="mb-5">Navegue pelos produtos através das categorias.</p>
            <img
              src="/plantar.svg"
              alt="Plantinha"
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                width: "70px",
                height: "auto"
              }}
            />
          </div>
          <div className="col-md-8">
            <div className="row text-start">
              <div className="col-md-6 mb-4 d-flex align-items-center">
                <img src="/icon-fertilizante.svg" alt="Fertilizantes" width={32} height={32} className="me-2" />
                <span className="fw-bold color-green">Fertilizantes</span>
              </div>
              <div className="col-md-6 mb-4 d-flex align-items-center">
                <img src="/icon-agrotoxicos.svg" alt="Agrotóxicos" width={32} height={32} className="me-2" />
                <span className="fw-bold color-green">Agrotóxicos</span>
              </div>
              <div className="col-md-6 mb-4 d-flex align-items-center">
                <img src="/icon-sementes.svg" alt="Sementes" width={32} height={32} className="me-2" />
                <div>
                  <span className="fw-bold color-green">Sementes</span>
                  <div className="small text-muted">Soja, milho, algodão e etc</div>
                </div>
              </div>
              <div className="col-md-6 mb-4 d-flex align-items-center">
                <img src="/icon-mudas.svg" alt="Mudas" width={32} height={32} className="me-2" />
                <span className="fw-bold color-green">Mudas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
