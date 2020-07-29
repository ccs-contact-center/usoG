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

import API_CCS from '../../services/API_CCS'
const API = new API_CCS()

class Formulario2View extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )

  constructor(props) {
    super(props)
    this.state = {
      pregunta1: '',
      pregunta2: '',
      pregunta3: '',
      pregunta4: '',
      pregunta5: '',
      pregunta6: '',
      acept: '',
      message: '',
    }
  }

  onChange(e) {
    if (e.target.name === 'acept') {
      this.setState({
        [e.target.name]: e.target.checked,
      })
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
  }

  async onSave(e) {
    /*
    Aqui hay varios puntos... primero, debes de cachar la respuesta de tu llamada a la api en algun lado, podria quedar asi:


     var respuesta = API.insertarEncuesta(this.state)
          .then((res)=>{
            return res[0].id
          })
          .then((res)=>{
            alert("Se guardo la encuesta número " + res[0].id) 
          })
          .error((err)=>{
            console.log("loggea si hay un error")
          })


    Pero hay otra manera mas facil y es haciendo async la función... Quedaría asi:
    

    (Linea 48) async onSave(e){ (... todo lo demas)

    
    */

    if (!this.validate()) {
      try {
        var respuesta = await API.insertarEncuesta(this.state)
        alert('Se guardo la encuesta número ' + respuesta[0].id)
      } catch (err) {
        console.log('loggea si hay un error')
      }
    } else {
    }
    //Aqui deberias hacer algo si no está validado el form
    //

    if (!this.validate()) {
      return
    }
    this.setState({
      message: 'Guardado.....',
    })
  }

  validate(e) {
    if (this.state.acept !== true) {
      this.setState({
        message: 'Dé en  aceptar',
      
      })
    }
    alert(this.state.message);
  }


  render() {
    return (
      <div className="animated fadeIn">
        

        <Row>
          <Col>
            <CardHeader className="">
              <h2> Encuesta: </h2>
            </CardHeader>
            <CardBody className="">
              <p>
                Partiendo de las siguientes afirmaciones usted evaluará su
                experiencia mientras utilizaba los servicios de capa. Para eso
                sería necesario que respondiera a cada aseveración utilizando
                una escala de 5 puntos, donde 5 es la mayor, significando que
                usted está Totalmente de Acuerdo con la expresión, 4- Algo de
                Acuerdo, 3- Ni de Acuerdo Ni en desacuerdo, 2- Algo en
                Desacuerdo, y 1- Totalmente en Desacuerdo.
              </p>
              <Form onSubmit={this.handleSubmit}>
                <div className="cajaA2" style={{ backgroundColor: '#d5d4d8' }}>
                  <FormGroup tag="fieldset">
                    <legend className="col-form-label ml-2">
                      <b>¿El acceso al curso resultó fácil?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta1"
                          id="pregunta1"
                          value="1"
                          onChange={this.onChange.bind(this)}
                          required
                        />{' '}
                        Excelente
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta1"
                          id="pregunta1"
                          value="2"
                          onChange={this.onChange.bind(this)}
                          required
                        />{' '}
                        Bueno
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta1"
                          id="pregunta1"
                          value="3"
                          onChange={this.onChange.bind(this)}
                          required
                        />{' '}
                        Malo
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta1"
                          id="pregunta1"
                          value="4"
                          onChange={this.onChange.bind(this)}
                          required
                        />{' '}
                        Pésimo
                      </Label>
                    </FormGroup>
                  </FormGroup>
                </div>
                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset">
                    <legend className="col-form-label ml-2">
                      <b>
                        ¿El material que se proporcionó en el curso fue el
                        adecuado para el entendimiento del mismo?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta2"
                          id="pregunta2"
                          value="1"
                          onChange={this.onChange.bind(this)}
                          required
                        />{' '}
                        Totalmente de acuerdo
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta2"
                          id="pregunta2"
                          value="2"
                          onChange={this.onChange.bind(this)}
                          required
                        />{' '}
                        De acuerdo
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta2"
                          id="pregunta2"
                          value="3"
                          onChange={this.onChange.bind(this)}
                          required
                        />{' '}
                        En desacuerdo
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta2"
                          id="pregunta2"
                          value="4"
                          onChange={this.onChange.bind(this)}
                          required
                        />{' '}
                        Totalmente en desacuerdo
                      </Label>
                    </FormGroup>
                  </FormGroup>
                </div>
                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset">
                    <legend className="col-form-label ml-2">
                      <b>
                        ¿Considero que comprendí adecuadamente todos los temas
                        abordaos y no me quedaron dudas?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta3"
                          id="pregunta3"
                          value="1"
                          onChange={this.onChange.bind(this)}
                          required
                        />{' '}
                        Totalmente de acuerdo
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta3"
                          id="pregunta3"
                          value="2"
                          onChange={this.onChange.bind(this)}
                          required
                        />{' '}
                        De acuerdo
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta3"
                          id="pregunta3"
                          value="3"
                          onChange={this.onChange.bind(this)}
                          required
                        />{' '}
                        En desacuerdo
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta3"
                          id="pregunta3"
                          value="4"
                          onChange={this.onChange.bind(this)}
                          required
                        />{' '}
                        Totalmente en desacuerdo
                      </Label>
                    </FormGroup>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset">
                    <legend className="col-form-label ml-2">
                      <b>
                        ¿La plataforma del curso es amigable y no presentó
                        fallas en su funcionamiento?
                      </b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta4"
                          id="pregunta4"
                          value="1"
                          onChange={this.onChange.bind(this)}
                          required
                        />{' '}
                        Totalmente de acuerdo
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta4"
                          id="pregunta4"
                          value="2"
                          onChange={this.onChange.bind(this)}
                          required
                        />{' '}
                        De acuerdo
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta4"
                          id="pregunta4"
                          value="3"
                          onChange={this.onChange.bind(this)}
                          required
                        />{' '}
                        En desacuerdo
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta4"
                          id="pregunta4"
                          value="4"
                          onChange={this.onChange.bind(this)}
                          required
                        />{' '}
                        Totalmente en desacuerdo
                      </Label>
                    </FormGroup>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup tag="fieldset">
                    <legend className="col-form-label ml-2">
                      <b>De manera general, ¿Cómo calificaría el cuso?</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </legend>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta5"
                          id="pregunta5"
                          value="1"
                          onChange={this.onChange.bind(this)}
                          required
                        />{' '}
                        Excelente
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta5"
                          id="pregunta5"
                          value="2"
                          onChange={this.onChange.bind(this)}
                          required
                        />{' '}
                        Bueno
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta5"
                          id="pregunta5"
                          value="3"
                          onChange={this.onChange.bind(this)}
                          required
                        />{' '}
                        Malo
                      </Label>
                    </FormGroup>
                    <FormGroup check>
                      <Label check>
                        <Input
                          type="radio"
                          name="pregunta5"
                          id="pregunta5"
                          value="4"
                          onChange={this.onChange.bind(this)}
                          required
                        />{' '}
                        Pésimo
                      </Label>
                    </FormGroup>
                  </FormGroup>
                </div>

                <div
                  className="cajaA2 mt-3"
                  style={{ backgroundColor: '#d5d4d8' }}
                >
                  <FormGroup>
                    <Label htmlFor="textarea">
                      <b> Deja tú opinión.</b>{' '}
                      <span style={{ color: 'red' }}>*</span>
                    </Label>
                    <Input
                      type="textarea"
                      name="pregunta6"
                      id="pregunta6"
                      value={this.state.about}
                      onChange={this.onChange.bind(this)}
                    />
                  </FormGroup>
                </div>

                <br />
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="acept"
                      id="acept"
                      value={this.state.acept}
                      onChange={this.onChange.bind(this)}
                    />
                    <p>Aceptar</p>
                  </Label>
                </FormGroup>
                <FormGroup check row>
                  <Col className="centrado-fila">
                    <Button
                      id="guardar"
                      name="guardar"
                      color="primary"
                      onClick={this.onSave.bind(this)}
                    >
                      Enviar
                    </Button>
                  </Col>
                  
                </FormGroup>

                {/* <p>{JSON.stringify(this.state)}</p> */}
              </Form>
            </CardBody>
          </Col>
        </Row>
      </div>
    )
  }
}
export default Formulario2View
