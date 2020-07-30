import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'

//import tabla01 from '../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class TemaDosView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn ">
        <CardHeader className="text-left">
          <h3> Uso de correcto de la V</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12">
              <ul>
                <li>
                  Finalmente los adjetivos llanos acabados en -<b>ava</b>, -
                  <b>ave</b>, -<b>avo</b>, -<b>eva</b>, -<b>eve</b>, -<b>evo</b>
                  , -<b>iva</b>, -<b>ivo</b> por ejemplo: Bra<b>v</b>a, bre
                  <b>v</b>e, le<b>v</b>e, etc.
                </li>
                <li className="mt-3">
                  <span className="pRojo"><b>Recuerda</b></span>! Palabras llanas son
                  las que tienen el sonido fuerte o sílaba tónica en la
                  penúltima sílaba.
                </li>
              </ul>
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
