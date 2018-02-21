import React, {Component} from 'react';
import dressInfo from '../imgs/dressInfo.jpg';
import ButtonNormal from "../components/Buttons/ButtonNormal";
import circle from '../imgs/circle-01.png'
import PropTypes from 'prop-types';
import {Row, Col, Grid} from 'react-bootstrap';
import Board from "../components/Board";
import cookie from 'react-cookies';

class ConseilTaille extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = {progress: 0};
    }

    onClick() {
        const {history} = this.props;
        history.push("/AjoutePanier");
    }

    componentDidMount() {
        this.setState({progress: 50});
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
                                <div style={{marginTop: 8 + "%", paddingLeft: 0 + "%", width: 69 + "%"}}>
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
                                    <Bar progress={this.state.progress}>
                                        <p style={{fontSize:"15px",color:"#FFF"}} >fiabilité {this.state.progress} %</p>
                                    </Bar>
                                    <br/>
                                    <div style={{fontSize:"10px", width:"80%",color:"#aaaaaa"}}>80% des personnes possèdant les mêmes informations que vous ont acheté cette t-shiirt dans cette taille sans le renvoyer</div>
                                    <br/>
                                    <br/>
                                    <p>Cette taille est une estimation basée sur des données.</p>
                                    <p>vous souhaitez une recommandation plus précise</p>
                                    <br/>
                                    <ButtonNormal onClick={this.onClick} text="AJOUTER AU PANIER"/>
                                </div>
                            </center>
                        </Col>
                    </Row>
                </Grid>
            </Board>
        );
    }
}

class Bar extends Component {
    render() {
        return (
            <div className="bar" style={{
                width: "90%",
                height: "30px",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                textAlign: "left"
            }}>
                <div className="progress" style={{
                    width: `${this.props.progress}%`,
                    backgroundColor: "#CE9800",
                    borderRadius: "4px",
                    transition: "width 700ms ease-in-out",
                    height: "100%",
                    paddingTop:"1%",
                    paddingLeft:((this.props.progress/2)-10)+"%"
                }}>
                    {this.props.children}
                </div>
            </div>)
    }
}

ConseilTaille.propTypes = {
    history: PropTypes.object.isRequired,
    closePopup: PropTypes.func,
};

export default ConseilTaille;