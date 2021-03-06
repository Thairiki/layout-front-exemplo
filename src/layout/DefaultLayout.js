import React from "react"
import "./css/DefaultLayout.css"
import Main from "../views/Main"
import Icon from "@mdi/react";
import {mdiCardAccountPhone, mdiEmail, mdiTextBoxSearch} from "@mdi/js";
import vitrine from "../assets/vitrine.png";
// import $ from 'jquery';
// import Icon from '@mdi/react'
// import { mdiCardAccountPhone, mdiTextBoxSearch, mdiEmail  } from '@mdi/js'

function DefaultLayout (props) {

  const ano = "Ano"
  const clienteNome = "Nome do cliente"

  return (
    <div>
      <header>
        <section className="container-fluid padPadrao">
          <nav className="row topHeader">
            <ul className="col-12 nav justify-content-between">
              <li className="btn topHeaderButtons ">
                <span className="topHeaderButtonsLabel">
                  Aumentar fonte
                </span>
              </li>
              <li className="btn topHeaderButtons ">
                <span className="topHeaderButtonsLabel">
                  Alto contraste
                </span>
              </li>
              <li className="btn topHeaderButtons ">
                <span className="topHeaderButtonsLabel">
                  Mapa do site
                </span>
              </li>
              <li className="btn topHeaderButtons ">
                <span className="topHeaderButtonsLabel">
                  Fonte para dislexia
                </span>
              </li>
              <li className="btn topHeaderButtons ">
                <span className="topHeaderButtonsLabel">
                  Entenda a acessibilidade
                </span>
              </li>
              <li className="topHeaderButtons nav-item">
                <div className="btn-acessibilidade">
                  <form className="input-group" action="">
                    <input className="form-control" style={{fontWeight: "600",}} type="text" placeholder="Pesquise no Site"
                           name="" id="" />
                      <button className="btn btn-pesquisa"><i className="bi bi-search"/></button>
                  </form>
                </div>
              </li>
            </ul>
          </nav>
        </section>
        <section className="container-fluid">
          <div className="midHeader">
            <div className="padPadrao d-flex justify-content-between align-items-center">
              <div className="">
                <img id="logo" src="https://svgshare.com/i/f1J.svg" alt=""/>
              </div>
              <div className="d-flex">
                <div className="midHeaderButtons colorHover">
                  <Icon path={mdiCardAccountPhone} className="headerButtons colorHover" />
                  <br />
                  Ouvidoria e-SIC
                  <a href="#">
                    <span className="link" />
                  </a>
                </div>
                <div className="midHeaderButtons colorHover">
                  <Icon path={mdiTextBoxSearch} className="headerButtons colorHover" />
                  <br />
                  Portal Transpar??ncia
                  <a href="#">
                    <span className="link" />
                  </a>
                </div>
                <div className="midHeaderButtons colorHover" style={{
                  margin: "0",
                }}>
                  <Icon path={mdiEmail} className="headerButtons colorHover" />
                  <br />
                  Carta de Servi??os
                  ao Cidad??o
                  <a href="#">
                    <span className="link" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container-fluid">
          <nav className="navbar navbar-light justify-content-between align-content-center botHeader padPadrao pt-1 pb-1">
            <div className="dropdown myDropDownCss botHeaderButtons btn">
              <div className="botHeaderButtonsLabel" id="dropdownMenuButton1">
                <div href="#" className="dropdown-toggle dropDownLabel" data-toggle="dropdown">Prefeitura</div>
              </div>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div className="dropdown myDropDownCss botHeaderButtons btn">
              <div className="botHeaderButtonsLabel" id="dropdownMenuButton1">
                <div className="dropdown-toggle dropDownLabel" data-toggle="dropdown">Munic??pio</div>
              </div>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div className="dropdown myDropDownCss botHeaderButtons btn">
              <div className="botHeaderButtonsLabel" id="dropdownMenuButton1">
                <div className="dropdown-toggle dropDownLabel" data-toggle="dropdown">Secretarias</div>
              </div>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div className="dropdown myDropDownCss botHeaderButtons btn">
              <div className="botHeaderButtonsLabel" id="dropdownMenuButton1">
                <div className="dropdown-toggle dropDownLabel" data-toggle="dropdown">Not??cias</div>
              </div>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div className="dropdown myDropDownCss botHeaderButtons btn">
              <div className="botHeaderButtonsLabel" id="dropdownMenuButton1">
                <div className="dropdown-toggle dropDownLabel" data-toggle="dropdown">Imprensa</div>
              </div>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div>
            <div className="dropdown myDropDownCss botHeaderButtons btn">
              <div className="botHeaderButtonsLabel" id="dropdownMenuButton1">
                <div className="dropdown-toggle dropDownLabel" data-toggle="dropdown">Contato</div>
              </div>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
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
                <span className="footerText1">Hor??rio de atendimento</span>
              </div>
              <div className="col">
                <span className="footerText1 row">Endere??o</span>
              </div>
              <div className="col">
                <span className="footerText1">Fale com a prefeitura</span>
              </div>
            </div>
            <div className="row row-cols-3">
              <div className="col">
                <span className="footerText2">Segunda ?? Sexta, 07h ??s 11h e das 13h ??s 17h</span>
              </div>
              <div className="col ps-0">
                <span className="footerText2" >Rua das Azaleias, 257 - Jardim Bot??nico - Sinop/MT</span>
              </div>
              <div className="col">
                <span className="footerText2">(66) 3535-3535</span>
                <br />
                <span className="footerText2">(66) 9 9999-9999</span>
              </div>
            </div>
          </div>
          <section className="midFooter area-mapa-site container-fluid">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <nav className="mapa-site-links">
                        <h3>Imprensa</h3>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Not??cias</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Agenda da Cidade</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Galeria de Fotos</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Galeria de V??deos</a>
                          </li>
                        </ul>
                      </nav>
                      <nav className="mapa-site-links">
                        <h3>Contato</h3>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Ouvidoria E-SIC</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Telefones ??teis</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="col-12 col-md-6">
                      <nav className="mapa-site-links">
                        <h3>Prefeitura</h3>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Equipe do Governo</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Fotos da Prefeitura</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Galeria de Prefeitos</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Conhe??a Nosso Prefeito</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Conhe??a Nosso Vice Prefeito</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Compet??ncia, estrutura e oraganizacional</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <nav className="mapa-site-links">
                        <h3>Munic??pio</h3>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Economia</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Simbolos</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Como Chegar</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Galeria de Obras</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Hist??ria do Munic??pio</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Hino, Bandeira e Bras??o</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Conhe??a Nosso Munic??pio</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <div className="col-12 col-md-6">
                      <nav className="mapa-site-links">
                        <h3>Secretarias</h3>
                        <ul className="nav flex-column">
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Administra????o</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Agricultura e Desenvolvimento Economico Sustent??vel</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Assist??ncia Social</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Educa????o</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Esportes</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Finan??as</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Infraestrutura</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Meio Ambiente, Turismo e Cultura</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Planejamento, Tecnologia e Inform??tica</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link footerText2" href="#">Sa??de</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mapa-sinop container-fluid p-0">
            <div className="col-12 px-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62471.897351707805!2d-55.54140010721364!3d-11.87067924856206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93a77fe80bc27573%3A0x1207800617733e83!2sSinop%2C%20MT!5e0!3m2!1spt-BR!2sbr!4v1645482179348!5m2!1spt-BR!2sbr"
                className="w-100" height="320" loading="lazy" />
            </div>
          </section>
          <div className="botFooter">
            <div className="container-fluid">
              <div className="float-start footerPadding">??{ano} - {clienteNome} - Todos os direitos reservados.</div>
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