import React, {Component} from 'react';
import dressInfo from '../imgs/dressInfo.jpg';
import ButtonNormal from "../components/Buttons/ButtonNormal";
import PropTypes from 'prop-types';
import {Row, Col, Grid} from 'react-bootstrap';
import Board from "../components/Board";

class ConnaissezMensuration extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onClick2 = this.onClick2.bind(this);
    }

    onClick() {
        const {history} = this.props;
        history.push("/RenseignerMensurations");
    }

    onClick2() {
        const {history} = this.props;
        history.push("/RenseignerInfosBas");
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
                                    <div style={{marginTop: 24 + "%", paddingLeft: 0 + "%", width: 60 + "%"}}>
                                        <Row>
                                            Souhaitez-vous prendre / Connaissez-vous vos mesuration?
                                        </Row>
                                        <br/>
                                        <Row>
                                            <Col md={6}>
                                                <ButtonNormal onClick={this.onClick} text="OUI"/>
                                            </Col>
                                            <Col md={6}>
                                                <ButtonNormal onClick={this.onClick2} text="NON"/>
                                            </Col>
                                        </Row>
                                    </div>
                                </center>
                            </Col>
                        </Row>
                    </Grid>
                </Board>
        );
    }
}

ConnaissezMensuration.propTypes = {
    history: PropTypes.object.isRequired,
    closePopup:PropTypes.func,
};

export default ConnaissezMensuration;