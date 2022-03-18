import Icon from "@mdi/react";
import {mdiCardAccountPhone, mdiEmail, mdiTextBoxSearch} from "@mdi/js";
import React from "react";
import { useState } from "react"
import "./css/MainHeader.css";
import $ from "jquery";

function MainHeader () {

  return (
    <div>
      <div className="container-fluid">
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
                Portal Transparência
                <a href="#">
                  <span className="link" />
                </a>
              </div>
              <div className="midHeaderButtons colorHover" style={{
                margin: "0",
              }}>
                <Icon path={mdiEmail} className="headerButtons colorHover" />
                <br />
                Carta de Serviços
                ao Cidadão
                <a href="#">
                  <span className="link" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
              <div className="dropdown-toggle dropDownLabel" data-toggle="dropdown">Município</div>
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
              <div className="dropdown-toggle dropDownLabel" data-toggle="dropdown">Notícias</div>
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
      <div className="container-fluid">
        <img className="Vitrine" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmotaen.com%2Fupload%2Fresize%2F1920%2F1080%2Fupload%2Fwallpapers%2Fsource%2F2014%2F12%2F22%2F12%2F00%2F42321%2F138-c8d.jpg&f=1&nofb=1" alt="Vitrine" />
      </div>
      <div className="container-fluid">
        <div className="bottomBar">
        </div>
      </div>
    </div>
  )
}

export default MainHeader