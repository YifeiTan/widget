import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Grid} from 'react-bootstrap';

import RadioButton from "../components/Input/RadioButton";
import Board from "../components/Board";
import cookie from 'react-cookies';

class MesInfosPerso extends Component {
    constructor(props) {
        super(props);
        this.selectGendre = this.selectGendre.bind(this);
    }


    componentDidMount() {
        const {history} = this.props;
        if (cookie.load("gendre") === "Femme") {
            history.push("/mesInfosPersoFemme");
        }
        else if (cookie.load("gendre") === "Homme"){
            history.push("/mesInfosPersoHomme");
        }
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
                                <RadioButton name="gender" checked="" onClick={this.selectGendre} text="Un Homme"/>
                            </Col>
                        </Row>
                    </div>
                </Grid>
            </Board>
        );
    }
}

MesInfosPerso.propTypes = {
    history: PropTypes.object.isRequired,
    closePopup: PropTypes.func,
};

export default MesInfosPerso;