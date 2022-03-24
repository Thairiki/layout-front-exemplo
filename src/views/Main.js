import React from "react";
// import { useEffect, useState } from "react"
import "./css/Main.css";
// import $ from "jquery";
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import vitrine from "../assets/vitrine.png";


function Main (props) {

  return (
    <div className="container-fluid">
      <div className="row row-carrosel">
        <section className="carrosel-box d-none d-md-block">
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                      className="active" aria-current="true" aria-label="Slide 1"/>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                      aria-label="Slide 2"/>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                      aria-label="Slide 3"/>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={vitrine} className="d-block w-100" alt="Imagem Cidade"/>
              </div>
              <div className="carousel-item">
                <img src={vitrine} className="d-block w-100" alt="Imagem Cidade"/>
              </div>
              <div className="carousel-item">
                <img src={vitrine} className="d-block w-100" alt="Imagem Cidade"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                        <span aria-hidden="true">
                            {/*// <!--<i class="icone-anterior bi bi-chevron-left"</i>>-->*/}
                          <svg className="icone-anterior" xmlns="http://www.w3.org/2000/svg" fill="none"
                               viewBox="0 0 48 48">
                                <path fill="#fff"
                                      d="M24 48c13.255 0 24-10.745 24-24S37.255 0 24 0 0 10.745 0 24s10.745 24 24 24z"/>
                                <path fill="#000" stroke="#000" stroke-width=".5"
                                      d="M24.81 18.715l.185-.168c-.167-.184-.393-.297-.64-.297s-.473.113-.64.297h0l-.004.004-3.96 4.514-.364.415h.146c-.022.088-.033.179-.033.27 0 .127.022.253.065.372.042.116.105.224.188.315l3.958 4.513h0l.004.003c.167.184.393.297.64.297s.473-.113.64-.296c.084-.09.148-.2.19-.317.044-.119.065-.245.065-.372s-.021-.254-.064-.372c-.043-.117-.106-.225-.189-.315L21.64 23.75l3.357-3.827c.082-.09.146-.199.188-.316.043-.118.065-.244.065-.372 0-.127-.022-.253-.065-.371-.043-.118-.107-.227-.19-.318l-.184.17zm0 0c.06.065.108.144.14.234l-1.051-.234c.127-.138.288-.215.456-.215.167 0 .329.077.456.215z"/>
                            </svg>

                        </span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                        <span aria-hidden="true">
                            <svg className="icone-proximo" xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                 fill="none" viewBox="0 0 48 48">
                                <path fill="#fff"
                                      d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0z"/>
                                <path fill="#000" stroke="#000" stroke-width=".5"
                                      d="M22.19 29.285l-.185.168c.167.184.394.297.64.297.247 0 .473-.113.641-.297h0l.003-.003 3.96-4.515.364-.415h-.146c.022-.088.033-.179.033-.27 0-.127-.022-.253-.064-.371-.043-.117-.106-.225-.189-.316l-3.958-4.512h0l-.003-.004c-.168-.184-.394-.297-.641-.297s-.473.113-.64.296c-.084.09-.148.2-.19.318-.043.118-.065.244-.065.371s.022.254.064.372c.043.117.106.225.189.316l3.358 3.827-3.358 3.828c-.082.09-.146.198-.188.315-.043.118-.065.245-.065.372s.022.253.065.372c.043.117.107.227.19.317l.184-.17zm0 0c.126.139.288.215.455.215.168 0 .33-.076.456-.215l-.912-1.04c-.059.064-.107.143-.14.233-.032.09-.049.188-.049.287 0 .099.017.196.05.286.032.09.08.17.14.234z"/>
                            </svg>
                        </span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>
      </div>
      <div>
        <div className="bottomBar">
      </div>
      </div>
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