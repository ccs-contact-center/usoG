import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
import despedida2 from '../../assets/img/usoG/actividad3.png'

class PresentacionView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Uso de correcto de la G</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12" className=" animated  fadeInDown  delay-1s">
              <p className="text-center">
                Hasta aquí las <b>reglas ortográficas de la G</b>, espero que
                les hayan quedado claras y a partir de ahora no escribirás con
                muchas faltas de ortografía.
              </p>
            </Col>
            <Col xs="12" className="centrado-fila">
              <div
                style={{ width: '400px' }}
                className="cajaA1 bg-fondo-btn3 animated  fadeInUp  delay-2s "
              >
                <h3 className="text-justify animated  fadeInDown  delay-3s text-center">
                  Gracias por tu participación!
                </h3>
              </div>
            </Col>
            <Col xs="12" className="centrado-fila">
            <img
                src={despedida2}
                style={{ width: 260 }}
                alt="despedida2"
                className="img-fluid animated  bounceInRight delay-1s"
              />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default PresentacionView
