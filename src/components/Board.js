import React, {Component} from 'react';
import '../popin.css';
import close_icon from '../imgs/close_icon.jpg';
import dior from '../imgs/dior.jpg';
import asmodine from '../imgs/asmodine.png';
import {Row, Col, Grid} from 'react-bootstrap';
import ButtonLogin from "./Buttons/ButtonLogin";
import PropTypes from 'prop-types';

class Board extends Component {
    constructor(props) {
        super(props);
        this.onClickConnexion = this.onClickConnexion.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }

    onClickConnexion() {
        const {history} = this.props;
        history.push("/Connexion");
    }

    closePopup(){
        const {history} = this.props;
        this.props.closePopup();
        history.push("/");
    }

    render(){
        return(<div className='popup_inner'>
            <div className="App-header">
                <Grid>
                    <Row>
                        <Col xs={6} md={4}>
                            <img src={dior} style={{width: 12 + "%"}} className="company-logo"
                                 alt="logo"/>
                        </Col>
                        <Col xs={6} md={4} style={{textAlign: "left"}}>
                            <div className="conseiltaille">
                                <p>CONSEIL TAILLE</p>
                            </div>
                        </Col>
                        <Col xs={5} md={3} style={{textAlign: "right"}}>
                            <ButtonLogin onClick={this.onClickConnexion} text="Connexion"/>
                        </Col>
                        <Col xs={1} md={1}>
                        </Col>
                    </Row>
                    <img src={close_icon} alt={"close"} onClick={this.closePopup} style={{position:"absolute",zIndex:1,right:"0.5%",top:"0.5%"}}/>
                </Grid>
            </div>
            <div className="App-content">
                {this.props.children}
            </div>
            <div className="App-footer">
                Powered by<img src={asmodine} style={{width: 8 + "%"}} alt="logo"/>
            </div>
        </div>)
    }

}

Board.propTypes = {
    history: PropTypes.object.isRequired,
    closePopup:PropTypes.func,
    onClick: PropTypes.func,
    text: PropTypes.string
};

export default Board;
