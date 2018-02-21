import React, {Component} from 'react';
import felicitation from '../imgs/felicitation.jpg';
import ButtonNormal from "../components/Buttons/ButtonNormal";
import PropTypes from 'prop-types';
import Board from "../components/Board";

class Felicitations extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const {history} = this.props;
        history.push("/");
    }

    render() {
        return (
            <Board closePopup={this.props.closePopup} history={this.props.history}>
                <center>
                   <img src={felicitation}  alt="logo"/>
                    <ButtonNormal onClick={this.onClick} text="RETOURNEZ À L'ÉCRAN ACCUILLE"/>
                </center>
            </Board>
        );
    }
}

Felicitations.propTypes = {
    history: PropTypes.object.isRequired,
    closePopup:PropTypes.func,
};

export default Felicitations;