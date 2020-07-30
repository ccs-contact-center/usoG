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
              <p>
                Ahora vienen las dos reglas ortográficas para la letra V un poco
                más complejas.
              </p>
              <ul>
                <li>
                  Las formas verbales que no contienen la letra b o v en su
                  infinitivo pero en otras formas contienen el sonido B, por
                  ejemplo: tu<b>v</b>imos (perteneciente al verbo tener), Estu
                  <b>v</b>e (perteneciente al verbo estar), hay muchas formas
                  más.
                </li>
              </ul>
              <ul className="centrado-fila">
                <li>
                  <span className="pRojo"> Ojo!</span> Se exceptúan las formas
                  del <b>pretérito imperfecto de indicativo</b> de los verbos de
                  la primera conjugación como por ejemplo Cantar (Canta<b>b</b>
                  a) o el verbo ir (iba).
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
