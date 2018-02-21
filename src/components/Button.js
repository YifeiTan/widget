import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "Button",
            style: {
                backgroundColor: "#FFF",
                color: "#000",
                border: "none",
                padding: 4 + "%",
                margin: 2 + "%",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
            },
            styleChanged: {
                backgroundColor: "#000",
                color: "#FFF",
                border: 1+"px solid ",
                padding: 4 + "%",
                margin: 2 + "%",
                textAlign: "center",
                textDecoration: "none",
                display: "inline-block",
                fontSize: "16px",
                borderColor:"#FFF"
            },
        };
        this.mouseEvent = this.mouseEvent.bind(this);
    }

    mouseEvent(){
        let a = this.state.style;
        let b = this.state.styleChanged;
        this.setState({style:b,styleChanged:a});
    }

    render() {
        return (
            <div className="Button">
                <button style={this.state.style} onClick={this.props.onClick} onMouseOver={this.mouseEvent}
                        onMouseLeave={this.mouseEvent}>
                    {this.props.text}
                </button>
            </div>
        )
    }
}

Button.propTypes = {
    onClick: PropTypes.func,
    text: PropTypes.string
};

export default Button;