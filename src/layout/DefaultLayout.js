import React from "react"
import "./css/DefaultLayout.css"
import Main from "../views/Main"
// import $ from 'jquery';
// import Icon from '@mdi/react'
// import { mdiCardAccountPhone, mdiTextBoxSearch, mdiEmail  } from '@mdi/js'

function DefaultLayout (props) {

  const ano = "Ano"
  const clienteNome = "Nome do cliente"

  return (
    <div>
      <header style={{
        width: "100%",
      }}>
        <div className="container-fluid padPadrao">
          <nav className="navbar navbar-light bg-light justify-content-between topHeader">
            <div className="btn topHeaderButtons ">
              <span className="topHeaderButtonsLabel">
                Aumentar fonte
              </span>
            </div>
            <div className="btn topHeaderButtons ">
              <span className="topHeaderButtonsLabel">
                Alto contraste
              </span>
            </div>
            <div className="btn topHeaderButtons ">
              <span className="topHeaderButtonsLabel">
                Mapa do site
              </span>
            </div>
            <div className="btn topHeaderButtons ">
              <span className="topHeaderButtonsLabel">
                Fonte para dislexia
              </span>
            </div>
            <div className="btn topHeaderButtons ">
              <span className="topHeaderButtonsLabel">
                Entenda a acessibilidade
              </span>
            </div>
            <div className="btn topHeaderButtons ">
              <span className="topHeaderButtonsLabel">
                Pesquise no Site
              </span>
            </div>
          </nav>
        </div>
      </header>
      <main className="container-fluid" style={{
        padding: "0 0 8px",
      }}>
        <Main />
      </main>
      <footer className="mt-5 pt-4">
        <div className="container-fluid">
          <div className="topFooter">
            <div className="row row-cols-3">
              <div className="col">
                <span className="footerText1">Horário de atendimento</span>
              </div>
              <div className="col">
                <span className="footerText1 row">Endereço</span>
              </div>
              <div className="col">
                <span className="footerText1">Fale com a prefeitura</span>
              </div>
            </div>
            <div className="row row-cols-3">
              <div className="col">
                <span className="footerText2">Segunda à Sexta, 07h às 11h e das 13h às 17h</span>
              </div>
              <div className="col ps-0">
                <span className="footerText2" >Rua das Azaleias, 257 - Jardim Botânico - Sinop/MT</span>
              </div>
              <div className="col">
                <span className="footerText2">(66) 3535-3535</span>
                <br />
                <span className="footerText2">(66) 9 9999-9999</span>
              </div>
            </div>
          </div>
          <div className="midFooter">
            <div className="row row-cols-4">
              <div className="col">
                <span className="footerText1 mb-5">Imprensa</span>
                <br />
                <span className="footerText2 mb-5">Notícias</span>
                <br />
                <span className="footerText2 ma-5">Agenda da cidade</span>
                <br />
                <span className="footerText2 mb-5">Galeria de fotos</span>
                <br />
                <span className="footerText2 mb-5">Galeria de vídeos</span>
                <br />
                <span className="footerText1">Contato</span>
                <br />
                <span className="footerText2">Ouvidoria E-SIC</span>
                <br />
                <span className="footerText2">Telefones úteis</span></div>
              <div className="col">
                <span className="footerText1">Prefeitura</span>
                <br />
                <span className="footerText2">Equipe do governo</span>
                <br />
                <span className="footerText2">Fotos da prefeitura</span>
                <br />
                <span className="footerText2">Galeria de prefeitos</span>
                <br />
                <span className="footerText2">Conheça nosso prefeito</span>
                <br />
                <span className="footerText2">Conheça nosso vice-prefeito</span>
                <br />
                <span className="footerText2">Competência, estrutura e organizacional</span>
              </div>
              <div className="col">
                <span className="footerText1">Município</span>
                <br />
                <span className="footerText2">Economia</span>
                <br />
                <span className="footerText2">Símbolos</span>
                <br />
                <span className="footerText2">Como chegar</span>
                <br />
                <span className="footerText2">Galeria de obras</span>
                <br />
                <span className="footerText2">História do município</span>
                <br />
                <span className="footerText2">Hino, bandeira e brasão</span>
                <br />
                <span className="footerText2">Conheça nosso município</span>
              </div>
              <div className="col">
                <span className="footerText1">Secretarias</span>
                <br />
                <span className="footerText2">Administração</span>
                <br />
                <span className="footerText2">Agricultura e desenvolvimento econômico sustentável</span>
                <br />
                <span className="footerText2">Assistência Social</span>
                <br />
                <span className="footerText2">Educação</span>
                <br />
                <span className="footerText2">Esportes</span>
                <br />
                <span className="footerText2">Finanças</span>
                <br />
                <span className="footerText2">Infraestrutura</span>
                <br />
                <span className="footerText2">Meio-ambiente, turismo e cultura</span>
                <br />
                <span className="footerText2">Planejamento, tecnologia e informática</span>
                <br />
                <span className="footerText2">Saúde</span>
              </div>
            </div>
          </div>
          <div>
            <a href="https://goo.gl/maps/AwPFtJe1us5UPyJg9" target="_blank" rel="noopener noreferrer">
              <img className="mapImage" alt="" src="https://i.imgur.com/KwGYv7C.png" />
            </a>
          </div>
          <div className="botFooter">
            <div className="container-fluid">
              <div id="footerPadding" className="float-start">©{ano} - {clienteNome} - Todos os direitos reservados.</div>
              <div className="float-end">
                <img className="logoMpx" src="https://www.mpxbrasil.com.br/images/logo-mpx.svg" alt="LogoMPX" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default DefaultLayout