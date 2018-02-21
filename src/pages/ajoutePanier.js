import React, {Component} from 'react';
import dressInfo from '../imgs/dressInfo.jpg';
import ButtonNormal from "../components/Buttons/ButtonNormal";
import PropTypes from 'prop-types';
import {Row, Col, Grid} from 'react-bootstrap';
import Board from "../components/Board";

class AjoutePanier extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const {history} = this.props;
        history.push("/SauvegardezInformations");
    }

    render() {
        return (
                <Board closePopup={this.props.closePopup} history={this.props.history}>
                    <Grid>
                        <Row>
                            <Col xs={6} md={4}>
                                <img src={dressInfo} style={{paddingTop: 13 + "%",marginLeft:"10%"}} alt="logo"/>
                            </Col>
                            <Col xs={12} md={8}>
                                <center>
                                    <div style={{marginTop: 8 + "%", paddingLeft: 0 + "%", width: 69 + "%"}}>
                                        <p style={{fontSize:30+"px",color:"#cc9900"}}>Votre article a bien été ajouté à votre panier</p>
                                        <p>Merci d'avoir utilisé notre conseil taille</p>
                                        <br/>
                                                <ButtonNormal onClick={this.onClick} text="Sauvegarder mes informations"/>
                                    </div>
                                </center>
                            </Col>
                        </Row>
                    </Grid>
                </Board>
        );
    }
}

AjoutePanier.propTypes = {
    history: PropTypes.object.isRequired,
    closePopup:PropTypes.func,
};

export default AjoutePanier;