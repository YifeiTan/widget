import React, {Component} from 'react';
import dressInfo from '../imgs/dressInfo.jpg';
import circle from '../imgs/circle-01.png'
import shirt from '../imgs/shirt.png';
import line1 from '../imgs/line1.png';
import line2 from '../imgs/line2.png';
import line3 from '../imgs/line3.png';
import ButtonNormal from "../components/Buttons/ButtonNormal";
import PropTypes from 'prop-types';
import {Row, Col, Grid} from 'react-bootstrap';
import Board from "../components/Board";
import cookie from 'react-cookies';


class ConseilTailleMensurations extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    componentDidMount(){
        console.log(cookie.load('tourDePoitrine'));
        console.log(cookie.load('tourDeTaille'));
        console.log(cookie.load('tourDeHanches'));
        console.log(Number(cookie.load('tourDePoitrine'))+Number(cookie.load('tourDeTaille'))+Number(cookie.load('tourDeHanches')));
    }

    onClick() {
        const {history} = this.props;
        history.push("/AjoutePanier");
    }

    render() {
        return (
            <Board closePopup={this.props.closePopup} history={this.props.history}>
                <Grid>
                    <Row>
                        <Col xs={6} md={4}>
                            <img src={dressInfo} style={{paddingTop: 13 + "%", marginLeft: "10%"}} alt="logo"/>
                        </Col>
                        <Col xs={12} md={8}>
                            <center>
                                <div style={{
                                    marginTop: 6 + "%",
                                    paddingLeft: 0 + "%",
                                    width: 69 + "%",
                                    textAlign: "left"
                                }}>
                                    <div style={{textAlign: "center"}}>
                                        <p>
                                            <span style={{verticalAlign: "middle"}}>Pour cette t-shirt, nous vous conseillons la taille</span>
                                            <span style={{
                                                color: "white",
                                                fontSize: "150%",
                                                zIndex: 1,
                                                left: "22px",
                                                verticalAlign: "middle",
                                                position: "relative"
                                            }}>{parseInt(((Number(cookie.load('tourDePoitrine'))+Number(cookie.load('tourDeTaille'))+Number(cookie.load('tourDeHanches')))/7.8))}</span>
                                            <img src={circle}
                                                 style={{width: "52px", left: "-15px", position: "relative"}}
                                                 alt="logo"/>
                                        </p>
                                    </div>
                                    <br/>
                                    <div style={{textAlign: "center"}}>
                                        <div style={{height: "213px"}}>
                                            <img src={shirt} style={{width: "240px",position:"relative",left:"-122px"}} alt="logo"/>
                                            <p style={{position: "relative", zIndex: 8, top: "-180px", left: "50px"}}>
                                                <img
                                                    src={line1} style={{width: "170px", marginRight: "57px"}}
                                                    alt="logo"/><span
                                                style={{verticalAlign: "middle"}}>Le t-shirt est légçrement serrée à la poitrine</span>
                                            </p>
                                            <p style={{position: "relative", zIndex: 8, top: "-150px", left: "21px"}}>
                                                <img
                                                    src={line2} style={{width: "170px", marginRight: "57px"}}
                                                    alt="logo"/><span
                                                style={{verticalAlign: "middle"}}>Le t-shirt est bien ajustée à la taille</span>
                                            </p>
                                            <p style={{position: "relative", zIndex: 8, top: "-120px", left: "34px"}}>
                                                <img
                                                    src={line3} style={{width: "170px", marginRight: "57px"}}
                                                    alt="logo"/><span
                                                style={{verticalAlign: "middle"}}>Le t-shirt est un peu large aux hanches</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div style={{textAlign: "center"}}><ButtonNormal onClick={this.onClick}
                                                                                     text="AJOUTER AU PANIER"/></div>
                                </div>
                            </center>
                        </Col>
                    </Row>
                </Grid>
            </Board>
        );
    }
}

ConseilTailleMensurations.propTypes = {
    history: PropTypes.object.isRequired,
    closePopup: PropTypes.func,
};

export default ConseilTailleMensurations;