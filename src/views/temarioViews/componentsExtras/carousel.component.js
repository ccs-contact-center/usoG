import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

class CarouselComponent extends Component{
render(){
    return (
        <div class="carousel-wrappe">
          <Carousel useKeyboardArrows>
            <div>
              <p className="cajaA1">
                <ul>
                  <li>
                    <b>In Bound</b>: Transacciones de entrada que están destinadas a
                    resolver dudas, aclarar información de la marca, recibir quejas
                    de los usuarios, concertar reuniones con clientes o solventar
                    problemas que parten de los propios clientes. Es la forma
                    efectiva de estar en contacto con un cliente cuando lo requiera.
                  </li>
                </ul>
              </p>
            </div>
            <div>
              <p className="cajaA2">
                <ul>
                  <li>
                    <b>Out Bound</b>: Transacciones de salida, el objetivo es atraer
                    la atención del cliente potencial utilizando eventos, publicidad
                    en medios, e-mail y llamadas no solicitadas y usualmente es con
                    fines comerciales. Se pueden efectuar sondeos en distintos
                    temas, estudios de mercado para saber cuáles son las tendencias
                    actuales, ventas, etc.
                  </li>
                </ul>
              </p>
            </div>
            <div>
              <p className="cajaA3">
                <ul>
                  <li>
                    <b>Ventas</b>: Actividad de venta a través de un ejecutivo de
                    venta especializado y con competencias para vender de forma
                    remota.
                  </li>
                </ul>
              </p>
            </div>
          </Carousel>
        </div>
      )
}
}

export default  CarouselComponent;
