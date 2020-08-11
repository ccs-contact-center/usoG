import React, { Component } from 'react'
import {
  CardBody,
  CardHeader,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap'
import swal from "sweetalert"
import AuthService from '../../services/AuthService'
import actividad2 from '../../assets/img/usoG/actividad2.png'
import API_CCS from '../../services/API_CCS'
const API = new API_CCS()

class ActividadView extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(props) {
    super(props)
    this.Auth = new AuthService()
    this.state = {
      palabra1Acuerto1: '',
      palabra1Acuerto2: '',
      palabra1Acuerto3: '',
      palabra2Acuerto1: '',
      palabra2Acuerto2: '',
      palabra2Acuerto3: '',
      palabra3Acuerto1: '',
      palabra3Acuerto2: '',
      palabra3Acuerto3: '',
      palabra4Acuerto1: '',
      palabra4Acuerto2: '',
      palabra4Acuerto3: '',
      palabra5Acuerto1: '',
      palabra5Acuerto2: '',
      palabra5Acuerto3: '',
      palabra6Acuerto1: '',
      palabra6Acuerto2: '',
      palabra6Acuerto3: '',
      id_ccs: this.Auth.getProfile().id_ccs,
      form: 'usoG-2',
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  async onSave(e) {
    try {
      var respuesta = await API.guardaActividad(this.state);

      swal({
        title: "Status Actividad",
        text: "Se guardo la actividad: 2, con id: " + respuesta[0].id,
        icon: "success",
        dangerMode: true,
        button: {
          text: "Aceptar",
          value: true,
          visible: true,
          className: "btn btn-primary",
          reset: true,
        },
      });
      
      // alert("Se guardo la actividad: 1, con id: " + respuesta[0].id);
    } catch (err) {
      swal({
        title: "Status Actividad",
        text: "No se guardo la actividad: 2, Intenta de nuevo. ",
        icon: "error",
        dangerMode: true,
        button: {
          text: "Cerrar",
          value: true,
          visible: true,
          className: "btn btn-primary ",
        },
      });
      console.log("loggea si hay un error");
    }
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col>
            <CardHeader className="">
              <h2> Evaluación 2: </h2>
            </CardHeader>
            <CardBody className="">
              <Row className="centrado-fila">
                <Col xs="9">
                  <p>
                    2.- Sabrías escribir palabras que acaban en <b>ger</b>, 
                    <b>gir</b>, <b>giar</b> y otras palabras que acaben en{' '}
                    <b>gia</b> y <b>gio</b>. Pon tres ejemplos de cada una.
                  </p>
                </Col>
                <Col xs="3">
                  <img
                    src={actividad2}
                    style={{ width: 150 }}
                    alt="actividad2 "
                    className="img-fluid animated  bounceInRight delay-1s"
                  />
                </Col>
              </Row>

              <Form>
                <div className="cajaA2" style={{ backgroundColor: '#d5d4d8' }}>
                  <FormGroup>
                    <Row>
                      <Col xs="4">
                        <Label for="palabra1Acuerto1">
                          <b>ger </b> 1
                        </Label>
                        <Input
                          type="text"
                          name="palabra1Acuerto1"
                          id="palabra1Acuerto1"
                          value={this.state.palabra1Acuerto1}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra1Acuerto2">
                          <b>ger </b> 2
                        </Label>
                        <Input
                          type="text"
                          name="palabra1Acuerto2"
                          id="palabra1Acuerto2"
                          value={this.state.palabra1Acuerto2}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra1Acuerto3">
                          <b>ger </b> 3
                        </Label>
                        <Input
                          type="text"
                          name="palabra1Acuerto3"
                          id="palabra1Acuerto3"
                          value={this.state.palabra1Acuerto3}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup>
                    <Row>
                      <Col xs="4">
                        <Label for="palabra2Acuerto1">
                          <b>gir</b> 1
                        </Label>
                        <Input
                          type="text"
                          name="palabra2Acuerto1"
                          id="palabra2Acuerto1"
                          value={this.state.palabra2Acuerto1}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra2Acuerto2">
                          <b>gir</b> 2
                        </Label>
                        <Input
                          type="text"
                          name="palabra2Acuerto2"
                          id="palabra2Acuerto2"
                          value={this.state.palabra2Acuerto2}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra2Acuerto3">
                          <b>gir</b> 3
                        </Label>
                        <Input
                          type="text"
                          name="palabra2Acuerto3"
                          id="palabra2Acuerto3"
                          value={this.state.palabra2Acuerto3}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup>
                    <Row>
                      <Col xs="4">
                        <Label for="palabra3Acuerto1">
                          <b>giar</b> 1
                        </Label>
                        <Input
                          type="text"
                          name="palabra3Acuerto1"
                          id="palabra3Acuerto1"
                          value={this.state.palabra3Acuerto1}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra3Acuerto2">
                          <b>giar</b> 2
                        </Label>
                        <Input
                          type="text"
                          name="palabra3Acuerto2"
                          id="palabra3Acuerto2"
                          value={this.state.palabra3Acuerto2}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra3Acuerto3">
                          <b>giar</b> 3
                        </Label>
                        <Input
                          type="text"
                          name="palabra3Acuerto3"
                          id="palabra3Acuerto3"
                          value={this.state.palabra3Acuerto3}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup>
                    <Row>
                      <Col xs="4">
                        <Label for="palabra4Acuerto1">
                          <b>gia</b> 1
                        </Label>
                        <Input
                          type="text"
                          name="palabra4Acuerto1"
                          id="palabra4Acuerto1"
                          value={this.state.palabra4Acuerto1}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra4Acuerto2">
                          <b>gia</b> 2
                        </Label>
                        <Input
                          type="text"
                          name="palabra4Acuerto2"
                          id="palabra4Acuerto2"
                          value={this.state.palabra4Acuerto2}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra4Acuerto3">
                          <b>gia</b> 3
                        </Label>
                        <Input
                          type="text"
                          name="palabra4Acuerto3"
                          id="palabra4Acuerto3"
                          value={this.state.palabra4Acuerto3}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup>
                    <Row>
                      <Col xs="4">
                        <Label for="palabra5Acuerto1">
                          <b>gio</b> 1
                        </Label>
                        <Input
                          type="text"
                          name="palabra5Acuerto1"
                          id="palabra5Acuerto1"
                          value={this.state.palabra5Acuerto1}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra5Acuerto2">
                          <b>gio</b> 2
                        </Label>
                        <Input
                          type="text"
                          name="palabra5Acuerto2"
                          id="palabra5Acuerto2"
                          value={this.state.palabra5Acuerto2}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                      <Col xs="4">
                        <Label for="palabra5Acuerto3">
                          <b>gio</b> 3
                        </Label>
                        <Input
                          type="text"
                          name="palabra5Acuerto3"
                          id="palabra5Acuerto3"
                          value={this.state.palabra5Acuerto3}
                          onChange={this.onChange.bind(this)}
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                </div>
                
                <div className="centrado-fila mt-3">
                  <Button color="primary" onClick={this.onSave.bind(this)}>
                    Enviar
                  </Button>
                </div>
              </Form>

              <div>{/* <p>{JSON.stringify(this.state)}</p> */}</div>
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default ActividadView
