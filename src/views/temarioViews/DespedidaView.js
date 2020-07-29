import React, { Component } from 'react'
import { CardBody, CardHeader, Col, Row } from 'reactstrap'
 import usoG from '../../assets/img/usoG/usoG.mp4'
import ReactPlayer from 'react-player'

class PresentacionView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  render() {
    return (
      <div className="animated fadeIn">
        <CardHeader className="text-left">
          <h3> Uso de correcto de la V</h3>
        </CardHeader>
        <CardBody className="">
          <Row>
            <Col xs="12" sm="12" md="12" className="centrado-fila mt-3">
                <ReactPlayer
                  className="animated bounceInRight delay-0s"
                  width="65%"
                  url={usoG}
                  controls
                />
            </Col>
          </Row>
        </CardBody>
      </div>
    )
  }
}
export default PresentacionView
