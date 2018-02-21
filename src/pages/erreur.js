import React, {Component} from 'react';
import dressInfo from '../imgs/dressInfo.jpg';
import ButtonNormal from "../components/Buttons/ButtonNormal";
import PropTypes from 'prop-types';
import {Row, Col, Grid} from 'react-bootstrap';
import Board from "../components/Board";

class Erreur extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const {history} = this.props;
        history.push("/");
    }

    render() {
        return (
            <Board closePopup={this.props.closePopup} history={this.props.history}>
                <Grid>
                    <Row>
                        <Col xs={6} md={4}>
                            <img src={dressInfo} style={{paddingTop: 13 + "%"}} alt="logo"/>
                        </Col>
                        <Col xs={12} md={8}>
                            <center>
                                <div style={{marginTop: 24 + "%", paddingLeft: 0 + "%", width: 60 + "%"}}>
                                    <Row>
                                        Nous somme désolés, aucune taille ne correspond à vos mensurations
                                    </Row>
                                    <br/>
                                    <ButtonNormal onClick={this.onClick} text="RETOURNEZ À L'ÉCRAN ACCUILLE"/>
                                </div>
                            </center>
                        </Col>
                    </Row>
                </Grid>

            </Board>
        );
    }
}

Erreur.propTypes = {
    history: PropTypes.object.isRequired,
    closePopup: PropTypes.func,
};

export default Erreur;