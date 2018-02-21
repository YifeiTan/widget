import React, {Component} from 'react';
import ButtonNormal from "../components/Buttons/ButtonNormal";
import PropTypes from 'prop-types';
import {Row, Col, Grid} from 'react-bootstrap';
import InputText from '../components/Input/InputText'
import Board from "../components/Board";
import cookie from 'react-cookies';

class Connexion extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    state = {
        adresseEMail: "",
        mdp: ""
    };

    onClick() {
        const {history} = this.props;
        cookie.save('userEmail',this.state.adresseEMail);
        cookie.save('passwd',this.state.mdp);
        history.push("/MesInfosPerso");
    }

    onChange(value, save) {
        switch (save) {
            case "adresseEMail":
                this.setState({adresseEMail: value});
                break;
            case "mdp":
                this.setState({mdp: value});
                break;
            default:
                break;
        }

    }

    render() {
        return (
            <Board closePopup={this.props.closePopup} history={this.props.history}>
                <Grid>
                    <center>
                        <div style={{width: 60 + "%", paddingTop: 20 + "%"}}>
                            <p>Connectez-vous pour profiter du conseil taille sur tous vos articles</p>
                            <Row>
                                <Col md={6}>
                                    <InputText type="text" text="Adresse E-mail" unit="" save="adresseEMail"
                                               onChange={this.onChange}/>
                                </Col>
                                <Col md={6}>
                                    <InputText type="password" text="Mot de passe" unit="" save="mdp"
                                               onChange={this.onChange}/>
                                </Col>
                            </Row>
                            <Row>
                                <ButtonNormal onClick={this.onClick} text="Connexion"/>
                            </Row>
                        </div>
                    </center>
                </Grid>
            </Board>
        );
    }
}


Connexion.propTypes = {
    history: PropTypes.object.isRequired,
    closePopup:PropTypes.func,
};

export default Connexion;