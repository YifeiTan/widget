import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import AjoutePanier from './pages/ajoutePanier'
import ConnaissezMensuration from './pages/connaissezMensuration'
import Connexion from './pages/connexion'
import ConseilTaille from './pages/conseilTaille'
import ConseilTailleMensurations from './pages/conseilTailleMensurations'
import Erreur from './pages/erreur'
import Felicitations from './pages/felicitations'

import MesInfosPerso from './pages/mesInfosPerso'

import MesInfosPersoHomme from './pages/mesInfosPersoHomme'
import MesInfosPersoFemme from './pages/mesInfosPersoFemme'
import RenseignerInfosBas from './pages/renseignerInfosBas'
import RenseignerMensurations from './pages/renseignerMensurations'
import RenseignezMensurationsPourConnaitre from './pages/renseignezMensurationsPourConnaitre'
import SauvegardezInformations from './pages/sauvegardezInformations'

import './App.css';

class Widget extends Component {
    /*
        static pushToRoot() {
            for (var i = 0; i < history.length; i++) {
                history.back();
            }
        }
    */
    render() {
        return (
            <div className="widget" style={{paddingRight: "40%", paddingBottom: "40%"}}>
                <Router>
                    <div style={{width: 166.7 + "%"}}>
                        <Route exact path="/"
                               render={(props) => (
                                   <ConnaissezMensuration {...props} closePopup={this.props.closePopup}/>
                               )}/>
                        <Route path="/AjoutePanier" render={(props) => (
                            <AjoutePanier {...props} closePopup={this.props.closePopup}/>
                        )}/>
                        <Route path="/Connexion" render={(props) => (
                            <Connexion {...props} closePopup={this.props.closePopup}/>
                        )}/>
                        <Route path="/ConseilTaille"
                               render={(props) => (<ConseilTaille {...props} closePopup={this.props.closePopup}/>
                               )}/>
                        <Route path="/ConseilTailleMensurations"
                               render={(props) => (<ConseilTailleMensurations {...props}
                                                                              closePopup={this.props.closePopup}/>
                               )}/>
                        <Route path="/Erreur"
                               render={(props) => (<Erreur {...props} closePopup={this.props.closePopup}/>
                               )}/>
                        <Route path="/Felicitations"
                               render={(props) => (<Felicitations {...props} closePopup={this.props.closePopup}/>
                               )}/>
                        <Route path="/MesInfosPerso"
                               render={(props) => (<MesInfosPerso {...props} closePopup={this.props.closePopup}/>
                               )}/>
                        <Route path="/MesInfosPersoHomme"
                               render={(props) => (<MesInfosPersoHomme {...props} closePopup={this.props.closePopup}/>
                               )}/>
                        <Route path="/MesInfosPersoFemme"
                               render={(props) => (<MesInfosPersoFemme {...props} closePopup={this.props.closePopup}/>
                               )}/>
                        <Route path="/RenseignerInfosBas" render={(props) => (<RenseignerInfosBas {...props}
                                                                                                  closePopup={this.props.closePopup}/>
                        )}/>
                        <Route path="/RenseignerMensurations" render={(props) => (<RenseignerMensurations {...props}
                                                                                                          closePopup={this.props.closePopup}/>
                        )}/>
                        <Route path="/RenseignezMensurationsPourConnaitre"
                               render={(props) => (
                                   <RenseignezMensurationsPourConnaitre {...props} closePopup={this.props.closePopup}/>
                               )}/>
                        <Route path="/SauvegardezInformations" render={(props) => (<SauvegardezInformations {...props}
                                                                                                            closePopup={this.props.closePopup}/>
                        )}/>
                    </div>
                </Router>
            </div>
        );
    }
}

Widget.propTypes = {
    closePopup: PropTypes.func.isRequired,
};

export default Widget;
