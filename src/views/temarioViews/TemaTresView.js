import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3>Uso de correcto de la G</h3>
        </CardHeader>
        <CardBody>
          <Row className="centrado-fila">
            <Col xs="12">
              <ul>
                <li>
                  En las mayoría de las palabras que incluyen el grupo 
                  <b>igi</b> o <b>agi</b>, a menos que sean derivadas de una
                  palabra que se escribe con j.
                  <br /> <span className="pAmarillo">Ejemplo</span>
                  : vertiginoso, original, magia y agitado.
                </li>
                <li className="mt-3">
                  Los sustantivos terminados en <b>v</b>.
                  <br /> <span className="pAmarillo">Ejemplo</span>: antología y
                  cirugía.
                  <br /> <span className="pRojo">Excepción</span>: las palabras
                  bujía, herejía, y otras poco usadas.
                </li>
              </ul>
              <p>
                ¿Sabrías ya distinguir a partir de ahora las palabras que se
                escriben con G y no con J de forma correcta?
              </p>
              <h3 className="text-center">
                <b>REALIZAREMOS UNA ACTIVIDAD</b>
              </h3>
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default TemaDosView
