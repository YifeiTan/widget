import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Grid} from 'react-bootstrap';

import ButtonNormal from "../components/Buttons/ButtonNormal";
import ButtonReturn from "../components/Buttons/ButtonReturn";
import InputText from "../components/Input/InputText"
import Board from "../components/Board";
import cookie from 'react-cookies';



class RenseignezMensurationsPourConnaitre extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    state = {
        tourDePoitrine: 0,
        tourDeTaille: 0,
        tourDeHanches: 0,
        longueurDesBras: 0,
        longueurDesJambes: 0,
        tourDeCou: 0,
    }

    onClick() {
        const {history} = this.props;
        cookie.save('tourDePoitrine',this.state.tourDePoitrine);
        cookie.save('tourDeTaille',this.state.tourDeTaille);
        cookie.save('tourDeHanches',this.state.tourDeHanches);
        cookie.save('longueurDesBras',this.state.longueurDesBras);
        cookie.save('longueurDesJambes',this.state.longueurDesJambes);
        cookie.save('tourDeCou',this.state.tourDeCou);
        history.push("/Felicitations");
    }

    onChange(value, save) {
        switch (save) {
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
                    <center>
                        <div style={{marginTop: 6 + "%", width: 85 + "%"}}>
                            <p>Renseignez vos mensurations pour connaitre votre taille sur tous vos articles!</p>
                            <br/>
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
                            <br/>
                            <br/>
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
                            <br/>
                            <br/>
                            <br/>
                            <Row>
                                <Col md={6}>
                                    <ButtonReturn onClick={this.onClick} text="PLUS TARD"/>
                                </Col>
                                <Col md={6}>
                                    <ButtonNormal onClick={this.onClick} text="ENREGISTER MES MENSURATION"/>
                                </Col>
                            </Row>
                        </div>
                    </center>
                </Grid>
            </Board>
        );
    }
}

RenseignezMensurationsPourConnaitre.propTypes = {
    history: PropTypes.object.isRequired
};

export default RenseignezMensurationsPourConnaitre;