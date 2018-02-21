import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Grid} from 'react-bootstrap';
import mensuration from '../imgs/icon_mensuration.png'
import ButtonNormal from "../components/Buttons/ButtonNormal";
import RadioButton from "../components/Input/RadioButton";
import InputText from "../components/Input/InputText"
import Board from "../components/Board";
import cookie from 'react-cookies';


class MesInfosPersoHomme extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onTest = this.onTest.bind(this);
        this.selectGendre = this.selectGendre.bind(this);
    }

    state = {
        prenom: cookie.load("prenom"),
        adresseEMail: cookie.load("userEmail"),
        mdp: cookie.load("passwd"),
        tourDePoitrine: cookie.load("tourDePoitrine"),
        tourDeTaille: cookie.load("tourDeTaille"),
        tourDeHanches: cookie.load("tourDeHanches"),
        longueurDesBras: cookie.load("longueurDesBras"),
        longueurDesJambes:cookie.load("longueurDesJambes"),
        tourDeCou: cookie.load("tourDeCou"),
        gendre:"Homme"
    };

    onClick() {
        const {history} = this.props;

        cookie.remove('soutienGorge');
        cookie.save('userEmail',this.state.adresseEMail);
        cookie.save('passwd',this.state.mdp);
        cookie.save('prenom',this.state.prenom);
        cookie.save('tourDePoitrine',this.state.tourDePoitrine);
        cookie.save('tourDeTaille',this.state.tourDeTaille);
        cookie.save('tourDeHanches',this.state.tourDeHanches);
        cookie.save('longueurDesBras',this.state.longueurDesBras);
        cookie.save('longueurDesJambes',this.state.longueurDesJambes);
        cookie.save('tourDeCou',this.state.tourDeCou);
        cookie.save('gendre',this.state.gendre);

        history.push("/");
    }

    onTest(){
        console.log(this.state);
    }

    selectGendre(text) {
        const {history} = this.props;
        if (text === "Une Femme") {
            history.push("/mesInfosPersoFemme");
        }
        else {
            history.push("/mesInfosPersoHomme");
        }
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
                                    <RadioButton name="gender" checked="" onClick={this.selectGendre} text="Une Femme"/>
                                </Col>
                                <Col md={4}>
                                    <RadioButton name="gender" checked="checked" onClick={this.selectGendre} text="Un Homme"/>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col md={4}>
                                    <InputText type="text" text="Prénom" unit="" save="prenom" onChange={this.onChange} default={this.state.prenom}/>
                                </Col>
                                <Col md={4}>
                                    <InputText type="text" text="Adresse E-mail" unit="" save="adresseEMail" default={this.state.adresseEMail}
                                               onChange={this.onChange}/>
                                </Col>
                                <Col md={4}>
                                    <InputText type="password" text="Mot de passe" unit="" save="mdp" default={this.state.mdp} onChange={this.onChange}/>
                                </Col>
                            </Row>
                            <hr style={{borderTop: 1+"px solid #ccc"}}/>
                            <img src={mensuration} className="icon_mensuration" alt="logo"/>
                            <font style={{color: "#cc9900", fontSize: "20px"}}><strong>Vos mensurations</strong></font>
                            <Row>
                                <Col md={4}>
                                    <InputText type="text" text="Tour De Poitrine" unit="cm" save="tourDePoitrine" default={this.state.tourDePoitrine}
                                               onChange={this.onChange}/>
                                </Col>
                                <Col md={4}>
                                    <InputText type="text" text="Tour De Taille" unit="cm" save="tourDeTaille" default={this.state.tourDeTaille}
                                               onChange={this.onChange}/>
                                </Col>
                                <Col md={4}>
                                    <InputText type="text" text="Tour De Hanches" unit="cm" save="tourDeHanches" default={this.state.tourDeHanches}
                                               onChange={this.onChange}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={4}>
                                    <InputText type="text" text="Longueur Des Bras" unit="cm" save="longueurDesBras" default={this.state.longueurDesBras}
                                               onChange={this.onChange}/>
                                </Col>
                                <Col md={4}>
                                    <InputText type="text" text="Longueur Des Jambes" unit="cm" save="longueurDesJambes" default={this.state.longueurDesJambes}
                                               onChange={this.onChange}/>
                                </Col>
                                <Col md={4}>
                                    <InputText type="text" text="Tour De Cou" unit="cm" save="tourDeCou"default={this.state.tourDeCou}
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

MesInfosPersoHomme.propTypes = {
    history: PropTypes.object.isRequired,
    closePopup:PropTypes.func,
};

export default MesInfosPersoHomme;