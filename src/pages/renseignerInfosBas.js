import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Grid} from 'react-bootstrap';
import dressInfo from '../imgs/dressInfo.jpg';
import ButtonNormal from "../components/Buttons/ButtonNormal";
import ButtonReturn from "../components/Buttons/ButtonReturn";
import RadioButton from "../components/Input/RadioButton";
import InputText from "../components/Input/InputText"
import Board from "../components/Board";
import cookie from 'react-cookies';

class RenseignerInfosBas extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.selectGendre = this.selectGendre.bind(this);
        this.onClickGoBack = this.onClickGoBack.bind(this);
    }

    state = {
        age: 0,
        poid: 0,
        taille: 0,
        gendre:0,
        soutienGorge: ""
    };

    onClick() {
        const {history} = this.props;
        cookie.save('age', this.state.age);
        cookie.save('poid', this.state.poid);
        cookie.save('taille', this.state.taille);
        cookie.save('gendre', this.state.gendre);
        cookie.save('soutienGorge', this.state.soutienGorge);
        history.push("/ConseilTaille");
    }

    onClickGoBack() {
        const {history} = this.props;
        history.goBack();
    }

    onChange(value, save) {
        switch (save) {
            case "age":
                this.setState({age: value});
                break;
            case "poid":
                this.setState({poid: value});
                break;
            case "taille":
                this.setState({taille: value});
                break;
            case "soutienGorge":
                this.setState({soutienGorge: value});
                break;
            default:
                break;
        }
    }

    selectGendre(text) {
        if (text === "Une Femme") {
            this.setState({gendre:"Femme"});
        }
        else {
            this.setState({gendre:"Homme"})
        }
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
                            <div style={{marginTop: 8 + "%", paddingLeft: 10 + "%", width: 95 + "%"}}>
                                <p>Merci de renseigner vos mensurations afin de connaître votre taille.</p>
                                <br/>
                                <Row>
                                    <Col xs={4} md={3}>
                                        Vous êtes:
                                    </Col>
                                    <Col xs={4} md={3}>
                                        <RadioButton name="gender" checked="" onClick={this.selectGendre} text="Une Femme"/>
                                    </Col>
                                    <Col xs={4} md={3}>
                                        <RadioButton name="gender" checked="" onClick={this.selectGendre} text="Un Homme"/>
                                    </Col>
                                    <Col xs={4} md={3}>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col md={4}>
                                        <InputText type="text" text="Âge" unit="ans" save="age"
                                                   onChange={this.onChange}/>
                                    </Col>
                                    <Col md={4}>
                                        <InputText type="text" text="Poid" unit="kg" save="poid"
                                                   onChange={this.onChange}/>
                                    </Col>
                                    <Col md={4}>
                                        <InputText type="text" text="Taille" unit="cm" save="taille"
                                                   onChange={this.onChange}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={4}>
                                        <InputText type="text" text="Soutien-gorge" unit="" save="soutienGorge"
                                                   onChange={this.onChange}/>
                                    </Col>
                                </Row>
                                <br/>
                                <br/>
                                <br/>
                                <Row>
                                    <Col md={6}>
                                        <ButtonReturn onClick={this.onClickGoBack} text="Précédent"/>
                                    </Col>
                                    <Col md={6}>
                                        <ButtonNormal onClick={this.onClick} text="Connaître Ma Taille"/>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Board>
        );
    }
}

RenseignerInfosBas.propTypes = {
    history: PropTypes.object.isRequired,
    closePopup: PropTypes.func,
};

export default RenseignerInfosBas;