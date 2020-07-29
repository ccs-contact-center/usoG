import React, { Component } from 'react'
import { ReactSortable } from 'react-sortablejs'
import Nota from './notasReferencia'
import { Row, Col } from 'reactstrap'
import tabla01 from '../../../assets/img/ImgEtiquetaTelefonica/tabla01.jpg'

class Actividad1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          id: '1',
          name: 'A',
        },
        {
          id: '2',
          name: 'B',
        },
        {
          id: '3',
          name: 'C',
        },
        {
          id: '4',
          name: 'D',
        },
      ],
      list2: [
        {
          id: '5',
          name: '	A',
        },
        {
          id: '6',
          name: 'B',
        },
        {
          id: '7',
          name: '	C',
        },
        {
          id: '8 ',
          name: '	D',
        },
      ],
      list3: [],
      list4: [],
      list5: [],
      list6: [],
      list7: [],
      list8: [],
      list9: [],
      list10: [],
    }
  }

  render() {
    return (
      <Row className="  centrado-fila ">
        <Col xs="7">
          <div className="card bg-fondo-btn2">
            <h6 className="text-center text-white mt-2">Terminos</h6>
            <div className="centrado-fila bgImgTabla">
              <div style={{paddingTop:'90px'}}>
                <ReactSortable
                  list={this.state.list}
                  setList={(newState) => this.setState({ list: newState })}
                  group="shared-group-name"
                  style={{ cursor: 'pointer' }}
                >
                  {this.state.list.map((item) => (
                    <div key={item.id} style={{marginBottom:'60px'}}>
                      <div className="card  m-3 cursor-draggable text-center">
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </div>
              <div>
                <img
                  src={tabla01}
                  style={{ width: 490 }}
                  alt="tabla01.png"
                  className="img-fluid  "
                />
              </div>

              <div style={{paddingTop:'90px'}}>
                <ReactSortable
                  list={this.state.list2}
                  setList={(newState) => this.setState({ list2: newState })}
                  group="shared-group-name"
                  style={{ cursor: 'pointer' }}
                >
                  {this.state.list2.map((item) => (
                    <div key={item.id}  style={{marginBottom:'60px'}}>
                      <div className="card  m-3 cursor-draggable text-center">
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </div>
            </div>
          </div>
        </Col>

        <Col xs="5">
          <div className="card   pl-4 pr-4">
            <h6 className=" mt-2">¡Arrastra aqui!</h6>

            <Row className="centrado-fila pl-2 pr-2 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white "
                style={{ padding: '10px' }}
              >
                <ReactSortable
                  list={this.state.list3}
                  setList={(newState) => this.setState({ list3: newState })}
                  group="shared-group-name"
                >
                  {this.state.list3.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center "
                        style={{ marginBottom: '0px' }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: '0px' }}>
                  ¡Necesito que me resuelvas porque tengo mucho tiempo ya en
                  línea!
                </p>
              </Col>
            </Row>
            <Row className="centrado-fila pl-2 pr-2 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white"
                style={{ padding: '10px' }}
              >
                <ReactSortable
                  list={this.state.list4}
                  setList={(newState) => this.setState({ list4: newState })}
                  group="shared-group-name"
                >
                  {this.state.list4.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center"
                        style={{ marginBottom: '0px' }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: '0px' }}>
                  ¿Me estás diciendo que debo pagar más por el servicio?
                </p>
              </Col>
            </Row>
            <Row className="centrado-fila pl-2 pr-2 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white"
                style={{ padding: '10px' }}
              >
                <ReactSortable
                  list={this.state.list5}
                  setList={(newState) => this.setState({ list5: newState })}
                  group="shared-group-name"
                >
                  {this.state.list5.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center"
                        style={{ marginBottom: '0px' }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: '0px' }}>
                  He repetido mil veces mi situación, ¿tu sí me ayudaras?
                </p>
              </Col>
            </Row>
            <Row className="centrado-fila pl-2 pr-2 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white"
                style={{ padding: '10px' }}
              >
                <ReactSortable
                  list={this.state.list6}
                  setList={(newState) => this.setState({ list6: newState })}
                  group="shared-group-name"
                >
                  {this.state.list6.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center"
                        style={{ marginBottom: '0px' }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: '0px' }}>
                  Quiero que me digas cuanto debo de mi servicio
                </p>
              </Col>
            </Row>
            <Row className="centrado-fila pl-2 pr-2 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white"
                style={{ padding: '10px' }}
              >
                <ReactSortable
                  list={this.state.list7}
                  setList={(newState) => this.setState({ list7: newState })}
                  group="shared-group-name"
                >
                  {this.state.list7.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center"
                        style={{ marginBottom: '0px' }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: '0px' }}>
                  Creo que no es necesario tantos datos que te estoy dando.
                </p>
              </Col>
            </Row>
            <Row className="centrado-fila pl-2 pr-2 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white"
                style={{ padding: '10px' }}
              >
                <ReactSortable
                  list={this.state.list8}
                  setList={(newState) => this.setState({ list8: newState })}
                  group="shared-group-name"
                >
                  {this.state.list8.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center"
                        style={{ marginBottom: '0px' }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: '0px' }}>
                  Muchas gracias por la información que me diste.
                </p>
              </Col>
            </Row>
            <Row className="centrado-fila pl-2 pr-2 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white"
                style={{ padding: '10px' }}
              >
                <ReactSortable
                  list={this.state.list9}
                  setList={(newState) => this.setState({ list9: newState })}
                  group="shared-group-name"
                >
                  {this.state.list9.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center"
                        style={{ marginBottom: '0px' }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: '0px' }}>¿De donde me llamas?</p>
              </Col>
            </Row>
            <Row className="centrado-fila pl-2 pr-2 bg-fondo-btn2 rounded mb-3">
              <Col
                xs="2"
                className="border border-white"
                style={{ padding: '10px' }}
              >
                <ReactSortable
                  list={this.state.list10}
                  setList={(newState) => this.setState({ list10: newState })}
                  group="shared-group-name"
                >
                  {this.state.list10.map((item) => (
                    <div key={item.id}>
                      <div
                        className="card cursor-draggable text-center"
                        style={{ marginBottom: '0px' }}
                      >
                        <div className="text-dark">{item.name}</div>
                      </div>
                    </div>
                  ))}
                </ReactSortable>
              </Col>
              <Col xs="10">
                <p style={{ marginBottom: '0px' }}>
                  Desde antes que nacieras tengo este problema, pásame con tu
                  supervisor!!
                </p>
              </Col>
            </Row>
          </div>
        </Col>

        <Col xs="12" className=" mt-3  centrado-fila">
          <button className="btn btn-primary">Enviar</button>
        </Col>
        <Col xs="12" className=" mt-3 centrado-fila ">
          <Nota
            title1="Instrucción:"
            content1="Arrastre los las Letras correctas al recuadro."
          />
        </Col>
      </Row>
    )
  }
}

export default Actividad1
