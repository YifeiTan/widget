import React, {Component} from 'react';
import PropTypes from 'prop-types';
import icon_femme from '../../imgs/icon_femme.jpg';
import icon_homme from '../../imgs/icon_homme.jpg';

class RadioButton extends Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(){
        this.props.onClick(this.props.text);
    }

    render() {
        if(this.props.text==="Une Femme"){
        return (
            <div className="RadioButton">
                <input type="radio" name={this.props.name} onClick={this.onClick} defaultChecked={this.props.checked}/><img src={icon_femme}  alt="femme"/>{this.props.text}
            </div>
        )}
            return(
                <div className="RadioButton">
                    <input type="radio" name={this.props.name} onClick={this.onClick} defaultChecked={this.props.checked}/><img src={icon_homme} alt="homme"/>{this.props.text}
                </div>
            )
    }
}

RadioButton.propTypes = {
    text: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired,
};

export default RadioButton;