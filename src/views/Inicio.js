import React, { Component } from 'react'
import { Card, CardFooter } from 'reactstrap'
import withAuth from '../services/withAuth'
//import { connect } from 'react-redux';
//import { addProfile, setCampaign, darkTheme,setAvatar } from '../../Redux/Actions/profile';
import Navegador from './temarioViews/ComponentsNavTemari/Navegador'
import BienvenidaView from './temarioViews/BienvenidaView'
import TemaUnoView from './temarioViews/TemaUnoView'
import TemaDosView from './temarioViews/TemaDosView'
import TemaTresView from './temarioViews/TemaTresView'
import TemaCuatroView from './temarioViews/TemaCuatroView'
import TemaCincoView from './temarioViews/TemaCincoView'
import Actividad1View from './temarioViews/Actividad1View'
import Actividad2View from './temarioViews/Actividad2View'
import Actividad3View from './temarioViews/Actividad3View'
import DespedidaView from './temarioViews/DespedidaView'
import Despedida2View from './temarioViews/Despedida2View'
import Formulario2View from './temarioViews/formulario2View'

//import RecapitulacionView from './temarioViews/RecapitulacionView'

class Inicio extends Component {
  loading = () => (
    <div className="animated fadeIn pt-1 text-center">Cargando...</div>
  )
  state = {
    index: 0,
  }
  constructor() {
    super()
    this.setIndex = this.setIndex.bind(this)
  }

  setIndex(index) {
    this.setState({
      index: index,
    })
  }
  render() {
    return (
      <div className="animated fadeIn">
        <Card>
          {this.state.index === 0 ? (
            <BienvenidaView />
          ) : this.state.index === 1 ? (
            <TemaUnoView />
          ) : this.state.index === 2 ? (
            <TemaDosView />
          ) : this.state.index === 3 ? (
            <TemaTresView />
          ) : this.state.index === 4 ? (
            <TemaCuatroView />
          ) : this.state.index === 5 ? (
            <TemaCincoView />
          ) : this.state.index === 6 ? (
            <Actividad1View />
          ) : this.state.index === 7 ? (
            <Actividad2View />
          ) : this.state.index === 8 ? (
            <Actividad3View />
          ) : this.state.index === 9 ? (
            <DespedidaView />
          ) : this.state.index === 10 ? (
            <Despedida2View />
          ) : this.state.index === 11 ? (
            <Formulario2View />
          ) : null}
          <br />
          <CardFooter>
            <Navegador handleNavigation={this.setIndex} maxIndex={10} />
          </CardFooter>
        </Card>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     profile: state.profile.profile,
//     campaign: state.campaign.campaign,
//     darkTheme: state.darkTheme.darkTheme
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     addProfile: (name) => {
//       dispatch(addProfile(name))
//     },
//     setCampaign: (id) => {
//       dispatch(setCampaign(id))
//     },
//     darkTheme: (isDarkTheme) => {
//       dispatch(darkTheme(isDarkTheme))
//     },
//     setAvatar: (data) => {
//       dispatch(setAvatar(data))
//     }

//   }
// }

//export default connect(mapStateToProps, mapDispatchToProps)(withAuth(Inicio));
export default withAuth(Inicio)
