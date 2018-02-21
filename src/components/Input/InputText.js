import React, {Component} from 'react';
import PropTypes from 'prop-types';

class InputText extends Component {
    constructor(props){
        super(props);
        this.state={
            titleStyle:{
                color:"#cc9900",
                fontSize:21+"px"
            },
            unitStyle:{
                color:"#9d9d9d",
            }
        };
        this.saveValue = this.saveValue.bind(this);
    }

    saveValue(event){
        this.props.onChange(event.target.value,this.props.save);
    }

    render() {
        return (
            <div className="InputText">
                <p style={this.state.titleStyle}>{this.props.text}</p>
                <input type={this.props.type} style={{border:0+"px",lineHeight:200+"%"}} defaultValue={this.props.default} onChange={this.saveValue}/><font style={this.state.unitStyle}>{'  '}{this.props.unit}</font>
            </div>
        )
    }
}

InputText.propTypes={
    text:PropTypes.string.isRequired,
    unit:PropTypes.string.isRequired,
    save:PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired,
    type:PropTypes.string.isRequired,
    default:PropTypes.string,
};


export default InputText;