import React, { Component } from 'react'
import { Table } from 'reactstrap'
class Tabla1 extends Component {
  render() {
    return (
      <Table bordered style={{ border: 'solid 1px' }}>
        <tbody>
          <tr>
            <th colSpan={2} class=" text-center bgTableTitle text-white">
              FRASES DE CORTESÍA
            </th>
          </tr>
          <tr>
            <td
              className="paddingMarginBCero bgTableContent"
              style={{ border: 'solid 1px white' }}
            >
              <p className="">
                Permita un momento por favor.
                <br />
                Gracias por el tiempo de espera.
                <br />
                Gracias por esperar.
                <br />
                Le sigo atendiendo.
                <br />
                Por favor.
                <br />
                Que amable.
                <br />
                Sería tan gentil.
                <br />
                Gracias.
                <br />
                Sería tan amable.
                <br />
              </p>
            </td>
            <td
              className="paddingMarginBCero bgTableContent"
              style={{ border: 'solid 1px white' }}
            >
              <p className="paddingMarginBCero">
                Desde luego.
                <br />
                A sus ordenes.
                <br />
                Con gusto le informare(informo).
                <br />
                Es un placer atenderle.
                <br />
                Estamos para servirle.
                <br />
                No es ninguna molestia.
                <br />
                Me proporciona por favor.
                <br />
                Le atiendo con gusto.
              </p>
            </td>
          </tr>
          <tr>
            <th colSpan={2} class=" text-center bgTableTitle text-white">
              FRASES DE ESCUCHA ACTIVA
            </th>
          </tr>
          <tr>
            <td
              className="paddingMarginBCero bgTableContent"
              style={{ border: 'solid 1px white' }}
            >
              <p className="">
                Correcto.
                <br />
                De hecho.
                <br />
                Claro.
                <br />
                Bien.
                <br />
                Perfecto.
                <br />
                Por supuesto.
                <br />
                Muy bien.
              </p>
            </td>
            <td
              className="paddingMarginBCero bgTableContent"
              style={{ border: 'solid 1px white' }}
            >
              <p className="paddingMarginBCero">
                Comprometido.
                <br />
                Exacto.
                <br />
                Asi mismo.
                <br />
                Desde luego.
                <br />
                Por el momento.
              </p>
            </td>
          </tr>
          <tr>
            <th colSpan={2} class=" text-center bgTableTitle text-white">
              FRASES PARA GENERAR EMPATIA
            </th>
          </tr>
          <tr>
            <td
              className="paddingMarginBCero bgTableContent"
              style={{ border: 'solid 1px white' }}
            >
              <p className="">
                De acuerdo.
                <br />
                Comparto su punto de vista.
                <br />
                Entiendo.
                <br />
                Desde luego.
              </p>
            </td>
            <td
              className="paddingMarginBCero bgTableContent"
              style={{ border: 'solid 1px white' }}
            >
              <p className="paddingMarginBCero">
                Le ofrezco una disculpa.
                <br />
                Respeto su punto de vista.
                <br />
                Comprendo.
              </p>
            </td>
          </tr>
          <tr>
            <th colSpan={2} class=" text-center bgTableTitle text-white">
              FRASES PARA SOLICITAR INFORMACIÓN
            </th>
          </tr>
          <tr>
            <td
              className="paddingMarginBCero bgTableContent"
              style={{ border: 'solid 1px white' }}
            >
              <p className="">
                Me indica por favor.
                <br />
                Me indica que visualiza por favor.
              </p>
            </td>
            <td
              className="paddingMarginBCero bgTableContent"
              style={{ border: 'solid 1px white' }}
            >
              <p className="paddingMarginBCero">
                Por favor me puede proporcionar.
              </p>
            </td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default Tabla1
