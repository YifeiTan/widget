import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Grid} from 'react-bootstrap';

import mensuration from '../imgs/icon_mensuration.png'

import ButtonNormal from "../components/Buttons/ButtonNormal";
import RadioButton from "../components/Input/RadioButton";
import InputText from "../components/Input/InputText"
import Board from "../components/Board";

class MesInfosPerso2 extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);

        this.onTest = this.onTest.bind(this);
    }

    state = {
        prenom: "",
        adresseEMail: "",
        mdp: "",
        age:"",
        poid:"",
        taille:"",
        soutienGorge:"",
        tourDePoitrine: "",
        tourDeTaille: "",
        tourDeHanches: "",
        longueurDesBras: "",
        longueurDesJambes: "",
        tourDeCou: "",
    };

    onClick() {
        const {history} = this.props;
        history.push("/");
    }

    onTest(){
        console.log(this.state);
    }

    onChange(value, save) {
        switch (save) {
            case "prenom":
                this.setState({prenom: value});
                break;
            case "adresseEMail":
                this.setState({adresseEMail: value});
                break;
            case "mdp":
                this.setState({mdp: value});
                break;
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
            case "tourDePoitrine":
                this.setState({tourDePoitrine: value});
                break;
            case "tourDeTaille":
                this.setState({tourDeTaille: value});
                break;
            case "tourDeHanches":
                this.setState({tourDeHanches: value});
                break;
            case "longueurDesBras":
                this.setState({longueurDesBras: value});
                break;
            case "longueurDesJambes":
                this.setState({longueurDesJambes: value});
                break;
            case "tourDeCou":
                this.setState({tourDeCou: value});
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <Board closePopup={this.props.closePopup} history={this.props.history}>
                    <Grid>
                        <div style={{marginTop: 4 + "%", paddingLeft: 0 + "%", width: 85 + "%"}}>
                            <p style={{color: "#cc9900", fontSize: "20px"}}><strong>Mes info perso</strong></p>
                            <Row>
                                <Col md={4} style={{padding: 1 + "%"}}>
                                    Vous êtes:
                                </Col>
                                <Col md={4}>
                                    <RadioButton name="gender" text="Une Femme"/>
                                </Col>
                                <Col md={4}>
                                    <RadioButton name="gender" text="Un Homme"/>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md={4}>
                                    <InputText type="text" text="Prénom" unit="" save="prenom" onChange={this.onChange}/>
                                </Col>
                                <Col md={4}>
                                    <InputText type="text" text="Adresse E-mail" unit="" save="adresseEMail"
                                               onChange={this.onChange}/>
                                </Col>
                                <Col md={4}>
                                    <InputText type="password" text="Mot de passe" unit="" save="mdp" onChange={this.onChange}/>
                                </Col>
                                <Col md={3}>
                                    <InputText type="text" text="Âge" unit="ans" save="age" onChange={this.onChange}/>
                                </Col>
                                <Col md={3}>
                                    <InputText type="text" text="Poid" unit="kg" save="poid" onChange={this.onChange}/>
                                </Col>
                                <Col md={3}>
                                    <InputText type="text" text="Taille" unit="cm" save="taille" onChange={this.onChange}/>
                                </Col>
                                <Col md={3}>
                                    <InputText type="text" text="Soutien-gorge" unit="" save="soutienGorge" onChange={this.onChange}/>
                                </Col>
                            </Row>
                            <hr style={{borderTop: 1+"px solid #ccc"}}/>
                            <img src={mensuration} className="icon_mensuration" alt="logo"/>
                            <font style={{color: "#cc9900", fontSize: "20px"}}><strong>Vos mensurations</strong></font>
                            <Row>
                                <Col md={4}>
                                    <InputText type="text" text="Tour De Poitrine" unit="cm" save="tourDePoitrine"
                                               onChange={this.onChange}/>
                                </Col>
                                <Col md={4}>
                                    <InputText type="text" text="Tour De Taille" unit="cm" save="tourDeTaille"
                                               onChange={this.onChange}/>
                                </Col>
                                <Col md={4}>
                                    <InputText type="text" text="Tour De Hanches" unit="cm" save="tourDeHanches"
                                               onChange={this.onChange}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <InputText type="text" text="Longueur Des Bras" unit="cm" save="longueurDesBras"
                                               onChange={this.onChange}/>
                                </Col>
                                <Col md={4}>
                                    <InputText type="text" text="Longueur Des Jambes" unit="cm" save="longueurDesJambes"
                                               onChange={this.onChange}/>
                                </Col>
                                <Col md={4}>
                                    <InputText type="text" text="Tour De Cou" unit="cm" save="tourDeCou"
                                               onChange={this.onChange}/>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md={6}>
                                    <ButtonNormal onClick={this.onClick} text="OUI"/>
                                </Col>
                                <Col md={6}>
                                    <ButtonNormal onClick={this.onTest} text="NON"/>
                                </Col>
                            </Row>
                        </div>
                    </Grid>
            </Board>
        );
    }
}

MesInfosPerso2.propTypes = {
    history: PropTypes.object.isRequired,
    closePopup:PropTypes.func,
};

export default MesInfosPerso2;