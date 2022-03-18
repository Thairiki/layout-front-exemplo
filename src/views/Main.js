import React from "react";
import { useEffect, useState } from "react"
import MainHeader from "../components/MainHeader";
import "./css/Main.css";
import $ from "jquery";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";


function Main (props) {

  return (
    <div>
      <MainHeader />
      <div className="container-fluid padPadrao">
        <p className="title1 ps-1">Notícias</p>
          <div className="row justify-content-center">
            <div className="col card noticiaContainer">
              <div className="noticiaImg">
                <img className="noticia1" alt="" src="https://images.news18.com/ibnlive/uploads/2017/11/mountains_AFP.jpg?im=FitAndFill,width=1200,height=900"/>
              </div>
              <div className="card-body">
                <p className="title2">{"Ted Sarandos nomeado co-CEO da Netflix"}</p>
              </div>
              <div className="date">{"13/04/2020"}</div>
            </div>
            <div className="col card noticiaContainer">
              <div className="noticiaImg">
                <img className="noticia1" alt="" src="https://images.creativemarket.com/0.1.0/ps/416836/1360/1100/m1/fpnw/wm1/zvzf8tnfkx6avqwolvbjeoasd1wz1dhldekk988ns05mjgfeztgpkqlrxlzhwf43-.jpg?1427154639&s=f72016e2028ce20df957abd7ed943570"/>
              </div>
              <div className="card-body">
                <p className="title2">{"O aplicativo de meditação Calm está tendo seu próprio programa HBO Max cheio de celebridades"}</p>
              </div>
              <div className="date">{"14/04/2020"}</div>
            </div>
          </div>
        <div className="card container-fluid borderNoticia">
          <div className="row flex-nowrap">
            <div className="col noticiaContainer2">
              <div className="noticiaImg2">
                <img className="noticia2" alt="" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cameraegg.org%2Fwp-content%2Fuploads%2F2016%2F01%2FNikon-D500-Sample-Images-2.jpg&f=1&nofb=1" />
              </div>
              <div className="card-body">
                <p className="title2">{"Spaceflight Inc. lança novo veículo de transferência orbital para foguete via satélite"}</p>
              </div>
              <div className="date">{"14/04/2020"}</div>
            </div>
            <div className="v-separator" />
            <div className="col noticiaContainer2">
              <div className="noticiaImg2">
                <img className="noticia2" alt="" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cameraegg.org%2Fwp-content%2Fuploads%2F2016%2F01%2FNikon-D500-Sample-Images-2.jpg&f=1&nofb=1" />
              </div>
              <div className="card-body">
                <p className="title2">{"Spaceflight Inc. lança novo veículo de transferência orbital para foguete via satélite"}</p>
              </div>
              <div className="date">{"14/04/2020"}</div>
            </div>
            <div className="v-separator" />
            <div className="col noticiaContainer2">
              <div className="noticiaImg2">
                <img className="noticia2" alt="" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cameraegg.org%2Fwp-content%2Fuploads%2F2016%2F01%2FNikon-D500-Sample-Images-2.jpg&f=1&nofb=1" />
              </div>
              <div className="card-body">
                <p className="title2">{"Spaceflight Inc. lança novo veículo de transferência orbital para foguete via satélite"}</p>
              </div>
              <div className="date">{"14/04/2020"}</div>
            </div>
            <div className="v-separator" />
            <div className="col noticiaContainer2">
              <div className="noticiaImg2">
                <img className="noticia2" alt="" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cameraegg.org%2Fwp-content%2Fuploads%2F2016%2F01%2FNikon-D500-Sample-Images-2.jpg&f=1&nofb=1" />
              </div>
              <div className="card-body">
                <p className="title2">{"Spaceflight Inc. lança novo veículo de transferência orbital para foguete via satélite"}</p>
              </div>
              <div className="date">{"14/04/2020"}</div>
            </div>
          </div>
        </div>
        <div className="justify-content-center d-flex m-4">
          <a className="btn btn-warning btn-lg fw-bolder noticiasButton">Veja mais notícias</a>
        </div>
        <div className="row flex-nowrap container-fluid mb-4 mt-4">
          <img className="col align-items-center d-flex banner" alt="" src="https://cdn.zeplin.io/608ffae0ea7a1233c03281d0/assets/61cf6d8a-e084-4451-a66e-76c4bb7a8a6e.svg" />
          <img className="col align-items-center d-flex banner2" alt="" src="https://cdn.zeplin.io/608ffae0ea7a1233c03281d0/assets/61cf6d8a-e084-4451-a66e-76c4bb7a8a6e.svg" />
        </div>
      </div>
      <div className="container-fluid">
        <div className="blueBar">
          <div className="padPadrao">
            <p className="title6 ps-1">Galeria de Fotos</p>
          </div>
          <div className="justify-content-center d-flex m-4">
            <a className="btn btn-warning btn-lg fw-bolder noticiasButton">Veja mais galerias</a>
          </div>
        </div>
      </div>
      <div className="container-fluid padPadrao">
        <p className="title1 ps-3">Calendário de eventos</p>
      </div>
      <div className="container-fluid">
        <div className="card container-fluid borderNoticia">
          <div className="row flex-nowrap">
            <div className="col eventos">
              <div>
                <span className="textStyle1">{"13"}</span>
                <span className="textStyle2">{" de dezembro de 2020"}</span>
              </div>
              <div className="textStyle3 mb-3">
                {"A partir das 16:30"}
              </div>
              <div className="eventosImg">
                <img className="noticia2" alt="" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cameraegg.org%2Fwp-content%2Fuploads%2F2016%2F01%2FNikon-D500-Sample-Images-2.jpg&f=1&nofb=1" />
              </div>
              <div className="title2 mt-4">{"Como escrever conteúdo sobre suas fotos"}</div>
              <div className="textStyle4 mt-4 mb-4">{"Rua das azaleias, 257 - Jardim Botânico - Sinop/MT"}</div>
            </div>
            <div className="v-separator2" />
            <div className="col eventos">
              <div>
                <span className="textStyle1">{"13"}</span>
                <span className="textStyle2">{" de dezembro de 2020"}</span>
              </div>
              <div className="textStyle3 mb-3">
                {"A partir das 16:30"}
              </div>
              <div className="eventosImg">
                <img className="noticia2" alt="" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cameraegg.org%2Fwp-content%2Fuploads%2F2016%2F01%2FNikon-D500-Sample-Images-2.jpg&f=1&nofb=1" />
              </div>
              <div className="title2 mt-4">{"Onde expandir seu negócio como fotógrafo: site ou mídia social?"}</div>
              <div className="textStyle4 mt-4 mb-4">{"Rua das azaleias, 257 - Jardim Botânico - Sinop/MT"}</div>
            </div>
            <div className="v-separator2" />
            <div className="col eventos">
              <div>
                <span className="textStyle1">{"13"}</span>
                <span className="textStyle2">{" de dezembro de 2020"}</span>
              </div>
              <div className="textStyle3 mb-3">
                {"A partir das 16:30"}
              </div>
              <div className="eventosImg">
                <img className="noticia2" alt="" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cameraegg.org%2Fwp-content%2Fuploads%2F2016%2F01%2FNikon-D500-Sample-Images-2.jpg&f=1&nofb=1" />
              </div>
              <div className="title2 mt-4">{"Como um artista visual redefine o sucesso em design gráfico"}</div>
              <div className="textStyle4 mt-4 mb-4">{"Rua das azaleias, 257 - Jardim Botânico - Sinop/MT"}</div>
            </div>
            <div className="v-separator2" />
            <div className="col eventos">
              <div>
                <span className="textStyle1">{"13"}</span>
                <span className="textStyle2">{" de dezembro de 2020"}</span>
              </div>
              <div className="textStyle3 mb-3">
                {"A partir das 16:30"}
              </div>
              <div className="eventosImg">
                <img className="noticia2" alt="" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cameraegg.org%2Fwp-content%2Fuploads%2F2016%2F01%2FNikon-D500-Sample-Images-2.jpg&f=1&nofb=1" />
              </div>
              <div className="title2 mt-4">{"Comece um blog para atingir seu pico criativo"}</div>
              <div className="textStyle4 mt-4">{"Rua das azaleias, 257 - Jardim Botânico - Sinop/MT"}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-content-center d-flex m-4">
        <a className="btn btn-warning btn-lg fw-bolder noticiasButton">Veja mais eventos</a>
      </div>
      <div className="container-fluid padPadrao">
        <div className="row justify-content-center">
          <div className="col">
            <p className="title1 ps-1">Galeria de vídeos</p>
          </div>
          <div className="col">
            <p className="title1 ps-1">Galeria de obras</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="card col noticiaContainer">
            <div className="card-img-top noticiaImg">
              <iframe className="player"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
              >
              </iframe>
            </div>
            <div className="card-body">
              <p className="title3">{"Como a escrita influencia sua marca pessoal?"}</p>
            </div>
          </div>
          <div className="col card noticiaContainer">
            <div className="card-img-top noticiaImg">
              <img className="noticia1" alt="" src="https://images.creativemarket.com/0.1.0/ps/416836/1360/1100/m1/fpnw/wm1/zvzf8tnfkx6avqwolvbjeoasd1wz1dhldekk988ns05mjgfeztgpkqlrxlzhwf43-.jpg?1427154639&s=f72016e2028ce20df957abd7ed943570"/>
            </div>
            <div className="card-body">
              <p className="title3">{"Por que não usamos sites prontos"}</p>
            </div>
            <div className="date">{"14/04/2020"}</div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col">
            <div className="justify-content-center d-flex m-4">
              <a className="btn btn-warning btn-lg fw-bolder noticiasButton">Veja mais vídeos</a>
            </div>
          </div>
          <div className="col">
            <div className="justify-content-center d-flex m-4">
              <a className="btn btn-warning btn-lg fw-bolder noticiasButton">Veja mais obras</a>
            </div>
          </div>
        </div>
      </div>
      <MouseParallaxContainer>
        <MouseParallaxChild factorX={0.03} factorY={0.05} >
          <div className="container-fluid p-0" style={{
            height: "500px",
            display: "inline-block",
            borderRadius: "24px",
            overflow: "hidden",
            position: "relative",
          }}>
            <img className="parallax"
                 alt=""
                 src="https://i1.modland.net/games/pageCovers/B6CmF1P0atU7KmhqXzGdK4GMtVBJYvdOaZkcu6kM.webp"
                 style={{
                   height: "100%",
                   width: "100%",
                   display: "inline-block",
                   borderRadius: "24px !important",
                   objectFit: "cover",
                 }}
            />
            <div style={{
              backgroundColor: "#fafafa",
              width: "50%",
              height: "75%",
              position: "absolute",
              top: "0px",
              left: "42%",
              borderBottomLeftRadius: "24px",
              borderBottomRightRadius: "24px",
            }}>
              <div className="container-fluid" style={{
                width: "100%",
                height: "100%",
                padding: "5% 17%",
              }}>
                <span className="fw-bold title5">Conheça a
                  <p className="fw-bolder">Melhor Cidade do Brasil</p>
                </span>
                <p className="subtitle1"
                >É a sua cidade! Onde tem tudo o que você precisa.</p>
                <div className="row">
                  <div className="col">
                    <div className="btn btn-warning noticiasButton">
                      Conheça a Cidade
                    </div>
                  </div>
                  <div className="col">
                    <div className="btn btn-primary disabled noticiasButton">
                      Conheça a economia
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </div>
  )
}

export default Main