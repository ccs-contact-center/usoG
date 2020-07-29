import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

class TemaUnoView extends Component {
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
            <Col xs="12 mt-3">
              <h2
                className="animated slideInUp delay-0 mb-2"
                style={{ marginBottom: '0px' }}
              >
                <b>Reglas ortográficas de la G</b>
              </h2>
            </Col>
            <Col xs="12" className="text-justify">
              <ul className="animated slideInUp delay-1 mt-3">
                <li>
                  Escribir correctamente es necesario para que nuestro mensaje
                  se entienda correctamente, sin ambigüedades. Por esto, te
                  presentamos a continuación, reglas básicas que debes
                  considerar al momento de utilizar la g.
                </li>
                <li className="mt-3">
                  En los verbos terminados en <b>ger</b>, <b>gir</b>, 
                  <b>giar</b>, y en las conjugaciones y derivados de estos
                  verbos que lo requieran.
                </li>

                <li className="mt-3">
                  <span className="pAmarillo">Ejemplos</span>: De proteger,
                  protegiendo, protegerán; de exigir, exigido, exigencia; de
                  elogiar, elogio, elogiemos.
                  <br />
                  <span className="pRojo">Excepción</span>: El verbo{' '}
                  <b>tejer</b>
                  constituye una excepción a esta regla.
                </li>
              </ul>
             
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaUnoView
