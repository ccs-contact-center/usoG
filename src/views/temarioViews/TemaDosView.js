import React, { Component } from 'react'
import { CardBody, Col, Row, CardHeader } from 'reactstrap'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3>Uso de correcto de la G</h3>
        </CardHeader>
        <CardBody className="">
          <Row className="centrado-fila">
            <Col xs="12">
              <ul>
                <li>
                  Las palabras que comienzan por el prefijo griego <b>geo</b>.
                  <br /> <span className="pAmarillo">Ejemplo</span>: geometría,
                  geografía, geología, etc.
                </li>
                <li className="mt-3">
                  En las palabras terminadas en <b>gia</b> y <b>gio</b>, y sus
                  derivados y compuestos.
                  <br /> <span className="pAmarillo">Ejemplo</span>: colegio y
                  contagio, de las cuales derivan colegiatura y contagiado.
                </li>
                <li className="mt-3">
                  La mayoría de las palabras en las que aparece el grupo 
                  <b>gen</b>, donde quiera que sea.
                  <br /> <span className="pAmarillo">Ejemplo</span>: gente,
                  general, argentino, urgente, origen, imagen. <br />
                  Las excepciones más comunes son ajeno y berenjena.
                </li>
              </ul>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
