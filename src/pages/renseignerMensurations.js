import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Grid} from 'react-bootstrap';
import dressInfo from '../imgs/dressInfo.jpg';
import RadioButton from "../components/Input/RadioButton";
import ButtonReturn from "../components/Buttons/ButtonReturn";
import ButtonNormal from "../components/Buttons/ButtonNormal";
import InputText from "../components/Input/InputText";
import Board from "../components/Board";
import cookie from 'react-cookies';


class RenseignerMensurations extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onClickGoBack = this.onClickGoBack.bind(this);
        this.selectGendre = this.selectGendre.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    state = {
        tourDePoitrine: 0,
        tourDeTaille: 0,
        tourDeHanches: 0,
        gendre:""
    };

    onChange(value, save) {
        switch (save) {
            case "TourDePoitrine":
                this.setState({tourDePoitrine: value});
                break;
            case "TourDeTaille":
                this.setState({tourDeTaille: value});
                break;
            case "TourDeHanches":
                this.setState({tourDeHanches: value});
                break;
            default:
                break;
        }
    }

    onClick() {
        const {history} = this.props;
        cookie.save('tourDePoitrine',this.state.tourDePoitrine);
        cookie.save('tourDeTaille',this.state.tourDeTaille);
        cookie.save('tourDeHanches',this.state.tourDeHanches);
        cookie.save('gendre',this.state.gendre);
        history.push("/ConseilTailleMensurations");
    }

    onClickGoBack() {
        const {history} = this.props;
        history.goBack();
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
                                <p>Merci de renseigner vos mensurations afin de connaître votre taille:</p>
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
                                        <InputText text="Tour de poitrine" unit="cm" save="TourDePoitrine"
                                                   onChange={this.onChange}/>
                                    </Col>
                                    <Col md={4}>
                                        <InputText text="Tour de taille" unit="cm" save="TourDeTaille"
                                                   onChange={this.onChange}
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <InputText text="Tour de hanches" unit="cm" save="TourDeHanches"
                                                   onChange={this.onChange}
                                        />
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

RenseignerMensurations.propTypes = {
    history: PropTypes.object.isRequired,
    closePopup: PropTypes.func,
};

export default RenseignerMensurations;