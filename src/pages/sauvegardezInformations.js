import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Grid} from 'react-bootstrap';
import ButtonNormal from "../components/Buttons/ButtonNormal";
import RadioButton from "../components/Input/RadioButton";
import InputText from "../components/Input/InputText"
import Board from "../components/Board";
import cookie from 'react-cookies';


class SauvegardezInformations extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.selectGendre = this.selectGendre.bind(this);
    }

    state = {
        prenom: "",
        adressEMail: "",
        mdp: "",
        gendre:""
    };

    onClick() {
        const {history} = this.props;
        cookie.save('userEmail',this.state.adresseEMail);
        cookie.save('passwd',this.state.mdp);
        cookie.save('prenom',this.state.prenom);
        cookie.save('gendre',this.state.gendre);
        history.push("/RenseignezMensurationsPourConnaitre");
    }

    onChange(value, save) {
        switch (save) {
            case "prenom":
                this.setState({prenom: value});
                break;
            case "adressEMail":
                this.setState({adressEMail: value});
                break;
            case "mdp":
                this.setState({mdp: value});
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
                <center>
                    <Grid>
                        <div style={{marginTop: 5 + "%", width: 85 + "%"}}>

                            <p>Sauvegardez vos informations pour les retrouver directement lors de votre prochaine
                                visite!</p>

                            <br/>
                            <br/>
                            <Row>
                                <Col xs={4} md={2}>
                                </Col>
                                <Col xs={2} md={2} style={{marginLeft: 10 + "%"}}>
                                    Vous êtes:
                                </Col>
                                <Col xs={2} md={2}>
                                    <RadioButton name="gender" checked="" onClick={this.selectGendre} text="Une Femme"/>
                                </Col>
                                <Col xs={2} md={2}>
                                    <RadioButton name="gender" checked="" onClick={this.selectGendre} text="Un Homme"/>
                                </Col>
                                <Col xs={2} md={1}>

                                </Col>
                                <Col xs={4} md={3}>

                                </Col>
                            </Row>
                            <br/>
                            <br/>
                            <Row>
                                <Col xs={3} md={2}>
                                </Col>
                                <Col xs={3} md={2}>
                                    <InputText type="text" text="Prénom" unit="" save="prenom"
                                               onChange={this.onChange}/>
                                </Col>
                                <Col xs={2} md={1}>
                                </Col>
                                <Col xs={4} md={3}>
                                    <InputText type="text" text="Adresse e-mail" unit="" save="adressEMail"
                                               onChange={this.onChange}
                                    />
                                </Col>
                                <Col xsHidden md={4}>
                                    <InputText type="password" text="Mot de passe" unit="" save="mdp"
                                               onChange={this.onChange}
                                    />
                                </Col>
                            </Row>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <center>
                                <ButtonNormal onClick={this.onClick} text="ENREGISTER MES INFORMATION"/>
                            </center>
                        </div>
                    </Grid>
                </center>
            </Board>
        );
    }
}

SauvegardezInformations.propTypes = {
    history: PropTypes.object.isRequired,
    closePopup: PropTypes.func,
};

export default SauvegardezInformations;